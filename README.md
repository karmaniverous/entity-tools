# Entity Tools

[![npm version](https://img.shields.io/npm/v/@karmaniverous/entity-tools.svg)](https://www.npmjs.com/package/@karmaniverous/entity-tools) ![Node Current](https://img.shields.io/node/v/@karmaniverous/entity-tools) <!-- TYPEDOC_EXCLUDE --> [![docs](https://img.shields.io/badge/docs-website-blue)](https://docs.karmanivero.us/entity-tools) [![changelog](https://img.shields.io/badge/changelog-latest-blue.svg)](https://github.com/karmaniverous/entity-tools/tree/main/CHANGELOG.md)<!-- /TYPEDOC_EXCLUDE --> [![license](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg)](https://github.com/karmaniverous/entity-tools/tree/main/LICENSE.md)

Entity Tools provides a compact set of runtime utilities and type-level helpers for working with data models (Entities), sorting, shallow updates, and safe transcoding between values and lexicographically sortable strings.

- Small surface area, zero runtime dependencies beyond radash.
- Strong TypeScript support with dedicated type tests (tsd).
- Works great standalone or together with:
  - [entity-manager](https://github.com/karmaniverous/entity-manager)
  - [entity-client-dynamodb](https://github.com/karmaniverous/entity-client-dynamodb)
  - [mock-db](https://github.com/karmaniverous/mock-db)

## Installation

```bash
npm i @karmaniverous/entity-tools
# or: pnpm add @karmaniverous/entity-tools
# or: yarn add @karmaniverous/entity-tools
```

## Exports overview

Runtime utilities

- conditionalize(fn, condition?): wrap a function so it only runs when condition is truthy; otherwise returns undefined.
- defaultTranscodes: ready-made Transcodes supporting the DefaultTranscodeMap (boolean, string, number, fix6, int, bigint, bigint20, timestamp).
- isNil(value): Nil type-guard (null | undefined).
- sort(items, sortOrder): stable, progressive sort over Entity properties (numbers, strings, bigints, null/undefined, and truthiness fallback).
- updateRecord(record, update): shallow update that ignores undefined, assigns nulls, and removes null/undefined from the result.

Core types (entities and sorting)

- Entity: base Record<string, unknown> you can extend for your models.
- EntityMap: map of named entities.
- Exactify<T>: strip index signatures from records.
- EntityKeys<E>, EntityValue<E, K>, EntityMapValues<M>, FlattenEntityMap<M>
- SortOrder<E>: sort descriptor for sort().

Transcoding types

- TranscodeMap: relates transcode keys to the types they encode (e.g., fix6 → number).
- DefaultTranscodeMap: a concrete TranscodeMap shipped by this package.
- Transcodes<TMap>: shape of an encode/decode registry for a TranscodeMap.
- TranscodableProperties<O, TMap>, UntranscodableProperties<O, TMap>: pick keys by transcodability for a given map.

Type utilities

- ConditionalProperty<K, C, O>, MakeOptional<T, K>, MakeRequired<T, K>, MakeUpdatable<T, K>, WithRequiredAndNonNullable<T, K>
- AllDisjoint<First, Rest>, MutuallyExclusive<T>: compile-time guards for exclusive string unions/tuples.
- NotNever<T, Keys>, PropertiesOfType<O, T>, PropertiesNotOfType<O, T>
- ReplaceKey<T, K, R>, ReplaceKeys<T, R>
- Nil (type alias for null | undefined)

Full reference: see API docs linked at the top of this README.

## Quick examples

Sorting

```ts
import { sort, type SortOrder } from '@karmaniverous/entity-tools';

type User = {
  id: number;
  name: string;
  optional?: string | null;
  data?: object;
};
const users: User[] = [
  { id: 2, name: 'Adam', optional: 'foo', data: { foo: 'bar' } },
  { id: 3, name: 'Bob', optional: 'bar', data: { bar: 'baz' } },
  { id: 1, name: 'Charlie', optional: null, data: { baz: 'qux' } },
  { id: 4, name: 'Adam' },
];

const order: SortOrder<User> = [
  { property: 'name' },
  { property: 'id', desc: true },
];
const result = sort(users, order);
// [
//   { id: 4, name: 'Adam' },
//   { id: 2, name: 'Adam', optional: 'foo', data: { foo: 'bar' } },
//   { id: 3, name: 'Bob', optional: 'bar', data: { bar: 'baz' } },
//   { id: 1, name: 'Charlie', optional: null, data: { baz: 'qux' } },
// ]
```

Shallow updates

```ts
import { updateRecord } from '@karmaniverous/entity-tools';

const original = {
  id: 1,
  name: 'Alice',
  note: undefined as string | undefined,
};
const patch = {
  name: 'Alicia',
  note: null,
  extra: undefined as string | undefined,
};

const updated = updateRecord(original, patch);
// { id: 1, name: 'Alicia' }  // note and extra are removed (null/undefined stripped)
```

Conditional execution

```ts
import { conditionalize } from '@karmaniverous/entity-tools';

const debugLog = conditionalize(console.log, process.env.DEBUG);
debugLog?.('only logs when DEBUG is truthy');
```

Nil checks

```ts
import { isNil, type Nil } from '@karmaniverous/entity-tools';

function takesMaybe(v: unknown): v is Nil {
  return isNil(v);
}
```

Transcoding (encode/decode)

```ts
import { defaultTranscodes } from '@karmaniverous/entity-tools';

// Fixed-width integer (sign-prefixed, zero-padded; sorts lexicographically)
const enc = defaultTranscodes.int.encode(-123); // "n0000000000000123"
const dec = defaultTranscodes.int.decode(enc); // -123

// Fixed 6-decimal number
defaultTranscodes.fix6.encode(123.45); // "p0000000123.450000"
defaultTranscodes.fix6.decode('n0000000123.450000'); // -123.45

// Variable width number, boolean, string
defaultTranscodes.number.encode(42); // "42"
defaultTranscodes.boolean.decode('t'); // true
defaultTranscodes.string.encode('hello'); // "hello"

// BigInt (variable) and BigInt20 (fixed width up to 20 digits)
defaultTranscodes.bigint.encode(1234567890123456789n); // "1234567890123456789"
defaultTranscodes.bigint20.encode(-1234567890123456789n); // "n01234567890123456789"
```

Notes on default transcoding

- Keys supported by DefaultTranscodeMap:
  - boolean → "t"/"f" (fixed width)
  - string → identity (variable width)
  - number → decimal string (variable width)
  - fix6 → signed fixed width with 6 decimals, padded; sorts lexicographically
  - int → signed fixed-width integer, padded; sorts lexicographically
  - bigint → decimal string (variable width)
  - bigint20 → signed fixed-width BigInt up to 20 digits; sorts lexicographically
  - timestamp → fixed-width 13-digit UNIX millis, padded
- Encoders throw on invalid inputs; decoders throw on invalid encoded strings.
- For custom maps, define your own TranscodeMap and Transcodes to add keys.

Type-only helpers (samples)

```ts
import type {
  MakeOptional,
  MakeRequired,
  MakeUpdatable,
  WithRequiredAndNonNullable,
  MutuallyExclusive,
  PropertiesOfType,
  PropertiesNotOfType,
  ReplaceKey,
  ReplaceKeys,
} from '@karmaniverous/entity-tools';

type User = { id: number; name: string; note?: string | null };
type OptionalNote = MakeOptional<User, 'note'>;
type RequiredId = WithRequiredAndNonNullable<User, 'id'>;

// Compile-time exclusivity check (returns true or an error-shape).
type Ex = MutuallyExclusive<['a', 'b' | 'c', 'd']>; // true
```

---

Built for you with ❤️ on Bali! Find more great tools & templates on [my GitHub Profile](https://github.com/karmaniverous).
