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
