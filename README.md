# Chevette SL — jogo de carro 3D

Jogo de direção em Three.js com um Chevrolet Chevette SL modelado no Blender, dois mapas (um circuito e as ruas reais de Salto de Pirapora/SP com GPS), personagem que entra e sai do carro, partida no motor, câmbio manual/automático e modos de condução normal (com TC/ESC) e drift.

Em **Menu → Opções**, ajuste a qualidade gráfica, ative ou desative sombras e controle a distância de renderização. As preferências são salvas no navegador.

## Como jogar

- **Sem instalar nada:** abra `index.html` direto no navegador. Funciona também por `file://`.
- **Com servidor local:** rode `python -m http.server 8765` e acesse `http://localhost:8765`.

Os controles podem ser trocados em **Menu → Controles**. Os padrões são:

| Tecla | Ação |
|---|---|
| W / S | acelerar / frear e ré |
| A / D | virar |
| Espaço | freio de mão |
| I | partida |
| G | porta / entrar / sair |
| C | câmera |
| M | mapa/GPS (cidade) |
| L | faróis |
| Q / E / H | setas / alerta |
| Shift / Ctrl | marchas |
| T | manual/automático |
| B | modo normal/drift |
| N | dia/noite |
| P | pintura |
| R | voltar à pista/rua |
| Esc | menu |

## Desenvolvimento

O código-fonte está em `src/` (módulos ES). O navegador carrega o pacote compilado `dist/game.js`, que vai versionado para o jogo abrir sem compilar nada.

```powershell
npm install
```

```powershell
npm run build
```

Para recompilar a cada mudança e servir em `http://localhost:8765`:

```powershell
npm run dev
```

| Script | O que faz |
|---|---|
| `npm run build` | compila `src/main.js` em `dist/game.js` (minificado, com source map) |
| `npm run dev` | compila a cada alteração e serve na porta 8765 |
| `npm run optimize:chevette` | comprime `blender/export/chevette.glb` em `assets/models/vehicles/chevette/chevette.glb` |
| `npm run embed` | gera as cópias `*.js` dos assets, usadas no modo `file://` |
| `npm run assets` | executa `optimize:chevette` e depois `embed` |
| `npm run city` | regera o mapa da cidade a partir de `data/export.geojson` |

## Estrutura

```
index.html                 página: só a marcação; CSS e JS em arquivos próprios
dist/game.js               pacote gerado por "npm run build" (não editar)
src/
  main.js                  ponto de entrada
  core/                    infraestrutura
    Game.js                orquestra os sistemas e a ordem de atualização de cada quadro
    GameLoop.js            requestAnimationFrame com dt limitado
    Renderer.js            WebGLRenderer (sombras, tone mapping)
    Camera.js              câmeras de perseguição, cockpit, a pé e órbita do menu
    AssetManager.js        carregamento sob demanda, cache sem duplicatas, release() libera a GPU
    Settings.js            opções salvas (localStorage "opts")
  systems/
    PhysicsSystem.js       dinâmica do carro (pneus, carga, câmbio, TC/ESC, drift)
    CollisionSystem.js     colisões carro/jogador × obstáculos
    InputSystem.js         teclado, toque, teclas configuráveis ("binds")
    AudioSystem.js         motor, pneus, pisca, motor de arranque (Web Audio)
    VehicleSystem.js       cria e descarta veículos a partir do registro
  vehicles/
    vehicles.config.js     REGISTRO DE VEÍCULOS (modelo, peças, luzes, física, som)
    Vehicle.js             parte visual: monta o glTF, funde malhas estáticas, anima rodas/porta/luzes
    VehicleController.js   estado do motorista: marcha, motor, faróis, setas, modo
  player/
    Character.js           personagem (malhas simples)
    PlayerController.js    andar, abrir porta, entrar e sair
  environment/
    Environment.js         céu, neblina, reflexos, gramado
    Lighting.js            sol e sombras
    World.js               mapa ativo: carrega sob demanda e descarta o anterior
    textures.js            texturas de canvas
    effects/               marcas de pneu e fumaça (buffers e sprites reaproveitados)
    maps/
      maps.config.js       REGISTRO DE MAPAS
      TrackMap.js          circuito (voltas e recorde)
      CityMap.js           Salto de Pirapora (ruas, prédios, árvores, minimapa)
      city/RoadNetwork.js  grafo de ruas, índice espacial e rotas A*
      city/GpsRoute.js     destino, linha da rota e marcador
  ui/                      HUD, mostradores, menu, mapa do GPS, botões de toque
  utils/                   constantes, matemática, helpers (DOM, storage, dispose)
  styles/                  main.css (base), menus.css (menu e GPS), hud.css (painel e toque)
assets/
  models/vehicles/chevette/chevette.glb      modelo otimizado usado pelo jogo
  maps/salto_de_pirapora/salto_de_pirapora.json
  (cada um com uma cópia .js, usada só no modo file://)
blender/
  chevette.blend           arquivo de trabalho do modelo
  export/chevette.glb      exportação original do Blender (fonte do modelo otimizado)
  backups/                 versões anteriores do .blend
data/export.geojson        ruas do OpenStreetMap (fonte do mapa da cidade)
tools/
  optimize_glb.mjs         compressão Meshopt sem alterar a hierarquia
  embed_assets.py          gera as cópias .js para file://
  gerar_cidade.py          GeoJSON para o JSON do mapa
```

### Como as peças se ligam

`Game` cria os sistemas uma única vez. A cada quadro, na ordem:

1. física em passos fixos de 8,5 ms;
2. jogador a pé;
3. motor;
4. ações contextuais;
5. GPS;
6. marcas de pneu;
7. HUD;
8. áudio;
9. visual do veículo;
10. câmera;
11. render.

Os objetos passados a cada quadro são reaproveitados, para não alocar memória no laço.

## Adicionar um veículo

1. **Modelo.** Exporte o carro do Blender para `blender/export/<id>.glb`, com os mesmos tipos de peça do Chevette: 4 rodas, volante e as peças da porta do motorista. Os nomes dos objetos e materiais são livres, porque são informados na configuração.
2. **Compressão.** Rode `node tools/optimize_glb.mjs blender/export/<id>.glb assets/models/vehicles/<id>/<id>.glb`. Em seguida, rode `npm run embed`.
3. **Registro.** Copie a entrada `chevette` em `src/vehicles/vehicles.config.js` com um novo id e ajuste:
   - `model`;
   - `paintMaterial` e `colors`;
   - os nomes das peças: `wheels`, `steeringWheel` e `door.parts`;
   - `door.hinge`;
   - `lights`;
   - `cockpitCamera` e `driverSeat`;
   - `bodyHalfSize` e `tireContacts`;
   - `physics`: massa, entre-eixos, relações de marcha, torque etc.;
   - `sound`.
4. **Uso.** Coloque o novo id em `GAME.defaultVehicle` (`src/utils/Constants.js`). O `VehicleSystem` só carrega o modelo escolhido, e `despawn()` descarta o carro e libera o modelo da memória, o que já prepara uma futura tela de garagem.
5. **Build.** Rode `npm run build`.

Nenhum outro arquivo precisa mudar: física, câmera, porta, luzes e colisões leem tudo da configuração.

## Adicionar um mapa

1. **Classe.** Crie uma classe em `src/environment/maps/` com a mesma interface de `TrackMap`/`CityMap`:
   - `static create(assets, config)`;
   - `group`, `id`, `fogFar`, `groundScale`, `bodyClass`;
   - `isOnRoad`, `surfaceUnder`, `forEachObstacleNear`, `collideVehicle`, `collideBody`;
   - `spawn`, `updateProgress`, `resetLaps`, `shiftTimers`, `timerText`;
   - `drawMinimap`, `setNight`, `dispose`;
   - `gps`, opcional, para ter o mapa em tela cheia.
2. **Dados.** Se o mapa usa dados externos, coloque-os em `assets/maps/<id>/` e carregue com `assets.loadJSON(config.data)`. Depois rode `npm run embed`.
3. **Registro.** Registre o mapa em `src/environment/maps/maps.config.js`. Para aparecer no menu, adicione o botão em `#o-map` (`index.html`) e o id em `Menu`/`Settings`.

## Atualizar o modelo do Chevette

1. No Blender, abra `blender/chevette.blend`.
2. Exporte o glTF binário para `blender/export/chevette.glb`.
3. Rode:

```powershell
npm run assets
```

## Memória e desempenho

- **Modelo:** 6,6 MB → 2,2 MB com Meshopt. As normais são quantizadas em 10 bits. As posições ficam em float para preservar as transformações das rodas, do volante e da porta. A hierarquia, os nomes e os materiais foram verificados como idênticos ao original. Draco não foi usado: comprime menos que Meshopt para o tamanho do decodificador e exigiria um WASM extra.
- **Malhas do carro:** as peças estáticas são fundidas por material, gerando poucas chamadas de desenho. Prédios e árvores da cidade usam `InstancedMesh`.
- **Carregamento sob demanda:** o mapa da cidade só é baixado quando escolhido. Ao trocar de mapa, o anterior é descartado (geometrias, materiais, texturas) e seus dados saem do cache. No modo `file://`, o script injetado e o registro em `window` são apagados depois do uso.
- **Efeitos:** fumaça e marcas de pneu usam pools e buffers circulares fixos.
- **Renderização em passadas:** o mapa de sombra é desenhado numa passada 0 (câmera-sonda com todas as camadas), depois o cenário e, por último, o carro (camada `VEHICLE`). Isso evita que a *transmission* das lentes redesenhe a cidade a cada quadro. As camadas estão em `RENDER_LAYERS` (`src/utils/Constants.js`).
- **Cidade em regiões de 400 m** (`city/ChunkGrid.js`): o que fica além da neblina total não é desenhado, e no LOD distante somem troncos e faixas. Só as instâncias num raio de 100 m do jogador entram no mapa de sombra (`city/ShadowCasters.js`).
- **Opções gráficas** (Menu → Opções): predefinições Baixa/Média/Alta em `GRAPHICS_PRESETS` (`src/utils/Constants.js`), mais ajustes de sombras, resolução e distância.
- **Diagnóstico:** `F3` (ou Opções → Painel de desempenho) mostra FPS, tempos de CPU/GPU, gargalo, draw calls, triângulos e memória.
- **Benchmark reproduzível:** abra `index.html?bench=salto`, `?bench=salto&noite=1` ou `?bench=circuito`.
- **Relatórios:** detalhes e números em [docs/desempenho](docs/desempenho/01-auditoria.md).

## Créditos

Ruas de Salto de Pirapora: © colaboradores do OpenStreetMap (ODbL). Casas e prédios são genéricos.
