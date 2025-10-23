/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */

import type { MutuallyExclusive } from './MutuallyExclusive';

type HappyPath =
  MutuallyExclusive<['a', 'b' | 'c', 'd']> extends true ? true : never;
const testHappyPath: HappyPath = true;

type UnionCollision =
  MutuallyExclusive<['a', 'b' | 'c', 'b']> extends true ? true : never;
// @ts-expect-error
const testUnionCollision: UnionCollision = true;

type StringCollision =
  MutuallyExclusive<['a', 'b' | 'c', string]> extends true ? true : never;
// @ts-expect-error
const testStringCollision: StringCollision = true;

type MultipleStringCollision =
  MutuallyExclusive<[string, string]> extends true ? true : never;
// @ts-expect-error
const testMultipleStringCollision: StringCollision = true;

type NeverSupport =
  MutuallyExclusive<['a', 'b' | 'c', never]> extends true ? true : never;
const testNeverSupport: NeverSupport = true;

type MultipleNeverSupport =
  MutuallyExclusive<[never, 'b' | 'c', never]> extends true ? true : never;
const testMultipleNeverSupport: MultipleNeverSupport = true;
