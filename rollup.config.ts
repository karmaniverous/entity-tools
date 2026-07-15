import { createRequire } from 'node:module';

import aliasPlugin from '@rollup/plugin-alias';
import commonjsPlugin from '@rollup/plugin-commonjs';
import jsonPlugin from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescriptPlugin from '@rollup/plugin-typescript';
import dtsPlugin from 'rollup-plugin-dts';

const require = createRequire(import.meta.url);
// package.json shape (deps only)
type Pkg = {
  dependencies?: Record<string, string>;
  peerDependencies?: Record<string, string>;
};

const pkgJson = require('./package.json') as Pkg;

const outputPath = `dist`;

const commonPlugins = (outDir: string) => [
  commonjsPlugin(),
  jsonPlugin(),
  nodeResolve(),
  typescriptPlugin({ compilerOptions: { outDir }, outputToFilesystem: true }),
];

// Alias entries for '@rollup/plugin-alias'.
type AliasEntry = { find: string | RegExp; replacement: string };
const commonAliases: AliasEntry[] = [];

const commonInputOptions = {
  input: 'src/index.ts',
  external: [
    ...Object.keys(pkgJson.dependencies ?? {}),
    ...Object.keys(pkgJson.peerDependencies ?? {}),
    'tslib',
  ],
};

const config = [
  // ESM output.
  {
    ...commonInputOptions,
    plugins: [
      aliasPlugin({ entries: commonAliases }),
      ...commonPlugins(`${outputPath}/mjs`),
    ],
    output: [
      {
        dir: `${outputPath}/mjs`,
        extend: true,
        format: 'esm',
        preserveModules: true,
      },
    ],
  },

  // CommonJS output.
  {
    ...commonInputOptions,
    plugins: [
      aliasPlugin({ entries: commonAliases }),
      ...commonPlugins(`${outputPath}/cjs`),
    ],
    output: [
      {
        dir: `${outputPath}/cjs`,
        extend: true,
        format: 'cjs',
        preserveModules: true,
      },
    ],
  },

  // Type definitions output.
  {
    ...commonInputOptions,
    plugins: [
      aliasPlugin({ entries: commonAliases }),
      ...commonPlugins(outputPath),
      dtsPlugin(),
    ],
    output: [
      {
        extend: true,
        file: `${outputPath}/index.d.ts`,
        format: 'esm',
      },
    ],
  },
];

export default config;
