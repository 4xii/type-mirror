// 文件名：test/generate.spec.ts
import { describe, it, expect } from 'vitest';
import { generateTypeScriptInterface } from './generate';

describe('generateTypeScriptInterface', () => {
  it('should generate a TypeScript interface from JSON', async () => {
    const json = { name: 'John', age: 30 };
    const result = await generateTypeScriptInterface(json, 'Person');
    expect(result).toContain('interface Person {');
    expect(result).toContain('name: string');
    expect(result).toContain('age: number');
  });
});
