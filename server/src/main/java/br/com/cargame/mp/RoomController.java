package br.com.cargame.mp;

import br.com.cargame.auth.CurrentUser;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/** Lista e criação de salas (a entrada acontece pelo WebSocket, mensagem "join"). */
@RestController
@RequestMapping("/api/rooms")
public class RoomController {
    private final RoomService rooms;

    public RoomController(RoomService rooms) {
        this.rooms = rooms;
    }

    public record CreateRoom(String name, String password, String map) {}

    @GetMapping
    public List<RoomService.RoomInfo> list(@CurrentUser Long userId) {
        return rooms.list(userId);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public RoomService.RoomInfo create(@CurrentUser Long userId, @RequestBody CreateRoom body) {
        Room room = rooms.create(userId, body.name(), body.password(), body.map());
        return rooms.info(room, userId);
    }
}
