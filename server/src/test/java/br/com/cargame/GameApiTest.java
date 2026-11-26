package br.com.cargame;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.cookie;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import br.com.cargame.auth.AuthSessionRepository;
import br.com.cargame.auth.UserAccount;
import br.com.cargame.auth.UserAccountRepository;
import jakarta.servlet.http.Cookie;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.dao.OptimisticLockingFailureException;
import static org.junit.jupiter.api.Assertions.assertThrows;

/** Fluxos principais da API: conta, sessão por cookie, carro inicial, loja, oficina e drift. */
// usa o MongoDB local (mongodb://localhost:27017), num banco separado só para os testes
@SpringBootTest(properties = {"spring.data.mongodb.uri=mongodb://localhost:27017/cargame_test",
        "spring.data.mongodb.database=cargame_test"})
@AutoConfigureMockMvc
class GameApiTest {
    @Autowired MockMvc mvc;
    @Autowired UserAccountRepository users;
    @Autowired AuthSessionRepository sessions;

    @BeforeEach
    void limpaBanco() {   // apaga os documentos, mas mantém os índices (nome único, TTL)
        users.deleteAll();
        sessions.deleteAll();
    }

    private Cookie register(String name) throws Exception {
        var res = mvc.perform(post("/api/auth/register").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"" + name + "\",\"password\":\"segredo1\"}"))
                .andExpect(status().isCreated())
                .andExpect(cookie().httpOnly("CG_SESSION", true))
                .andExpect(jsonPath("$.needsStarter").value(true))
                .andReturn();
        return res.getResponse().getCookie("CG_SESSION");
    }

    private void giveCoins(String name, long coins) {
        var u = users.findByUsernameKey(name.toLowerCase()).orElseThrow();
        u.setCoins(coins);
        users.save(u);
    }

    @Test
    void nomeDeUsuarioNaoSeRepete() throws Exception {
        register("Piloto1");
        mvc.perform(post("/api/auth/register").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"piloto1\",\"password\":\"outrasenha\"}"))
                .andExpect(status().isConflict())
                .andExpect(jsonPath("$.error").value("username_taken"));
    }

    @Test
    void loginComSenhaErradaFalhaESemCookieNaoAcessa() throws Exception {
        register("Piloto2");
        mvc.perform(post("/api/auth/login").contentType(MediaType.APPLICATION_JSON)
                        .content("{\"username\":\"Piloto2\",\"password\":\"errada\"}"))
                .andExpect(status().isUnauthorized());
        mvc.perform(get("/api/me")).andExpect(status().isUnauthorized());
    }

    @Test
    void sairInvalidaASessao() throws Exception {
        Cookie c = register("Piloto3");
        mvc.perform(get("/api/me").cookie(c)).andExpect(status().isOk()).andExpect(jsonPath("$.username").value("Piloto3"));
        mvc.perform(post("/api/auth/logout").cookie(c)).andExpect(status().isNoContent());
        mvc.perform(get("/api/me").cookie(c)).andExpect(status().isUnauthorized());
    }

    @Test
    void carroInicialLojaEOficina() throws Exception {
        Cookie c = register("Piloto4");
        mvc.perform(post("/api/garage/starter").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"carId\":\"chevette\"}"))
                .andExpect(status().isOk()).andExpect(jsonPath("$.selectedCar").value("chevette"));
        // só um carro inicial
        mvc.perform(post("/api/garage/starter").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"carId\":\"saveiro\"}"))
                .andExpect(status().isConflict());
        // sem moedas não compra
        mvc.perform(post("/api/shop/buy").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"carId\":\"saveiro\"}"))
                .andExpect(status().isBadRequest()).andExpect(jsonPath("$.error").value("insufficient_coins"));
        giveCoins("Piloto4", 3000);
        mvc.perform(post("/api/shop/buy").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"carId\":\"saveiro\"}"))
                .andExpect(status().isOk()).andExpect(jsonPath("$.coins").value(2000)).andExpect(jsonPath("$.cars.length()").value(2));
        // pintar uma peça: 150
        mvc.perform(post("/api/garage/paint").cookie(c).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"carId\":\"saveiro\",\"colors\":{\"Capo\":\"#ff0000\"}}"))
                .andExpect(status().isOk()).andExpect(jsonPath("$.cost").value(150)).andExpect(jsonPath("$.profile.coins").value(1850));
        // repetir a mesma cor não cobra
        mvc.perform(post("/api/garage/paint").cookie(c).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"carId\":\"saveiro\",\"colors\":{\"Capo\":\"#FF0000\"}}"))
                .andExpect(status().isOk()).andExpect(jsonPath("$.cost").value(0));
        // carro inteiro (10 peças): 10 x 150 - 10% = 1350
        mvc.perform(post("/api/garage/paint").cookie(c).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"carId\":\"saveiro\",\"fullColor\":\"#1f4fb5\"}"))
                .andExpect(status().isOk()).andExpect(jsonPath("$.cost").value(1350)).andExpect(jsonPath("$.profile.coins").value(500));
        // rebaixar metade (17 cm x 0,5 = 8,5 -> 9 cm x 30) = 270
        mvc.perform(post("/api/garage/suspension").cookie(c).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"carId\":\"saveiro\",\"lowering\":0.5}"))
                .andExpect(status().isOk()).andExpect(jsonPath("$.cost").value(270)).andExpect(jsonPath("$.profile.coins").value(230));
    }

    @Test
    void driftViraMoedasComLimites() throws Exception {
        Cookie c = register("Piloto5");
        mvc.perform(post("/api/score/drift").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"points\":5000,\"durationMs\":8000}"))
                .andExpect(status().isOk()).andExpect(jsonPath("$.coinsEarned").value(100)).andExpect(jsonPath("$.newRecord").value(true));
        // impossível: 1 milhão de pontos em 2 segundos
        mvc.perform(post("/api/score/drift").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"points\":1000000,\"durationMs\":2000}"))
                .andExpect(status().isBadRequest());
        // logo em seguida: drift mais longo que o tempo que passou
        mvc.perform(post("/api/score/drift").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"points\":3000,\"durationMs\":9000}"))
                .andExpect(status().isBadRequest()).andExpect(jsonPath("$.error").value("drift_too_fast"));
        mvc.perform(get("/api/leaderboard")).andExpect(status().isOk()).andExpect(jsonPath("$[0].username").value("Piloto5"));
    }

    @Test
    void salaPrivadaPrecisaDeSenhaValida() throws Exception {
        Cookie c = register("Piloto6");
        mvc.perform(post("/api/rooms").cookie(c).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Racha\",\"password\":\"12\",\"map\":\"salto\"}"))
                .andExpect(status().isBadRequest());
        mvc.perform(post("/api/rooms").cookie(c).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"name\":\"Racha\",\"password\":\"1234\",\"map\":\"salto\"}"))
                .andExpect(status().isCreated()).andExpect(jsonPath("$.isPrivate").value(true));
        mvc.perform(get("/api/rooms").cookie(c)).andExpect(status().isOk()).andExpect(jsonPath("$[0].id").value("global"));
    }

    @Test
    void mustangNaoPodeSerOCarroInicialSoComprado() throws Exception {
        Cookie c = register("Piloto10");
        mvc.perform(post("/api/garage/starter").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"carId\":\"mustang\"}"))
                .andExpect(status().isBadRequest())
                .andExpect(jsonPath("$.error").value("not_starter"));
        mvc.perform(post("/api/garage/starter").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"carId\":\"chevette\"}"))
                .andExpect(status().isOk());
        giveCoins("Piloto10", 1000);
        mvc.perform(post("/api/shop/buy").cookie(c).contentType(MediaType.APPLICATION_JSON).content("{\"carId\":\"mustang\"}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.coins").value(0))
                .andExpect(jsonPath("$.cars.length()").value(2));
        mvc.perform(get("/api/catalog")).andExpect(jsonPath("$.cars[2].id").value("mustang"))
                .andExpect(jsonPath("$.cars[2].starter").value(false));
    }

    @Test
    void corridaDeTaxiPagaPelaDistanciaDaRotaERecusaCorridasImpossiveis() throws Exception {
        Cookie c = register("Taxista1");
        // 2 km de rota em 3 minutos: 10 + 60 * 2 = 130 moedas
        mvc.perform(post("/api/taxi/fare").cookie(c).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"routeMeters\":2000,\"straightMeters\":1500,\"durationMs\":180000}"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.coinsEarned").value(130))
                .andExpect(jsonPath("$.coins").value(130))
                .andExpect(jsonPath("$.rides").value(1));
        // outra corrida logo em seguida, que levaria 3 minutos: sobrepõe a anterior
        mvc.perform(post("/api/taxi/fare").cookie(c).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"routeMeters\":2000,\"straightMeters\":1500,\"durationMs\":180000}"))
                .andExpect(status().isBadRequest()).andExpect(jsonPath("$.error").value("ride_too_fast"));
        Cookie d = register("Taxista2");
        // 3 km em 20 s (150 m/s): impossível
        mvc.perform(post("/api/taxi/fare").cookie(d).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"routeMeters\":3000,\"straightMeters\":2000,\"durationMs\":20000}"))
                .andExpect(status().isBadRequest()).andExpect(jsonPath("$.error").value("invalid_ride"));
        // linha reta maior que a rota: impossível
        mvc.perform(post("/api/taxi/fare").cookie(d).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"routeMeters\":1000,\"straightMeters\":1500,\"durationMs\":100000}"))
                .andExpect(status().isBadRequest());
        // além do limite de distância
        mvc.perform(post("/api/taxi/fare").cookie(d).contentType(MediaType.APPLICATION_JSON)
                        .content("{\"routeMeters\":9000,\"straightMeters\":5000,\"durationMs\":900000}"))
                .andExpect(status().isBadRequest());
        mvc.perform(get("/api/taxi/rates")).andExpect(status().isOk()).andExpect(jsonPath("$.perKm").value(60));
    }

    @Test
    void indiceUnicoBarraNomeRepetidoMesmoSemPassarPelaApi() {
        users.save(new UserAccount("Duplo", "x"));
        assertThrows(DuplicateKeyException.class, () -> users.save(new UserAccount("duplo", "y")));
    }

    @Test
    void gravacaoConcorrenteNaoGastaOMesmoSaldoDuasVezes() throws Exception {
        register("Piloto9");
        giveCoins("Piloto9", 1000);
        var a = users.findByUsernameKey("piloto9").orElseThrow();
        var b = users.findByUsernameKey("piloto9").orElseThrow();
        a.setCoins(a.getCoins() - 1000);
        users.save(a);
        b.setCoins(b.getCoins() - 1000);   // cópia desatualizada: o @Version recusa
        assertThrows(OptimisticLockingFailureException.class, () -> users.save(b));
    }
}
