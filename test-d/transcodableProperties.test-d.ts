import { expectAssignable, expectNotAssignable } from 'tsd';

import type { Entity } from '../src/Entity';
import type { TranscodableProperties } from '../src/TranscodableProperties';
import type { TranscodeRegistry } from '../src/TranscodeRegistry';
import type { UntranscodableProperties } from '../src/UntranscodableProperties';

// Registry with number|string|boolean support

interface R extends TranscodeRegistry {
  num: number;
  str: string;
  bool: boolean;
}

// Example entity (note: d?: undefined is effectively "not present")

type E = Entity & {
  a: number;
  b: string;
  c?: boolean | null;
  d?: undefined;
  e: bigint;
};

// Transcodables are properties assignable to (number | string | boolean)

type TP = TranscodableProperties<E, R>;

expectAssignable<TP>('a' as const);
expectAssignable<TP>('b' as const);
expectAssignable<TP>('c' as const);
expectNotAssignable<TP>('e' as const);

// Untranscodables exclude undefined-only fields and include properties not covered by TR

type UP = UntranscodableProperties<E, R>;

expectAssignable<UP>('e' as const);
expectNotAssignable<UP>('d' as const);
