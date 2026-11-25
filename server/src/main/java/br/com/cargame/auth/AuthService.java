package br.com.cargame.auth;

import br.com.cargame.common.ApiException;
import br.com.cargame.config.GameProperties;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.time.Duration;
import java.time.Instant;
import java.util.Base64;
import java.util.HexFormat;
import java.util.Optional;
import java.util.regex.Pattern;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.dao.DuplicateKeyException;

/** Criação de conta, login e sessões (token aleatório no cookie, hash no banco). */
@Service
public class AuthService {
    private static final Pattern USERNAME = Pattern.compile("^[A-Za-z0-9_.-]{3,20}$");
    private static final SecureRandom RANDOM = new SecureRandom();

    private final UserAccountRepository users;
    private final AuthSessionRepository sessions;
    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
    private final Duration sessionLength;
    /** Hash usado quando o usuário não existe, para o login levar o mesmo tempo nos dois casos. */
    private final String dummyHash;

    public AuthService(UserAccountRepository users, AuthSessionRepository sessions, GameProperties props) {
        this.users = users;
        this.sessions = sessions;
        this.sessionLength = Duration.ofDays(props.session().days());
        this.dummyHash = encoder.encode("senha-que-nao-existe");
    }

    public record Login(UserAccount user, String token) {}

    public Login register(String username, String password) {
        String name = username == null ? "" : username.trim();
        if (!USERNAME.matcher(name).matches())
            throw ApiException.badRequest("invalid_username", "O nome deve ter de 3 a 20 caracteres: letras, números, ponto, hífen ou _.");
        validatePassword(password);
        if (users.existsByUsernameKey(name.toLowerCase()))
            throw ApiException.conflict("username_taken", "Esse nome de usuário já está em uso.");
        UserAccount user;
        try {
            user = users.save(new UserAccount(name, encoder.encode(password)));
        } catch (DuplicateKeyException e) {   // dois cadastros do mesmo nome ao mesmo tempo: o índice único decide
            throw ApiException.conflict("username_taken", "Esse nome de usuário já está em uso.");
        }
        return new Login(user, openSession(user.getId()));
    }

    public Login login(String username, String password) {
        String key = username == null ? "" : username.trim().toLowerCase();
        Optional<UserAccount> user = users.findByUsernameKey(key);
        boolean ok = encoder.matches(password == null ? "" : password, user.map(UserAccount::getPasswordHash).orElse(dummyHash));
        if (user.isEmpty() || !ok) throw ApiException.unauthorized("Usuário ou senha incorretos.");
        return new Login(user.get(), openSession(user.get().getId()));
    }

    public void logout(String token) {
        if (token != null) sessions.deleteById(hash(token));
    }

    /** Usuário dono do token, se a sessão existir e não tiver expirado. */
    public Optional<String> resolve(String token) {
        if (token == null || token.isBlank()) return Optional.empty();
        return sessions.findById(hash(token))
                .filter(s -> s.getExpiresAt().isAfter(Instant.now()))
                .map(AuthSession::getUserId);
    }

    private String openSession(String userId) {
        byte[] bytes = new byte[32];
        RANDOM.nextBytes(bytes);
        String token = Base64.getUrlEncoder().withoutPadding().encodeToString(bytes);
        sessions.save(new AuthSession(hash(token), userId, Instant.now().plus(sessionLength)));
        return token;
    }

    private static void validatePassword(String password) {
        if (password == null || password.length() < 6)
            throw ApiException.badRequest("invalid_password", "A senha deve ter pelo menos 6 caracteres.");
        if (password.getBytes(StandardCharsets.UTF_8).length > 72)
            throw ApiException.badRequest("invalid_password", "A senha é longa demais (máximo de 72 caracteres).");
    }

    static String hash(String token) {
        try {
            return HexFormat.of().formatHex(MessageDigest.getInstance("SHA-256").digest(token.getBytes(StandardCharsets.UTF_8)));
        } catch (NoSuchAlgorithmException e) {
            throw new IllegalStateException(e);
        }
    }

    /** Limpa sessões vencidas uma vez por hora (o índice TTL do MongoDB também apaga sozinho). */
    @Scheduled(fixedDelay = 3_600_000)
    public void purgeExpired() {
        sessions.deleteByExpiresAtBefore(Instant.now());
    }
}
