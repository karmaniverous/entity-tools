import { expectAssignable, expectNotAssignable } from 'tsd';

import type { TranscodeRegistry } from '../../src/TranscodeRegistry';
import type { TranscodableProperties } from '../../src/TranscodableProperties';
import type { UntranscodableProperties } from '../../src/UntranscodableProperties';
import type { Entity } from '../../src/Entity';

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
expectAssignable<'a' | 'b' | 'c'>(null as unknown as TP);
expectNotAssignable<'a' | 'b' | 'c' | 'e'>(null as unknown as TP);

// Untranscodables exclude undefined-only fields and include properties not covered by TR
type UP = UntranscodableProperties<E, R>;
expectAssignable<'e'>(null as unknown as UP);
expectNotAssignable<'d'>(null as unknown as UP);

