# Development plan

## Next up

- Build: investigate rollup build failure "Unexpected identifier 'assert'"
  reported from rollup.config.ts JSON import assertion. Evaluate Rollup/Node
  versions or plugin options; adjust config as needed.
- Lint polish (optional): consider adding eslint-plugin-vitest if we want
  additional test-rule coverage; for now mocha plugin has been removed.
- DevDeps hygiene (optional): remove leftover Mocha/NYC packages after the
  migration stabilizes across CI.

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