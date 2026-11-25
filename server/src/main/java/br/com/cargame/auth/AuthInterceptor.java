package br.com.cargame.auth;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.core.MethodParameter;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;
import org.springframework.web.servlet.HandlerInterceptor;

/**
 * Protege as rotas da API: lê o cookie de sessão e guarda o id do usuário na requisição.
 * Sem sessão válida, responde 401. Também resolve parâmetros {@link CurrentUser}.
 */
@Component
public class AuthInterceptor implements HandlerInterceptor, HandlerMethodArgumentResolver {
    static final String USER_ATTR = "cargame.userId";

    private final AuthService auth;
    private final SessionCookies cookies;

    public AuthInterceptor(AuthService auth, SessionCookies cookies) {
        this.auth = auth;
        this.cookies = cookies;
    }

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        var userId = auth.resolve(cookies.read(request));
        if (userId.isEmpty()) {
            response.setStatus(401);
            response.setContentType("application/json;charset=UTF-8");
            response.getWriter().write("{\"error\":\"unauthorized\",\"message\":\"Faça login para continuar.\"}");
            return false;
        }
        request.setAttribute(USER_ATTR, userId.get());
        return true;
    }

    @Override
    public boolean supportsParameter(MethodParameter parameter) {
        return parameter.hasParameterAnnotation(CurrentUser.class) && parameter.getParameterType() == String.class;
    }

    @Override
    public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mav, NativeWebRequest request, WebDataBinderFactory binder) {
        return request.getNativeRequest(HttpServletRequest.class).getAttribute(USER_ATTR);
    }
}
