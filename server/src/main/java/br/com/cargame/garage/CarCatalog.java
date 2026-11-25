package br.com.cargame.garage;

import br.com.cargame.common.ApiException;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.IOException;
import java.io.InputStream;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import org.springframework.stereotype.Component;

/**
 * Carros à venda e suas peças pintáveis (catalog.json). Os ids das peças são os nomes dos objetos
 * no modelo 3D (os mesmos de customizableParts em src/vehicles/vehicles.config.js).
 */
@Component
public class CarCatalog {
    public record Part(String id, String name, String defaultColor) {}
    public record Car(String id, String name, int price, String defaultColor, int maxDropCm, List<Part> parts) {
        public String defaultColorOf(String partId) {
            return parts.stream().filter(p -> p.id().equals(partId)).findFirst()
                    .map(p -> p.defaultColor() != null ? p.defaultColor() : defaultColor).orElse(defaultColor);
        }
        public boolean hasPart(String partId) {
            return parts.stream().anyMatch(p -> p.id().equals(partId));
        }
    }
    private record File(List<Car> cars) {}

    private final Map<String, Car> cars = new LinkedHashMap<>();

    public CarCatalog(ObjectMapper json) throws IOException {
        try (InputStream in = getClass().getResourceAsStream("/catalog.json")) {
            for (Car car : json.readValue(in, File.class).cars()) cars.put(car.id(), car);
        }
    }

    public List<Car> all() { return List.copyOf(cars.values()); }

    public Car get(String carId) {
        Car car = carId == null ? null : cars.get(carId);
        if (car == null) throw ApiException.notFound("unknown_car", "Carro desconhecido.");
        return car;
    }
}
