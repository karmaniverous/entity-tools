import eslint from '@eslint/js';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tsDocPlugin from 'eslint-plugin-tsdoc';
import tseslint from 'typescript-eslint';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const tsconfigRootDir = dirname(fileURLToPath(import.meta.url));

export default [
  // Ignore generated/build artifacts and STAN workspace
  {
    ignores: [
      '.serverless/**',
      '.stan/**',
      '**/.tsbuild/**',
      '**/generated/**',
      'coverage/**',
      'dist/**',
      'docs/**',
      'templates/**',
      'node_modules/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  // Defer formatting concerns to Prettier
  prettierConfig,
  // Main, typed config
  {
    languageOptions: {
      // Important: set the TS parser here, otherwise this block replaces
      // the parser from strictTypeChecked and ESLint falls back to espree.
      parser: tseslint.parser,
      parserOptions: {
        // Be explicit so the CLI loads type info from the root project.
        project: ['./tsconfig.json'],
        tsconfigRootDir,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      'simple-import-sort': simpleImportSortPlugin,
      tsdoc: tsDocPlugin,
    },
    rules: {
      // Code-quality and sorting
      'prettier/prettier': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/require-await': 'off',
      'no-unused-vars': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      'tsdoc/syntax': 'warn',
    },
  },
  // Test files: disable typed lint and declare Vitest globals
  {
    files: ['**/*.test.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        // Keep tests out of the typed program (root tsconfig excludes them)
        project: null,
        tsconfigRootDir,
      },
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
    },
  },
];

