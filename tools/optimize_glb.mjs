/**
 * Otimiza um modelo GLB exportado do Blender para o jogo, sem mudar a aparência nem a hierarquia.
 *
 *   node tools/optimize_glb.mjs <entrada.glb> <saída.glb>
 *   (atalho: npm run optimize:chevette)
 *
 * - Reordena vértices/índices para o cache da GPU (meshoptimizer).
 * - Quantiza só NORMAL e TEXCOORD (KHR_mesh_quantization). As POSIÇÕES ficam em float de propósito:
 *   quantizá-las mudaria a transformação dos nós (rodas, volante, porta), que o jogo usa como pivôs.
 * - Comprime os buffers com EXT_meshopt_compression (decodificado no navegador pelo MeshoptDecoder).
 * - Nomes de objetos e materiais são preservados (o jogo localiza peças pelo nome).
 */
import { NodeIO, PropertyType } from '@gltf-transform/core';
import { ALL_EXTENSIONS, EXTMeshoptCompression, KHRMeshQuantization } from '@gltf-transform/extensions';
import { reorder, quantize, dedup } from '@gltf-transform/functions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import { statSync } from 'node:fs';

const [input, output] = process.argv.slice(2);
if (!input || !output) {
  console.error('Uso: node tools/optimize_glb.mjs <entrada.glb> <saída.glb>');
  process.exit(1);
}

await MeshoptEncoder.ready;
await MeshoptDecoder.ready;
const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });

const doc = await io.read(input);
await doc.transform(
  dedup({ propertyTypes: [PropertyType.ACCESSOR] }),
  reorder({ encoder: MeshoptEncoder, target: 'size' }),
  quantize({ pattern: /^(NORMAL|TEXCOORD_\d+)$/, quantizeNormal: 10, quantizeTexcoord: 12 }),
);
// normais/UV inteiras normalizadas exigem KHR_mesh_quantization declarada (quantize() só a declara para POSITION)
doc.createExtension(KHRMeshQuantization).setRequired(true);
doc.createExtension(EXTMeshoptCompression)
  .setRequired(true)
  .setEncoderOptions({ method: EXTMeshoptCompression.EncoderMethod.QUANTIZE });
await io.write(output, doc);

const kb = f => (statSync(f).size / 1024).toFixed(0) + ' KB';
console.log(`${input} (${kb(input)}) -> ${output} (${kb(output)})`);
