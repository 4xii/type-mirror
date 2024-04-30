# Type-Mirror

Type-Mirror 可以自动从远程获取的 JSON 数据生成 TypeScript 接口定义。这个实用工具旨在简化开发过程，通过确保类型安全性并减少处理动态数据源时手动类型定义的需要。

## 特点

- **自动类型生成**：直接从 JSON 响应生成 TypeScript 接口。
- **简易配置**：使用简单的 TypeScript 文件进行配置。
- **与构建工具集成**：支持与现代 JavaScript 和 TypeScript 构建工具的集成。

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

要配置 Type-Mirror，请在项目的根目录中创建一个 `typemirror.config.ts` 文件。以下是一个示例配置：

```typescript
import { defineConfig } from 'type-mirror';
import { $fetch } from 'ofetch';

export default defineConfig({
  client: {
    Todos: $fetch('https://jsonplaceholder.typicode.com/todos/1')
  }
});
```

此配置定义了一个客户端，其中包含一个名为 `todos` 的 fetch 函数，该函数从 API 获取数据并记录响应。

## 使用

设置好配置文件后，您可以通过运行以下命令生成 TypeScript 接口：

```bash
npx typemir
```

这个命令将执行 CLI 文件，它处理配置中定义的 fetch 函数，为这些函数返回的 JSON 数据生成 TypeScript 接口，并将这些接口写入到 `node_modules/type-mirror/dist` 目录下的 `client.d.ts` 文件中。

## 导入生成的类型

生成类型后，您可以按照以下方式在 TypeScript 文件中导入并使用它们：

```typescript
import type { Client } from 'type-mirror';

const todo: Client.Todos = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
};
```

TypeScript 编译器将根据生成的定义确保类型安全。

## 结论

Type-Mirror 通过自动生成 TypeScript 接口简化了处理 JSON 数据的工作，确保您的应用程序保持类型安全且易于维护。通过自动化接口生成过程，这个工具帮助您更多地专注于开发功能，而不是担心类型定义。
