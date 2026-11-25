# Otimização de desempenho: resultados

Este relatório complementa a [auditoria](01-auditoria.md).

- **Branch:** `otimizacao-desempenho`.
- **Linha de base:** commit `1000fc2`, que é o jogo original mais o painel de medição. Nenhuma otimização entra nele.

## Como foi medido

- **Ambiente:** mesma máquina e GPU (AMD Radeon integrada, ANGLE/D3D11). Resolução fixada em 1280×720 com pixel ratio 1, qualidade "média" e sombras ligadas.
- **Benchmark determinístico:** `?bench=…`, mesmo trajeto, passo fixo de 1/60 s, 600 quadros mais 60 de aquecimento. A GPU é medida por *timer queries* (`EXT_disjoint_timer_query_webgl2`).
- **Ordem das execuções:** linha de base e versão nova alternadas no mesmo período. Durante a sessão a GPU da máquina chegou a ficar estrangulada (até 47 ms na linha de base). Essas rodadas foram descartadas.
- **Fidelidade visual:** comparei os mesmos quadros das duas versões pixel a pixel, com `Math.random` de semente fixa e as texturas de ruído procedurais desligadas nas duas, porque essas texturas mudam a cada carregamento. Resultado: **≤ 0,004% dos pixels diferentes** (5 a 40 pixels em 921.600, diferença máxima de 34/255).

## Resultados: tempo por quadro

| Cenário | Versão | CPU (média) | CPU p95 | GPU | Draw calls | Triângulos |
|---|---|---|---|---|---|---|
| Cidade, dia | antes | 3,97 ms | 5,1 ms | **10,11 ms** | 288 | 1,31 M |
| Cidade, dia | depois | 4,10 ms | 5,0 ms | **4,59 ms** (−55%) | 301 | 0,93 M |
| Cidade, noite | antes | 4,27 ms | 6,1 ms | **10,19 ms** | 288 | 1,31 M |
| Cidade, noite | depois | 3,98 ms | 5,2 ms | **5,32 ms** (−48%) | 301 | 0,93 M |
| Circuito | antes | 3,16 ms | 4,1 ms | **6,19 ms** | 216 | 0,80 M |
| Circuito | depois | 2,73 ms | 3,5 ms | **3,33 ms** (−46%) | 252 | 0,91 M |

Com o laço real (`requestAnimationFrame`), cidade de dia, monitor de 100 Hz:

| Versão | FPS médio | Quadro médio | Quadro p95 |
|---|---|---|---|
| Antes | 86,7 | 11,53 ms | **20,0 ms** (perdia o vsync: engasgos) |
| Depois | **100** (limite do monitor) | 10,00 ms | **10,1 ms** (estável) |

**Gargalo:** o quadro era limitado pela GPU (10 ms contra 4 ms de CPU). Depois das mudanças, CPU e GPU ficam ambas em ~4–5 ms. Sobra folga para 60 FPS em GPUs bem mais fracas: com o custo de GPU dividido por ~2, uma GPU 3× mais lenta que esta continua abaixo de 16,7 ms.

**Por que os draw calls subiram um pouco:** são três passadas (sombra, cenário, carro) e regiões menores. Em troca, a passada de *transmission* deixou de redesenhar a cidade, e a CPU continuou igual ou menor.

## Otimizações realizadas

| # | Otimização | Arquivos | Ganho medido |
|---|---|---|---|
| 1 | Carro (e transparentes que se misturam com ele: fumaça, rota do GPS) desenhado numa passada própria (camada `VEHICLE`). A *transmission* das lentes passa a reprocessar só o carro, não a cidade. | `core/Renderer.js`, `utils/Constants.js`, `vehicles/Vehicle.js`, `effects/TireSmoke.js`, `city/GpsRoute.js`, `vehicles/VehicleCustomization.js` | GPU −4,1 ms na cidade |
| 2 | Passada 0 só do mapa de sombra, com uma câmera-sonda que enxerga todas as camadas. Necessária porque o Three.js filtra quem projeta sombra pelas camadas da câmera principal. | `core/Renderer.js` | sombras do carro e da cidade preservadas |
| 3 | Gramado e céu desenhados por último entre os opacos (early-z). | `environment/Environment.js` | ~0,3–1 ms de GPU |
| 4 | Cidade em regiões de 400 m (`ChunkGrid`): culling por distância (além da neblina total), frustum por região e LOD. No LOD distante, troncos e faixas pintadas somem e a densidade de árvores segue a qualidade. Sem recriar geometria ao voltar a uma região. | `maps/CityMap.js`, `maps/city/ChunkGrid.js` | −0,4 M triângulos |
| 5 | Sombras da cidade só das instâncias num raio de 100 m (`ShadowCasters`, camada `SHADOW_ONLY`), em vez de blocos inteiros de 800 m. | `maps/city/ShadowCasters.js` | 50–150 objetos no mapa de sombra em vez de milhares |
| 6 | Troncos sem tampas (nunca visíveis). | `CityMap.js`, `TrackMap.js` | −50 mil triângulos |
| 7 | Matrizes do cenário estático congeladas (o Three.js deixa de percorrer ~2.300 objetos por quadro). | `utils/Helpers.js` (`freezeStatic`), `CityMap.js`, `TrackMap.js`, `GpsRoute.js` | CPU −1,1 ms |
| 8 | Faróis apagados deixam de ser calculados (SpotLights invisíveis). As duas variantes dos shaders são pré-renderizadas no carregamento, sem travada ao acender. | `Vehicle.js`, `Game.js` (`prewarmShaders`) | ~0,6 ms de GPU de dia |
| 9 | Marcas de pneu: envio à GPU só do segmento novo (antes ~330 KB por segmento). | `effects/SkidMarks.js` | barramento e CPU nas derrapagens |
| 10 | Sem lixo por quadro: posição do olho FPS, projeção do minimapa e ações do HUD (recalculadas só quando o estado muda). DOM escrito só quando muda, elementos em cache. | `FirstPersonController.js`, `CityMap.js`, `HUD.js`, `PlayerController.js`, `Game.js` | menos coleta de lixo |
| 11 | A*: buffers e fila de prioridade reaproveitados (arrays paralelos, sem objeto por item). | `city/RoadNetwork.js` | sem alocação a cada recálculo (0,6 s) |
| 12 | Áudio: parâmetros reagendados só quando mudam. A resposta ao giro e ao acelerador continua igual. | `systems/AudioSystem.js` | menos eventos de automação |
| 13 | Opções gráficas: predefinições Baixa/Média/Alta (resolução, mapa de sombra, distância, LOD, densidade) e ajuste individual de sombras (sem/baixa/média/alta), resolução (50–100%) e distância. Tudo salvo no `localStorage`. | `Settings.js`, `Menu.js`, `Game.js`, `Lighting.js`, `Renderer.js`, `index.html`, `utils/Constants.js` | — |
| 14 | Diagnóstico: painel (F3 ou Opções) com FPS, tempo de quadro, CPU por etapa, GPU, gargalo, draw calls, triângulos, geometrias, texturas, shaders e memória JS. Benchmark reproduzível. | `core/PerformanceMonitor.js`, `ui/DiagnosticsPanel.js`, `core/Benchmark.js` | — |

## Problemas encontrados e corrigidos durante o trabalho

- **Sombras sumiram no primeiro teste da passada separada do carro.** O Three.js testa as camadas da câmera principal ao desenhar o mapa de sombra. A comparação pixel a pixel mostrou grama clara onde antes havia sombra, e a passada 0 com a câmera-sonda resolveu.
- **Recompilação ao acender os faróis.** `renderer.compile()` não cobre as variantes da passada de *transmission*. Troquei por um quadro completo pré-renderizado em cada estado; sobram 2 programas de profundidade minúsculos.
- **O benchmark sobrescrevia as preferências do jogador** (mapa e horário). Agora ele não salva nada.

## O que foi avaliado e **não** foi feito (com justificativa)

- **Lentes opacas** em vez de *transmission*: −4,4 ms de GPU, mas muda visivelmente o farol (~45 mil pixels em close). Rejeitado pela regra de preservar a aparência do Chevette.
- **Materiais do carro só de um lado:** ganho de 0,13 ms, com risco de furos em painéis abertos do modelo.
- **Proxy simplificado para a sombra do carro:** a sombra do carro custa só 0,17 ms.
- **Física em Web Worker ou em frequência menor:** a física custa 0,04–0,07 ms por quadro. Um worker traria latência e sincronização sem ganho, e reduzir a frequência mudaria a dirigibilidade.
- **Occlusion culling:** com culling por região, distância e frustum, e prédios baixos e espalhados, o custo das consultas de oclusão superaria o ganho.

## Problemas que ainda precisam de atenção

1. **CPU por draw call.** O envio de comandos pelo Three.js (~3,5 ms por quadro) é a maior parcela de CPU que sobrou. O carro tem 84 malhas, porque as peças personalizáveis têm material próprio, e entra três vezes (sombra, imagem e transmission).
2. **Fumaça dos pneus.** Até 90 sprites com material próprio, então até 90 draw calls numa derrapagem longa. Merece virar uma `InstancedMesh` de billboards.
3. **Distância de renderização à noite.** A opção de distância (do trabalho anterior) substitui a neblina noturna de 320 m. Sugiro limitar a neblina noturna ao menor dos dois valores; isso também reduziria o custo à noite.
4. **Painel de diagnóstico em telas estreitas.** Ele pode cobrir a mensagem central do HUD (é opcional e fica desligado por padrão).
5. **Medições feitas numa única máquina.** Vale rodar o benchmark num PC intermediário de destino.

## Próximas otimizações recomendadas

1. **Fumaça em `InstancedMesh`:** menos draw calls nas derrapagens.
2. **Juntar as malhas das peças personalizáveis que compartilham a mesma cor:** atributo de cor por vértice ou um único material com `uniform` por peça, para reduzir os 84 draw calls do carro.
3. **Ruas com menos triângulos nos discos de curva:** 12 segmentos em cada curva, sem mudança visível a partir de ~50 m.
4. **Pré-aquecer os shaders dos materiais das regiões distantes** (estrada de terra, faixas) ao carregar a cidade, para evitar microtravadas na primeira vez em que aparecem.

## Como repetir as medições

```powershell
npm run build
```

```powershell
python -m http.server 8765
```

Abra `http://localhost:8765/index.html?bench=salto`, `?bench=salto&noite=1` ou `?bench=circuito`. O resultado aparece na tela e no console (`window.__benchResult`).

Para comparar com a linha de base, gere `git show 1000fc2:dist/game.js` numa cópia da página e rode o mesmo cenário em sequência, alternando as versões.
