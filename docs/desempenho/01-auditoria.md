# Auditoria de desempenho (linha de base)

**Data:** 25/11/2026
**Código auditado:** commit `65c7146`

## Como foi medido

Medi com o painel de diagnóstico (`F3`) e com o benchmark reproduzível (`index.html?bench=salto`, `?bench=salto&noite=1`, `?bench=circuito`).

O benchmark percorre sempre o mesmo trajeto, a 15 m/s, com passo fixo de 1/60 s e câmera de perseguição. Os resultados são a média de 600 quadros, depois de 60 quadros de aquecimento.

**Máquina:** GPU integrada AMD Radeon (ANGLE/D3D11), 1280×720, pixel ratio 1, qualidade "média", sombras ligadas.

## Linha de base

| Cenário | Quadro médio | Quadro p95 | CPU | GPU | Draw calls | Triângulos |
|---|---|---|---|---|---|---|
| Cidade, dia | 11,98 ms | 20,0 ms | 6,58 ms | 10,26 ms | 288 | 1,31 M |
| Cidade, noite | 12,00 ms | 20,0 ms | 6,19 ms | 10,28 ms | 288 | 1,31 M |
| Circuito | 10,00 ms | 10,1 ms | 5,15 ms | 6,71 ms | 216 | 0,80 M |

Detalhamento da CPU na cidade:

- física: 0,07 ms;
- mundo, HUD e áudio: 0,66 ms;
- envio do render pelo Three.js: 5,78 ms.

O monitor de 100 Hz espera um quadro a cada 10 ms. Na cidade, o p95 de 20 ms mostra que um a cada poucos quadros perde o vsync. Nessa cena, a GPU é o gargalo.

## Medições isoladas (GPU, mesma câmera, cidade)

| Teste | GPU | Diferença |
|---|---|---|
| Cena completa | 8,4–8,6 ms | — |
| **Sem `transmission` nas lentes do carro** | 4,10 ms | **−4,4 ms e −131 draw calls** |
| Carro renderizado numa passada própria (transmission só do carro) | 6,03 ms | −2,4 ms |
| Sem o carro (tudo) | 2,31 ms | −6,2 ms |
| Sem os faróis (2 SpotLights) | 7,72 ms | −0,64 ms |
| Sem nenhuma sombra | 7,53 ms | −0,83 ms |
| Carro sem projetar sombra | 8,19 ms | −0,17 ms |
| Cidade sem projetar sombra | 8,10 ms | −0,26 ms |
| Sem as ruas | 7,57 ms | −0,8 ms (−300 mil triângulos) |
| Sem prédios e árvores | 6,74 ms | −1,75 ms |
| Sem gramado | 7,12 ms | −1,37 ms (custo de fragmento) |
| Sem céu | 8,11 ms | −0,38 ms |
| Materiais do carro só de um lado (FrontSide) | 3,97 ms vs 4,10 ms | −0,13 ms (não compensa o risco) |
| Metade da resolução | 3,92 ms | a GPU é limitada por fragmentos |

Custo de CPU, em ms por chamada:

| Chamada | Custo |
|---|---|
| A* (a cada 0,6 s) | 0,14 |
| `nearestDrivable` (só na tecla R) | 0,29 |
| Mostradores | 0,034 |
| Minimapa | 0,009 |
| Atualização visual do carro | 0,012 |
| `isOnRoad` | < 0,001 |

## Problemas encontrados

| # | Problema | Arquivo / sistema | Impacto estimado | Solução recomendada | Risco de regressão |
|---|---|---|---|---|---|
| 1 | As lentes (`Lente_Farol`, `Lente_Vermelha`, `Lente_Ambar`, `Lente_Re_Branca`) usam `KHR_materials_transmission`. Quando um objeto com transmission está visível, o Three.js re-renderiza **todos** os objetos opacos (cidade inclusa) num render target com mipmaps, a cada quadro. | `vehicles/Vehicle.js`, `core/Renderer.js` | **Alto:** ~4,4 ms de GPU e 131 draw calls (≈45% do quadro) | Renderizar o carro numa segunda passada (layer próprio), para que a transmission refaça só o carro. Atrás das lentes só existe a carcaça do farol, então a aparência fica igual. Substituir por lentes opacas foi testado e **rejeitado**: muda ~45 mil pixels do farol em close. | Baixo/médio: diferença medida de 450 a 600 pixels com 3% de brilho na câmera de jogo. Fumaça e GPS também precisam ir para a passada do carro, para manter a ordem de transparência. |
| 2 | Prédios e árvores ficam em blocos de 800 m. A sombra do sol cobre só ±35 m, mas o bloco inteiro (até milhares de instâncias) entra no mapa de sombra, e o culling por bloco quase não descarta nada. | `environment/maps/CityMap.js` | Médio: ~1,75 ms de GPU, mais draw calls | Blocos menores agrupados (chunks), com visibilidade pela distância de renderização e LOD por distância. Um conjunto dinâmico "só de sombra" com as instâncias próximas, para o mapa de sombra desenhar dezenas de objetos em vez de milhares. | Baixo: mesmas geometrias e materiais, e as sombras na área visível ficam idênticas. |
| 3 | As ruas são 4 malhas gigantes que cobrem a cidade toda (157 mil triângulos), sem culling. A distância de renderização só mexe na neblina, então nada além dela deixa de ser desenhado. | `CityMap.js`, `Environment.js` | Médio: ~0,8 ms de GPU | Dividir as ruas nos mesmos chunks dos prédios (frustum e distância). | Baixo: mesma geometria, apenas repartida. |
| 4 | Gramado e céu são desenhados antes do que fica na frente deles (overdraw de fragmentos caros). | `Environment.js` | Médio: até ~1 ms de GPU | Ordem de render: gramado e céu por último entre os opacos, para o early-z descartar os pixels cobertos. | Muito baixo: a ordem não muda o resultado final, só quantos pixels são sombreados. |
| 5 | O tronco das árvores tem tampas que nunca aparecem (topo dentro da copa, base no chão). São 24 triângulos por árvore × 4200. | `CityMap.js`, `TrackMap.js` | Baixo/médio: ~50 mil triângulos (mais na sombra) | `CylinderGeometry` com `openEnded`. | Muito baixo. |
| 6 | Marcas de pneu enviam o buffer **inteiro** à GPU (≈330 KB) a cada novo segmento, até 4 vezes por quadro durante derrapagens. | `effects/SkidMarks.js` | Médio na derrapagem (CPU e barramento) | Envio parcial (`addUpdateRange`) só do segmento novo. | Muito baixo. |
| 7 | Objetos alocados a cada quadro: `getCameraPosition()`, a lista de ações do HUD (arrays e strings), closures de projeção no minimapa, `$('editMode').hidden =` e `textContent` reescritos a cada quadro. | `Game.js`, `FirstPersonController.js`, `HUD.js`, `CityMap.js` | Baixo: pressão de GC e invalidação de estilo | Objetos reaproveitados, DOM escrito só quando o valor muda, elementos em cache. | Muito baixo. |
| 8 | O A* aloca 3 arrays tipados de tamanho N (1641 nós) a cada recálculo de 0,6 s, e o heap aloca um array por item. | `city/RoadNetwork.js` | Baixo: lixo periódico | Reaproveitar os arrays (`fill`) e um heap com arrays paralelos. | Baixo: mesmo algoritmo, mesmo resultado. |
| 9 | O áudio reagenda 4 parâmetros (`setTargetAtTime`) a cada quadro, mesmo sem mudança. | `systems/AudioSystem.js` | Baixo | Só reagendar quando o valor muda além de um limiar. | Muito baixo: a resposta ao giro continua igual. |
| 10 | As opções gráficas atuais não mexem em distância real, densidade nem LOD. A resolução está atrelada à qualidade e não pode ser ajustada separadamente. | `Settings.js`, `Menu.js`, `Game.js` | — | Presets Baixa/Média/Alta (pixel ratio, sombra, distância, LOD, densidade) com ajustes individuais de sombra, distância e resolução. | Baixo. |
| 11 | Faróis: 2 SpotLights sempre presentes, inclusive de dia com intensidade 0. Isso custa ~0,6 ms. | `Vehicle.js` | Baixo/médio | Desligá-los (`visible = false`) quando os faróis estão apagados troca o número de luzes do shader e causa recompilação (travada) no primeiro uso. Recomendo pré-compilar as duas variantes no carregamento. | Médio: sem pré-compilação, o jogo trava ao acender os faróis. |
| 12 | Fumaça: 90 sprites, cada um com material próprio, então até 90 draw calls numa derrapagem longa. | `effects/TireSmoke.js` | Baixo/médio só ao derrapar | Futuro: uma `InstancedMesh` de billboards com shader próprio. | Médio: muda a implementação. Fica como recomendação. |

## O que **não** é gargalo (e não deve ser mexido)

- **Física** (0,07 ms por quadro, com passos fixos de 8,5 ms já separados do render). Reduzir a frequência mudaria a dirigibilidade. Web Worker não traria ganho e acrescentaria latência e sincronização.
- **Colisões:** já usam spatial hash (células de 32 m na cidade).
- **Busca espacial de ruas:** `isOnRoad` e `project` levam menos de 3 µs. O nome da rua já é recalculado a cada 15 quadros.
- **Memória:** 94–96 geometrias e 9 texturas, sem crescimento durante o benchmark. A rota do GPS libera a geometria anterior, e trocar de mapa descarta o anterior.
- **Materiais DoubleSide do carro:** ganho de só 0,13 ms, com risco de "furos" em painéis abertos do modelo.
