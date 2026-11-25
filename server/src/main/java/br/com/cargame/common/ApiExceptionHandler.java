package br.com.cargame.common;

import java.util.Map;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

/** Converte erros em JSON {error, message} com o status certo. */
@RestControllerAdvice
public class ApiExceptionHandler {

    @ExceptionHandler(ApiException.class)
    ResponseEntity<Map<String, String>> api(ApiException e) {
        return ResponseEntity.status(e.status()).body(Map.of("error", e.code(), "message", e.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    ResponseEntity<Map<String, String>> invalid(MethodArgumentNotValidException e) {
        String message = e.getBindingResult().getFieldErrors().stream()
                .findFirst().map(f -> f.getDefaultMessage()).orElse("Dados inválidos.");
        return ResponseEntity.badRequest().body(Map.of("error", "invalid", "message", message));
    }

    @ExceptionHandler(HttpMessageNotReadableException.class)
    ResponseEntity<Map<String, String>> unreadable() {
        return ResponseEntity.badRequest().body(Map.of("error", "invalid", "message", "Requisição inválida."));
    }

    /** Duas compras ao mesmo tempo na mesma conta: só uma vale. */
    @ExceptionHandler(OptimisticLockingFailureException.class)
    ResponseEntity<Map<String, String>> concurrent() {
        return ResponseEntity.status(HttpStatus.CONFLICT).body(Map.of("error", "concurrent", "message", "Operação em andamento. Tente de novo."));
    }
}
