# Type-Mirror

<p align="center">
  <a href="https://github.com/4xii/type-mirror">GitHub</a>
    &nbsp; | &nbsp;
    <a href="https://github.com/4xii/type-mirror/blob/main/README.zh-CN.md">简体中文文档</a>
</p>

Type-Mirror is a powerful tool that automatically generates TypeScript interface definitions from JSON data fetched remotely. Designed to streamline the development process, Type-Mirror ensures type safety and reduces the need for manual type definitions when working with dynamic data sources.

## Features

- **Automatic Type Generation**: Generate TypeScript interfaces directly from JSON responses.
- **Seamless Remote Data Integration**: Work with remote configuration management systems like Apollo or Nacos to automatically update local type definitions.
- **Real-Time Updates**: Hot reload types in real-time as remote data changes, without restarting the project.
- **CLI Support**: Generate types on project startup or on-demand via the command line.
- **Customizable Output**: Specify the output file path for the generated type definitions.
- **Easy Configuration**: Set up with a simple TypeScript configuration file.

## Installation

Install Type-Mirror using npm:

```bash
npm install type-mirror
```

Or using yarn:

```bash
yarn add type-mirror
```

## Configuration

Create a `typemirror.config.ts` file in your project's root directory to configure Type-Mirror. Here's an example that integrates with a remote API:

```typescript
import { defineConfig } from 'type-mirror';
import { $fetch } from 'ofetch';

export default defineConfig({
  client: {
    Todos: $fetch('https://jsonplaceholder.typicode.com/todos/1')
  },
  outputFilePath: './src/types/generated.d.ts', // Optional custom output path
});
```

This configuration fetches data from a remote API and generates TypeScript interfaces for the received JSON data.

## Usage

After configuring, generate TypeScript interfaces with the following command:

```bash
npx type-mirror
```

The CLI will process the fetch functions from your configuration, generate TypeScript interfaces, and write them to the specified output file path.

## Importing Generated Types

Import and use the generated types in your TypeScript files:

```typescript
import type { Client } from 'type-mirror';

// Assuming Todos is an interface generated from the remote JSON data
const todo: Client.Todos = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
};
```

The TypeScript compiler will ensure type safety based on the generated definitions.

## Conclusion

Type-Mirror offers a developer-friendly solution for maintaining type safety with remote data. By automating interface generation, developers can focus on feature development, secure in the knowledge that type definitions are accurate and up-to-date.
