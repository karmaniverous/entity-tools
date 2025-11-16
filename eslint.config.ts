import eslint from '@eslint/js';
import vitestPlugin from '@vitest/eslint-plugin';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import tsDocPlugin from 'eslint-plugin-tsdoc';
import { dirname } from 'path';
import tseslint from 'typescript-eslint';
import { fileURLToPath } from 'url';

const tsconfigRootDir = dirname(fileURLToPath(import.meta.url));

// Apply type-aware configs to all TS files (sources and tests)
const strictTypeCheckedAll = tseslint.configs.strictTypeChecked.map((c) => ({
  ...c,
  files: ['**/*.ts'],
}));

export default [
  // Ignore generated/build artifacts and STAN workspace
  {
    ignores: [
      '.stan/**',
      '.rollup.cache/**',
      '**/.tsbuild/**',
      'coverage/**',
      'dist/**',
      'docs/**',
      'node_modules/**',
      '**/*.test-d.ts',
    ],
  },
  eslint.configs.recommended,
  ...strictTypeCheckedAll,
  // Defer formatting concerns to Prettier
  prettierConfig,
  // Main, typed config for all TS
  {
    files: ['**/*.ts'],
    languageOptions: {
      // Important: set the TS parser here, otherwise this block replaces
      // the parser from strictTypeChecked and ESLint falls back to espree.
      parser: tseslint.parser,
      parserOptions: {
        // Use the root project for type info; no dedicated ESLint tsconfig.
        // Setting project explicitly keeps resolution predictable.
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
      '@typescript-eslint/no-unused-vars': 'error',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      '@typescript-eslint/no-unsafe-assignment': 'error',
      '@typescript-eslint/no-unsafe-member-access': 'error',
      '@typescript-eslint/no-unsafe-return': 'error',
      'tsdoc/syntax': 'warn',
    },
  },
  // Test files: keep Vitest globals; typed rules still apply via the main config
  {
    files: ['**/*.test.ts'],
    languageOptions: {
      globals: {
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
      },
    },
    plugins: {
      vitest: vitestPlugin,
    },
    rules: {
      // Apply Vitest's recommended rules for test files
      ...(vitestPlugin.configs.recommended.rules as Record<string, unknown>),
      // Our tests use Chai chainers (e.g., expect(...).to.deep.equal(...)),
      // which this rule flags. Disable to support chai-style assertions.
      'vitest/valid-expect': 'off',
    },
  },
];
