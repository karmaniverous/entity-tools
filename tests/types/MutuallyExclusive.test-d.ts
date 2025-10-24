import { expectAssignable, expectNotAssignable, expectType } from 'tsd';
import type { MutuallyExclusive } from '../../src/MutuallyExclusive';

// Positive: equals true
type Happy = MutuallyExclusive<['a', 'b' | 'c', 'd']>;
expectType<true>(true as Happy);
expectNotAssignable<{ __error__: string }>({} as Happy);

// Negative: union collision → error shape (not true)
type UnionCollision = MutuallyExclusive<['a', 'b' | 'c', 'b']>;
expectAssignable<{ __error__: string }>({} as UnionCollision);
expectNotAssignable<true>({} as UnionCollision);

// Negative: string collision → error shape (not true)
type StringCollision = MutuallyExclusive<['a', 'b' | 'c', string]>;
expectAssignable<{ __error__: string }>({} as StringCollision);
expectNotAssignable<true>({} as StringCollision);

// Negative: multiple string collision → error shape (not true)
type MultipleStringCollision = MutuallyExclusive<[string, string]>;
expectAssignable<{ __error__: string }>({} as MultipleStringCollision);
expectNotAssignable<true>({} as MultipleStringCollision);

// Positive: never support → true
type NeverSupport = MutuallyExclusive<['a', 'b' | 'c', never]>;
expectType<true>(true as NeverSupport);
type MultipleNeverSupport = MutuallyExclusive<[never, 'b' | 'c', never]>;
expectType<true>(true as MultipleNeverSupport);
