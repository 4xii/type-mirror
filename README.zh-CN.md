# Type-Mirror

<p align="center">
  <a href="https://github.com/4xii/type-mirror">GitHub</a>
    &nbsp; | &nbsp;
    <a href="https://github.com/4xii/type-mirror/blob/main/README.zh-CN.md">简体中文文档</a>
</p>

Type-Mirror 是一个强大的工具，可以从远程获取的 JSON 数据自动生成 TypeScript 接口定义。Type-Mirror 旨在简化开发过程，确保类型安全，减少处理动态数据源时手动定义类型的需求。

## 特性

- **自动类型生成**：直接从 JSON 响应生成 TypeScript 接口。
- **无缝远程数据集成**：与 Apollo 或 Nacos 等远程配置管理系统协同工作，自动更新本地类型定义。
- **实时更新**：当远程数据更改时，实时热重载类型，无需重启项目。
- **CLI 支持**：在项目启动时或通过命令行按需生成类型。
- **可定制输出**：指定生成类型定义的输出文件路径。
- **易于配置**：通过简单的 TypeScript 配置文件进行设置。

## 安装

使用 npm 安装 Type-Mirror：

```bash
npm install type-mirror
```

或者使用 yarn：

```bash
yarn add type-mirror
```

## 配置

在项目根目录下创建一个 `typemirror.config.ts` 文件来配置 Type-Mirror。以下是一个集成远程 API 的示例：

```typescript
import { defineConfig } from 'type-mirror';
import { $fetch } from 'ofetch'; // 假设 $fetch 是一个获取数据的工具

export default defineConfig({
  client: {
    Todos: $fetch('https://jsonplaceholder.typicode.com/todos/1')
  },
  outputFilePath: './src/types/generated.d.ts', // 可选的自定义输出路径
});
```

这个配置从远程 API 获取数据，并为接收到的 JSON 数据生成 TypeScript 接口。

## 使用

配置完成后，可以使用以下命令生成 TypeScript 接口：

```bash
npx type-mirror
```

CLI 将处理配置中的 fetch 函数，生成 TypeScript 接口，并将其写入指定的输出文件路径。

## 导入生成的类型

在 TypeScript 文件中导入并使用生成的类型：

```typescript
import type { Client } from 'type-mirror';

// 假设 Todos 是从远程 JSON 数据生成的接口
const todo: Client.Todos = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
};
```

TypeScript 编译器将根据生成的定义确保类型安全。

## 结论

Type-Mirror 提供了一种对开发者友好的解决方案，用于维护远程数据的类型安全。通过自动化接口生成，开发者可以专注于功能开发，并确保类型定义是准确和最新的。
