# Type-Mirror
<p align="center">
  <a href="https://github.com/4xii/type-mirror">GitHub</a>
    &nbsp; | &nbsp;
    <a href="https://github.com/4xii/type-mirror/blob/main/README.zh-CN.md">简体中文文档</a>
</p>
Type-Mirror is a powerful tool that automatically generates TypeScript interface definitions from JSON data fetched remotely. This utility is designed to streamline the development process by ensuring type safety and reducing the need for manual type definitions when dealing with dynamic data sources.

## Features

- **Automatic Type Generation**: Generate TypeScript interfaces directly from JSON responses.
- **Easy Configuration**: Configure using a simple TypeScript file.
- **Integration with Build Tools**: Supports integration with modern JavaScript and TypeScript build tools.

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

To configure Type-Mirror, create a `typemirror.config.ts` file in your project's root directory. Here is an example configuration:

```typescript
import { defineConfig } from 'type-mirror';
import { $fetch } from 'ofetch';

export default defineConfig({
  client: {
    Todos: $fetch('https://jsonplaceholder.typicode.com/todos/1')
  }
});
```

This configuration defines a client with a single fetch function named `todos`, which fetches data from an API and logs the response.

## Usage

After setting up your configuration file, you can generate the TypeScript interfaces by running the following command:

```bash
npx typemir
```

This command will execute the CLI file, which processes the fetch functions defined in your configuration, generates TypeScript interfaces for the JSON data returned by these functions, and writes these interfaces to `client.d.ts` in the `node_modules/type-mirror/dist` directory.

## Importing Generated Types

Once the types have been generated, you can import and use them in your TypeScript files as follows:

```typescript
import type { Client } from 'type-mirror';

const todo: Client.Todos = {
  userId: 1,
  id: 1,
  title: 'delectus aut autem',
  completed: false
};
```

The TypeScript compiler will ensure type safety based on the generated definitions.

## Conclusion

Type-Mirror simplifies working with JSON data by automatically generating TypeScript interfaces, ensuring that your application remains type-safe and easy to maintain. By automating the interface generation process, this tool helps you focus more on developing features rather than worrying about type definitions.
