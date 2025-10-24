import { expectNotAssignable, expectType } from 'tsd';

import type { MutuallyExclusive } from '../../src/MutuallyExclusive';

// Positive: equals true
type Happy = MutuallyExclusive<['a', 'b' | 'c', 'd']>;
expectType<true>(true as Happy);
expectNotAssignable<{ __error__: string }>({} as Happy);

// Negative: union collision → error shape (not true)
type UnionCollision = MutuallyExclusive<['a', 'b' | 'c', 'b']>;
// Error branch is present
expectType<{ __error__: string }>(
  {} as Extract<UnionCollision, { __error__: string }>,
);
expectNotAssignable<true>({} as UnionCollision);

// Negative: string collision → error shape (not true)
type StringCollision = MutuallyExclusive<['a', 'b' | 'c', string]>;
expectType<{ __error__: string }>(
  {} as Extract<StringCollision, { __error__: string }>,
);
expectNotAssignable<true>({} as StringCollision);

// Negative: multiple string collision → error shape (not true)
type MultipleStringCollision = MutuallyExclusive<[string, string]>;
expectType<{ __error__: string }>(
  {} as Extract<MultipleStringCollision, { __error__: string }>,
);
expectNotAssignable<true>({} as MultipleStringCollision);

// Positive: never support → true
type NeverSupport = MutuallyExclusive<['a', 'b' | 'c', never]>;
expectType<true>(true as NeverSupport);
type MultipleNeverSupport = MutuallyExclusive<[never, 'b' | 'c', never]>;
expectType<true>(true as MultipleNeverSupport);
