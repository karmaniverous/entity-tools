import { expectAssignable, expectNotAssignable } from 'tsd';

import { defineSortOrder } from '../src/defineSortOrder';
import { defineTranscodes } from '../src/defineTranscodes';
import type { Entity } from '../src/Entity';
import type { SortOrder } from '../src/SortOrder';
import type { TranscodedType } from '../src/TranscodedType';
import type { TranscodeName } from '../src/TranscodeName';
import type { TranscodeRegistry } from '../src/TranscodeRegistry';
import type { TranscodeRegistryFrom } from '../src/TranscodeRegistryFrom';
import type { Transcodes } from '../src/Transcodes';

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

// Derived value types: TranscodedType resolves to number and boolean
type TInt = TranscodedType<InferredTR, 'int'>;
type TBool = TranscodedType<InferredTR, 'boolean'>;
expectAssignable<TInt>(0 as number);
expectNotAssignable<TInt>(false as boolean);
expectAssignable<TBool>(false as boolean);
expectNotAssignable<TBool>(0 as number);

// Derived union of names
expectAssignable<TranscodeName<InferredTR>>('int' as const);
expectAssignable<TranscodeName<InferredTR>>('boolean' as const);
expectNotAssignable<TranscodeName<InferredTR>>('x' as const);

// Mismatch should fail: encode/decode disagree
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
defineSortOrder<E>([{ property: 'z' as const }]);
