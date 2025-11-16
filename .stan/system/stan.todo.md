# Development plan

## Next up

- Transcoding — types and builder (inference-first)
  - Add types: Transcoder<V>, TranscodeRegistry (canonical), TranscodeRegistryFrom<T>, TranscodeName<TR>, TranscodedType<TR, TN>.
  - Implement defineTranscodes with compile-time encode/decode agreement (bi-directional
    type equality per key).
  - Export acronyms: EM, E, TR, TN, PK, V.

- Sort helper (stable typing)
  - Implement defineSortOrder<E extends Entity>(so: SortOrder<E>): SortOrder<E>.
  - Add tsd checks to validate compile-time acceptance and preservation of property
    literal unions in SortOrder definitions.

- Default registry
  - Refactor defaultTranscodes to be authored via defineTranscodes without changing
    runtime behavior.
  - Introduce DefaultTranscodeRegistry (canonical) and remove DefaultTranscodeMap
    (no compatibility alias).

- TSD tests (compile-time)
  - Add tests that prove defineTranscodes infers a registry type via
    TranscodeRegistryFrom<typeof spec>.
  - Add tests that a mismatched encode/decode pair fails at compile time.
  - Add tests that TN<TR> produces the expected string-literal union.
  - Add tests that TranscodedType<TR, TN> resolves to the expected value type.
  - Add tests that defineSortOrder<E> compiles for valid SortOrder<E>.

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

- Transcoding surface (canonical builder)
  - Introduced TranscodeRegistry (canonical) and removed legacy TranscodeMap.
  - Added defineTranscodes builder with compile-time encode/decode agreement.
  - Refactored defaultTranscodes to use defineTranscodes and updated docs to
    DefaultTranscodeRegistry.
  - Added typing helpers: TranscodeRegistryFrom, TranscodeName, TranscodedType.
  - Updated Transcodes, TranscodableProperties, UntranscodableProperties to use TR.

- Helpers and DX
  - Added KV codec: kv/encodePairs, kv/decodePairs.
  - Added sharding math: sharding/hashString, enumerateShardSuffixes, shardSuffixFromHash.
  - Added defineSortOrder<E> identity helper for typed sort descriptors.

- Project prompt
  - Memorialized “never use any” policy and strict type-parameter dictionary.

- Typing fixes & knip cleanup
  - defineTranscodes: added typed-overload for Transcodes<TR> and kept inference-first
    overload; implementation avoids any.
  - defaultTranscodes: annotated encode parameter types and used the typed overload to
    satisfy DefaultTranscodeRegistry; resolved TS2740/TS2322 errors.
  - Removed unused exported types from KV helpers to satisfy knip.

- Docs & tests
  - Exported EncodeParam and DecodeReturn and re-exported from index, resolving
    Typedoc warnings about missing referenced types in EncodeDecodeAgreement.
  - Added tsd tests (tests/types/defineTranscodes.test-d.ts) for builder overloads,
    TranscodeRegistryFrom/TranscodedType/TranscodeName, and defineSortOrder typing.
  - Added runtime tests: src/kv/codec.test.ts (KV codec roundtrip/errors/custom
    delimiters) and src/sharding/sharding.test.ts (hash determinism, suffix
    enumeration/formatting, parameter validation).

- Typecheck scripting and additional tsd tests
  - package.json: removed incorrect "tsd" directory override and made
    "typecheck" explicitly run "tsd tests/types" so failures surface in stan
    scripts/CI.
  - Added tests/types/transcodableProperties.test-d.ts for
    TranscodableProperties/UntranscodableProperties with TR naming.

- TSD location normalization
  - Consolidated tsd tests under test-d/ and adjusted assertions to use concrete
    literals (no unknown/never casts), preventing false positives and ensuring
    clear, actionable failures in CI.