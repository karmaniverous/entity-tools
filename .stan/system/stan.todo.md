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

- TSD fixes (test-d)
  - defineTranscodes.test-d.ts: derive registry from spec (not built object);
    assert TranscodedType/TranscodeName via literals; added @ts-expect-error for
    mismatch; stabilized assertions.
  - transcodableProperties.test-d.ts: assert unions via 'a'|'b'|'c' literals; added a default registry assignability test.

- TSD stabilization (final)
  - defineTranscodes.test-d.ts: satisfied inference-overload boundary by casting
    the spec to Record<string, Transcoder<unknown>>; assertions for derived
    types/names retained with literal checks.
  - Finalize assertions:
    - Use literal-based checks for Transcodable/Untranscodable unions.
    - Derive TranscodeRegistryFrom from the spec (no builder invocation).
    - Mismatch test: encode accepts unknown (boundary OK), decode returns string
      (agreement fails as intended).
- TSD fixes (PropertiesNotOfType & TranscodeRegistryFrom)
  - PropertiesNotOfType: corrected logic to exclude undefined-only properties
    and invert the V check properly. This fixes tsd assertions where 'd' (only
    undefined) must be excluded from UntranscodableProperties and 'e' (bigint)
    must be included.
  - TranscodeRegistryFrom: relaxed the generic constraint to require only a
    decode signature (`{ decode: (string) => unknown }`). This enables
    value-first literal specs (with precise encode parameter types) to be used
    directly without a cast while preserving "never use any" policy.
  - Verified: vitest still passes; typecheck now succeeds for tsd cases.

- TSD/lint hardening
  - PropertiesNotOfType: also exclude index signatures (unknown) in addition to
    undefined-only properties; keeps UntranscodableProperties precise.
  - defineTranscodes: EncodeDecodeAgreement now treats unknown on either side as
    a mismatch, restoring the intended compile-time failure in the mismatch
    test. No runtime impact. Removed an unused import to satisfy ESLint.

- TSD/knip/typedoc alignment
  - PropertiesNotOfType: apply Exactify to strip index signatures before key
    selection; keeps UntranscodableProperties precise and excludes undefined-only
    keys without widening to string.
  - defineTranscodes: made IsUnknown internal (not exported) to remove knip
    unused export and typedoc warning; relaxed inference overload to decode-only.

- TS2344 fix (defineTranscodes overloads)
  - Align EncodeDecodeAgreement generic bound with the decode-only overload
    (Record<string, { decode: (string) => unknown }>) to clear TS2344 while
    keeping encode/decode agreement checks intact.

- Overload order (restore mismatch tsd)
  - Reordered defineTranscodes overloads so the inference-first signature is
    listed first. This makes object-literal calls bind to the agreement-checked
    overload, restoring the expected compile-time error in the mismatch test.

- Typed overload guard (unknown)
  - Added NonUnknownRegistry guard to the typed overload parameter so registries
    with unknown value types do not match the typed overload. This forces
    object-literal calls with unknown-typed encode params to bind to the
    inference-first overload (which enforces agreement), restoring the tsd
    mismatch failure without affecting normal typed registries.

- Typed overload enforces agreement on actual spec
  - Updated the typed overload to introduce a second generic `T extends
    Transcodes<TR>` and require `EncodeDecodeAgreement<T>`. This checks
    encode/decode equality against the passed argument shape, ensuring the
    mismatch test triggers a compile error even if the typed overload is chosen.

- Overload precedence (typed-first with guards)
  - Restored typed overload order so explicit generic calls (e.g. default
    registry) bind to the typed signature and regain contextual typing (fixes
    TS2322/TS2344/TS7006). Kept NonUnknownRegistry and
    EncodeDecodeAgreement<T> in the typed overload so the mismatch literal
    remains ineligible and still fails via the inference-first overload.

- Default transcodes: select typed overload explicitly
  - Updated src/defaultTranscodes.ts to call
    defineTranscodes<DefaultTranscodeRegistry, Transcodes<DefaultTranscodeRegistry>>(...)
    so the typed overload is selected (not the inference-first signature with a
    single generic). Clears TS2344 in build/docs/typecheck.

- Typed overload simplification (one generic)
  - Simplified defineTranscodes typed overload to a single generic parameter
    (TR) and enforced agreement against Transcodes<TR>. This ensures calls with
    one explicit type argument (e.g., defineTranscodes<MyRegistry>(...)) bind to
    the typed overload and restores contextual typing, resolving tsd’s constraint
    error.
  - Aligned defaultTranscodes to pass a single type argument so it selects the
    typed overload consistently.

- Consolidate defineTranscodes to inference-first only
  - Removed typed overloads and kept a single inference-first signature that
    requires both encode and decode and enforces agreement per key.
  - Updated defaultTranscodes to call defineTranscodes(spec) with no generics;
    contextual typing supplies decode(string) (no implicit-any).
  - Updated tsd tests: the “typed-overload usage” now calls inference-first and
    validates assignability to Transcodes<MyRegistry>; inference-first usage and
    mismatch remain as before. This resolves the “unused @ts-expect-error”
    failure and eliminates overload-resolution churn while matching the project
    intent: ALL typing is inference-first.

- defineTranscodes — inference bound and agreement
  - Relaxed the generic constraint to require only decode: (string) => unknown,
    removing the encode(unknown) requirement to allow specific encode parameter
    types in specs (e.g., bigint, number, string).
  - Strengthened EncodeDecodeAgreement to require presence of encode (via a
    not-never check) and bi-directional equality between encode parameter and
    decode return types. Resolves TS2322/TS2740 in defaultTranscodes and makes
    the mismatch tsd error fire as intended.

- Default transcodes decode annotations
  - Added explicit `decode(value: string)` parameter types for all entries in
    src/defaultTranscodes.ts to satisfy the inference-first builder’s decode
    constraint and enable precise registry inference. No runtime changes; fixes
    TS2740/TS2322/TS7006 reported by typecheck/build/docs.

- TSD directive placement
  - Moved the `@ts-expect-error` directive in
    test-d/defineTranscodes.test-d.ts to the offending property line (`bad:`)
    so it suppresses the correct node and resolves the tsd failure.