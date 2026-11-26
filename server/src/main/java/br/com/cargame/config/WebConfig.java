package br.com.cargame.config;

import br.com.cargame.auth.AuthInterceptor;
import java.nio.file.Path;
import java.util.List;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * - Serve o jogo (index.html, dist/, assets/, src/styles/) a partir da pasta do projeto. Só essas
 *   pastas ficam públicas: o código do servidor, os arquivos do Blender etc. não são expostos.
 * - Exige login em /api/**, exceto criar conta, entrar, catálogo e ranking.
 */
@Configuration
public class WebConfig implements WebMvcConfigurer {
    private final GameProperties props;
    private final AuthInterceptor auth;

    public WebConfig(GameProperties props, AuthInterceptor auth) {
        this.props = props;
        this.auth = auth;
    }

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String root = Path.of(props.staticDir()).toAbsolutePath().normalize().toUri().toString();
        CacheControl revalidate = CacheControl.noCache();   // o navegador confere a versão a cada carga (sem cache velho)
        registry.addResourceHandler("/index.html").addResourceLocations(root).setCacheControl(revalidate);
        registry.addResourceHandler("/dist/**").addResourceLocations(root + "dist/").setCacheControl(revalidate);
        registry.addResourceHandler("/assets/**").addResourceLocations(root + "assets/").setCacheControl(revalidate);
        registry.addResourceHandler("/src/styles/**").addResourceLocations(root + "src/styles/").setCacheControl(revalidate);
    }

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        registry.addViewController("/").setViewName("forward:/index.html");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(auth).addPathPatterns("/api/**")
                .excludePathPatterns("/api/auth/register", "/api/auth/login", "/api/auth/logout", "/api/catalog", "/api/taxi/rates", "/api/leaderboard");
    }

    @Override
    public void addArgumentResolvers(List<HandlerMethodArgumentResolver> resolvers) {
        resolvers.add(auth);
    }
}
