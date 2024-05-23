import path from 'path';
import { generateTypeScriptInterface, writeTypesToFile } from './generate';
import { Config } from './defineConfig';
import { tpl } from './clientTpl';
import { promises as fs } from 'fs';

export async function runTypeMirror(config: Config) {
  const typeFilePath = config.outputFilePath || path.resolve(process.cwd(), 'node_modules/type-mirror/dist/client.d.ts');
  const typeFileDir = path.dirname(typeFilePath);
  await fs.mkdir(typeFileDir, { recursive: true });// 确保目录存在
  let mirrorString = ''
  for (const [key, fetchFunction] of Object.entries(config.client)) {
    const jsonData = await fetchFunction();
    const typeString = await generateTypeScriptInterface(jsonData, key);
    mirrorString += typeString
  }

  const type = await tpl(mirrorString);
  await writeTypesToFile(type, typeFilePath);
  console.log('Type-mirror has successfully generated types.');
}
