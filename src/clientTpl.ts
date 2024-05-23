import { processString } from 'typescript-formatter';

export async function tpl(content: string): Promise<string> {
  const tplCode = `
  export module Client {
  ${content}  
  
  }
  `
  const preprocessedContent = tplCode.replace(/}\s*interface/g, '}\n\ninterface');
  const res = await processString('unknoew', preprocessedContent, {
    replace: false,
    verify: false,
    tsconfig: false,
    tsconfigFile: null,
    tslint: false,
    tslintFile: null,
    editorconfig: false,
    vscode: false,
    vscodeFile: null,
    tsfmt: false,
    tsfmtFile: null
  });
  console.log('tplCode :>> ', tplCode);
  console.log('res.message :>> ', res.dest);
  return res.dest
}

// 我想使用别的包优化这里的tplCode的格式，这里的代码最终会打包成脚本运行，所以不能用prettier，我只需要一段程序把代码优化一下格式即可
