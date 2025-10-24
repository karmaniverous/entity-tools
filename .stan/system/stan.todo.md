# Development plan

## Next up

- Lint polish (optional): consider adding eslint-plugin-vitest if we want
  additional test-rule coverage; for now mocha plugin has been removed.
- DevDeps hygiene (optional): remove leftover Mocha/NYC packages after the
  migration stabilizes across CI.
- knip config (optional): ignore dev tools invoked outside code (e.g., cross-env
  via stan.config.yml, auto-changelog via release-it hooks) to avoid false positives.

## Completed (recent)
- Migrate tests from Mocha/NYC to Vitest.
  - Added vitest and @vitest/coverage-v8 devDependencies.
  - Created vitest.config.ts with Node env, globals, and V8 coverage reporters.
  - Switched npm "test" script to run Vitest with coverage under dotenvx.
  - Updated tsconfig.json to limit "types" to ["node", "vitest"], disabled
    checkJs/allowJs, and restricted includes to "src/**/*" to avoid pulling in
    JS configs (fixes 'eslint__js' type errors in typecheck/docs/build).
  - Removed mocha plugin from eslint.config.js to fix flat-config errors; kept
    Prettier, TS-ESLint, TSDoc, and import sorting.
  - Updated tests to import expect from vitest; removed Mocha/NYC configs and
    updated VS Code recommendations/settings.
  - Refined toolchain to stabilize after Vitest migration:
    - tsconfig.json: removed global Vitest types and excluded *.test.ts from the
      main TS program so tsc/typedoc/build don’t require Vitest types.
    - eslint.config.js: added test-file override to declare vitest globals and
      disable type-info-heavy unsafe rules that are noisy in tests.
    - rollup.config.ts: replaced JSON import assertion with createRequire to fix
      “Unexpected identifier 'assert'” when loading the config.
  - Migrated ESLint to a flat, type-aware TypeScript config.
    - Created eslint.config.ts with strict typed lint for sources, Prettier
      integration, import sorting, and TSDoc syntax checks.
    - Added untyped override and Vitest globals for *.test.ts to avoid TSConfig
      inclusion errors during lint runs. Removed eslint.config.js.
    - Scoped type-aware ESLint rules to src/**/*.ts only and disabled
      type-checked rules for test files using typescript-eslint
      disableTypeChecked config. This resolves errors such as
      "@typescript-eslint/await-thenable requires type information" when
      linting tests without parserOptions.project.
    - Removed reliance on typescript-eslint disableTypeChecked preset (not
      iterable in this setup). Instead, explicitly ignored src/**/*.test.ts
      within the typed config block and kept an untyped test override with
      Vitest globals.
  - Enforce typed ESLint rules for all TS files (tests included).
    - Updated eslint.config.ts to apply strictTypeChecked to **/*.ts and use the
      root tsconfig.json (no dedicated ESLint tsconfig). Kept only Vitest
      globals override for tests without disabling rules.
    - Updated tsconfig.json to include tests and provide Vitest globals
      (types: ["node", "vitest/globals"]) so typed lint has full type
      information across test files.
  - Resolve typecheck/docs duplicates from Chai types with Vitest:
    - Removed @types/chai and chai from devDependencies to avoid conflicts with
      Vitest’s bundled Chai typings.
  - Prevent Vitest from attempting to run type-only checks as runtime tests:
    - Renamed src/MutuallyExclusive.test.ts (type-level assertions only) to
      src/MutuallyExclusive.types.ts so it remains type-checked and linted but
      is not collected as a Vitest runtime suite.
  - Build: fixed Rollup config to avoid JSON import assertions.
    - Updated rollup.config.ts to load package.json via createRequire instead of
      `assert { type: 'json' }`, resolving “Unexpected identifier 'assert'”.
    - Flattened DTS plugin config to avoid nested arrays:
      `plugins: [...(commonInputOptions.plugins ?? []), dtsPlugin()]`.
  - Build: ensure Rollup applies TypeScript to rollup.config.ts
    - Updated package.json build script to use `--configPlugin typescript`
      (recognized plugin name for @rollup/plugin-typescript), so the config in
      TypeScript is compiled and parsed correctly.
  - Build: keep Rollup config in TypeScript per template
    - Switched build script to `--configPlugin @rollup/plugin-typescript` so the
      TS config is compiled reliably (aligns with template repo). No migration
      away from TS config.
  - Build: align rollup.config.ts with template (JS-compatible TS)
    - Removed TypeScript-only syntax (type imports/annotations) from
      rollup.config.ts so Rollup can parse it without special loaders, while
      keeping the file in TypeScript. Kept createRequire for package.json and
      flattened DTS plugins array. This matches the template behavior where the
      TS config builds cleanly without NODE_OPTIONS or ts-node loaders.
  - Cleanup: remove unused Mocha/NYC tooling and legacy type packages; update keywords
    - Removed devDependencies no longer used after Vitest migration:
      @types/eslint__js, @types/eslint-config-prettier, @types/eslint-plugin-mocha,
      @types/mocha, eslint-plugin-mocha, jsdom-global, mocha, nyc,
      source-map-support, ts-node, tsd.
    - Updated package keywords: drop mocha/nyc/chai; add vitest.
  - Build: confirmed template-aligned TS Rollup config builds cleanly with
    `@rollup/plugin-typescript` on rollup.config.ts; removing the “Next up” build
    investigation item.