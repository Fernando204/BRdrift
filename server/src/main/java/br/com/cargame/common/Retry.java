package br.com.cargame.common;

import java.util.function.Supplier;
import org.springframework.dao.OptimisticLockingFailureException;

/**
 * Repete uma operação que leu e gravou o documento do jogador quando outra requisição gravou no meio
 * (@Version). Ex.: o jogo informa o combustível enquanto um drift é registrado: os dois valem.
 */
public final class Retry {
    private Retry() {}

    public static <T> T onConflict(Supplier<T> action) {
        for (int attempt = 1; ; attempt++) {
            try {
                return action.get();
            } catch (OptimisticLockingFailureException e) {
                if (attempt >= 3) throw e;
            }
        }
    }
}
