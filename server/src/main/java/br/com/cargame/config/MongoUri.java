package br.com.cargame.config;

/**
 * Confere a string de conexão vinda de CARGAME_MONGODB_URI antes de o Spring usá-la.
 * Corrige os enganos comuns ao colar o valor num painel (Render, por exemplo): espaços e quebras
 * de linha nas pontas, aspas em volta e o nome da variável colado junto ("CARGAME_MONGODB_URI=...").
 * Se mesmo assim o valor não for uma string do MongoDB, para o servidor com uma mensagem clara,
 * sem nunca mostrar usuário e senha.
 */
public final class MongoUri {
    public static final String VARIABLE = "CARGAME_MONGODB_URI";

    private MongoUri() {}

    /** Valor limpo, ou null quando a variável não existe (o servidor usa o MongoDB local). */
    public static String normalize(String raw) {
        if (raw == null) return null;
        String v = raw.strip();
        int eq = v.indexOf('=');
        if (eq > 0 && !v.startsWith("mongodb") && v.substring(0, eq).strip().matches("[A-Za-z_][A-Za-z0-9_]*"))
            v = v.substring(eq + 1).strip();   // "NOME=valor" colado inteiro
        while (v.length() >= 2 && isQuote(v.charAt(0)) && v.charAt(v.length() - 1) == v.charAt(0))
            v = v.substring(1, v.length() - 1).strip();
        if (v.isEmpty())
            throw new IllegalStateException(VARIABLE + " está vazia. Defina o valor com a string de conexão do MongoDB "
                    + "(mongodb+srv://usuario:senha@cluster.../cargame) ou remova a variável para usar o MongoDB local.");
        if (!v.startsWith("mongodb://") && !v.startsWith("mongodb+srv://"))
            throw new IllegalStateException(VARIABLE + " não é uma string de conexão do MongoDB: ela deve começar com "
                    + "mongodb:// ou mongodb+srv://, mas começa com \"" + safePrefix(v) + "\" (" + v.length() + " caracteres). "
                    + "Copie de novo no Atlas em Connect → Drivers.");
        if (v.matches("(?s).*\\s.*"))
            throw new IllegalStateException(VARIABLE + " tem espaços ou quebras de linha no meio. Cole a string de conexão "
                    + "numa linha só.");
        if (v.contains("<") && v.contains(">"))
            throw new IllegalStateException(VARIABLE + " ainda tem um campo de exemplo entre < > (como <password>). "
                    + "Troque pelo valor real.");
        return v;
    }

    /**
     * Num servidor de hospedagem (o Render define RENDER) não há MongoDB local: sem CARGAME_MONGODB_URI
     * o jogo não tem onde gravar. Devolve a mensagem de erro, ou null se está tudo certo.
     * Cita só os NOMES de variáveis parecidas (nunca os valores), para achar a que foi criada com outro nome.
     */
    public static String missingOnHost(java.util.Map<String, String> env) {
        if (env.get(VARIABLE) != null || env.get("RENDER") == null) return null;
        var similar = env.keySet().stream().filter(k -> k.toUpperCase().contains("MONGO")).sorted().toList();
        return VARIABLE + " não está definida neste serviço, e aqui não existe MongoDB local. No painel do Render, "
                + "abra o serviço → Environment → Add Environment Variable, com a chave " + VARIABLE
                + " e o valor mongodb+srv://usuario:senha@cluster.../cargame; depois salve e faça o deploy de novo."
                + (similar.isEmpty() ? "" : " Variáveis parecidas encontradas (renomeie para " + VARIABLE + "): "
                + String.join(", ", similar) + ".");
    }

    private static boolean isQuote(char c) {
        return c == '"' || c == '\'' || c == '`';
    }

    /** Começo do valor sem dados sensíveis: no máximo 12 caracteres e nada depois de "://". */
    private static String safePrefix(String v) {
        String p = v.length() > 12 ? v.substring(0, 12) : v;
        int scheme = p.indexOf("://");
        return scheme >= 0 ? p.substring(0, scheme + 3) + "…" : p + (v.length() > 12 ? "…" : "");
    }
}
