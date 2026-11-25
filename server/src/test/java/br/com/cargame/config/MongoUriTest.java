package br.com.cargame.config;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

/** Valores de CARGAME_MONGODB_URI como costumam chegar quando colados num painel. */
class MongoUriTest {
    private static final String OK = "mongodb+srv://jogo:s3nh4@cluster0.abcde.mongodb.net/cargame?retryWrites=true&w=majority";

    @Test
    void semVariavelUsaOPadraoLocal() {
        assertNull(MongoUri.normalize(null));
    }

    @Test
    void valorCorretoPassaSemMudanca() {
        assertEquals(OK, MongoUri.normalize(OK));
        assertEquals("mongodb://localhost:27017/cargame", MongoUri.normalize("mongodb://localhost:27017/cargame"));
    }

    @Test
    void corrigeEspacosAspasENomeColadoJunto() {
        assertEquals(OK, MongoUri.normalize("  " + OK + "\n"));
        assertEquals(OK, MongoUri.normalize("\"" + OK + "\""));
        assertEquals(OK, MongoUri.normalize("'" + OK + "'"));
        assertEquals(OK, MongoUri.normalize("CARGAME_MONGODB_URI=" + OK));
        assertEquals(OK, MongoUri.normalize("CARGAME_MONGODB_URI=\"" + OK + "\""));
    }

    @Test
    void valorVazioDaErroClaro() {
        var e = assertThrows(IllegalStateException.class, () -> MongoUri.normalize("   "));
        assertTrue(e.getMessage().contains("vazia"));
    }

    @Test
    void valorQueNaoEDoMongoDaErroSemMostrarASenha() {
        var e = assertThrows(IllegalStateException.class, () -> MongoUri.normalize("https://jogo:s3nh4@cluster0.mongodb.net"));
        assertTrue(e.getMessage().contains("https://"));
        assertFalse(e.getMessage().contains("s3nh4"));
        assertFalse(e.getMessage().contains("jogo:"));
    }

    @Test
    void campoDeExemploEEspacoNoMeioDaoErro() {
        assertThrows(IllegalStateException.class,
                () -> MongoUri.normalize("mongodb+srv://jogo:<password>@cluster0.abcde.mongodb.net/cargame"));
        assertThrows(IllegalStateException.class,
                () -> MongoUri.normalize("mongodb+srv://jogo:s3nh4@cluster0.abcde.mongodb.net/ cargame"));
    }
}
