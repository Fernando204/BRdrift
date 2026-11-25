# Drift BR: jogo (front-end) + servidor Spring Boot numa só imagem.
# docker build -t drift-br .   ·   docker run -p 8080:8080 drift-br

# 1) compila o JavaScript do jogo (dist/game.js) a partir de src/
FROM node:22-alpine AS web
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund
COPY src ./src
RUN npm run build

# 2) compila o servidor (o cache das dependências fica numa camada própria)
FROM maven:3.9-eclipse-temurin-21 AS server
WORKDIR /build
COPY server/pom.xml ./
RUN mvn -q -B dependency:go-offline
COPY server/src ./src
RUN mvn -q -B -DskipTests package && cp target/*.jar app.jar

# 3) imagem final: só o Java (JRE), o servidor e os arquivos que o jogo usa
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
RUN addgroup -S jogo && adduser -S jogo -G jogo && mkdir -p /app/data && chown jogo:jogo /app/data
COPY --from=server /build/app.jar ./app.jar
COPY index.html ./game/
COPY assets ./game/assets
COPY src/styles ./game/src/styles
COPY --from=web /build/dist ./game/dist
USER jogo

# o Render informa a porta em $PORT; game.static-dir aponta para a pasta do jogo
ENV PORT=8080 \
    GAME_STATICDIR=/app/game \
    JAVA_TOOL_OPTIONS="-XX:MaxRAMPercentage=75 -XX:+UseSerialGC -Xss512k"
EXPOSE 8080
VOLUME /app/data
ENTRYPOINT ["java", "-jar", "/app/app.jar"]
