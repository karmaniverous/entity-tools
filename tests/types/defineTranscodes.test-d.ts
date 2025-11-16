import { expectAssignable, expectNotAssignable, expectType } from 'tsd';

import type { TranscodeRegistry } from '../../src/TranscodeRegistry';
import type { Transcodes } from '../../src/Transcodes';
import type { TranscodedType } from '../../src/TranscodedType';
import type { TranscodeRegistryFrom } from '../../src/TranscodeRegistryFrom';
import type { TranscodeName } from '../../src/TranscodeName';
import { defineSortOrder } from '../../src/defineSortOrder';
import { defineTranscodes } from '../../src/defineTranscodes';
import type { SortOrder } from '../../src/SortOrder';
import type { Entity } from '../../src/Entity';

// Typed-overload usage
interface MyRegistry extends TranscodeRegistry {
  int: number;
  boolean: boolean;
}
const typedSpec: Transcodes<MyRegistry> = {
  int: {
    encode: (v: number) => v.toString(),
    decode: (s: string) => Number(s),
  },
  boolean: {
    encode: (v: boolean) => (v ? 't' : 'f'),
    decode: (s: string) => s === 't',
  },
};
const typedBuilt = defineTranscodes<MyRegistry>(typedSpec);
expectAssignable<Transcodes<MyRegistry>>(typedBuilt);

// Inference-first usage (derive TR from decode())
const inferred = defineTranscodes({
  int: {
    encode: (v: number) => v.toString(),
    decode: (s: string) => Number(s),
  },
  boolean: {
    encode: (v: boolean) => (v ? 't' : 'f'),
    decode: (s: string) => s === 't',
  },
} as const);
type InferredTR = TranscodeRegistryFrom<typeof inferred>;
// Derived value types
expectType<number>(0 as unknown as TranscodedType<InferredTR, 'int'>);
expectType<boolean>(false as unknown as TranscodedType<InferredTR, 'boolean'>);
// Derived union of names
expectAssignable<'int' | 'boolean'>(
  null as unknown as TranscodeName<InferredTR>,
);
expectNotAssignable<'int' | 'boolean' | 'x'>(
  null as unknown as TranscodeName<InferredTR>,
);

// Mismatch should fail: encode/decode disagree
// @ts-expect-error decode returns the wrong type
defineTranscodes({
  bad: {
    encode: (v: number) => v.toString(),
    // wrong decode type on purpose:
    decode: (_s: string) => 'oops',
  },
} as const);

// defineSortOrder preserves property literals
type E = Entity & { x: number; y: string };
const so = defineSortOrder<E>([{ property: 'x' }]);
expectAssignable<SortOrder<E>>(so);
// @ts-expect-error invalid property name
defineSortOrder<E>([{ property: 'z' as 'z' }]);

