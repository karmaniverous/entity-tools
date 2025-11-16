# Development plan

## Next up

- Transcoding — types and builder (inference-first)
  - Add types: Transcoder<V>, TranscodeRegistry (canonical), TranscodeMap (alias),
    TranscodeRegistryFrom<T>, TranscodeName<TR>.
  - Implement defineTranscodes with compile-time encode/decode agreement (bi-directional
    type equality per key).
  - Export acronyms: EM, E, TR, TN, PK, V.

- Default registry
  - Refactor defaultTranscodes to be authored via defineTranscodes without changing
    runtime behavior.
  - Introduce DefaultTranscodeRegistry (canonical) and keep DefaultTranscodeMap as
    an alias.

- TSD tests (compile-time)
  - Add tests that prove defineTranscodes infers a registry type via
    TranscodeRegistryFrom<typeof spec>.
  - Add tests that a mismatched encode/decode pair fails at compile time.
  - Add tests that TN<TR> produces the expected string-literal union.

- Optional generic helpers
  - KV codec: implement encodePairs/decodePairs with the error/edge behavior defined
    in requirements; add unit tests.
  - Sharding math primitives: hashString, enumerateShardSuffixes, shardSuffixFromHash;
    add unit tests for representative cases and edge conditions (chars=0, bounds).

- Public surface and docs
  - Update README: concise sections for defineTranscodes (custom registries),
    TN/Transcodes usage, KV codec, and sharding math helpers (no migration notes).
  - Update Typedoc to include new types and helpers with example snippets.

- Housekeeping and CI
  - Ensure exports are wired through src/index.ts and build outputs (CJS/ESM/DTS).
  - Run lint, typecheck (tsc + tsd), tests, docs, and build; address any issues.

- Follow-up (downstream interop)
  - Coordinate with entity-manager to adopt TR/TN and builder-based patterns.
  - Avoid duplicating helpers downstream; import from entity-tools instead.

## Recently Completed Tasks

**CRITICAL: This list is append-only; do not edit items! Place most recent entries at the BOTTOM of the list. When pruning, remove older entries from the top.**

