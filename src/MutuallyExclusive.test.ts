import { describe, expect, it } from 'vitest';

import type { MutuallyExclusive } from './MutuallyExclusive';

// Compile-time type helpers (no runtime effect).
type Equal<A, B> =
  (<T>() => T extends A ? 1 : 2) extends <T>() => T extends B ? 1 : 2
    ? true
    : false;
type Assert<T extends true> = T;

describe('MutuallyExclusive (types)', () => {
  it('happy path returns true', () => {
    type Actual = MutuallyExclusive<['a', 'b' | 'c', 'd']>;
    // Compiles only if Actual is literally true
    type _Assert = Assert<Equal<Actual, true>>;
    expect(true).toBe(true);
  });

  it('union collision yields error type (not true)', () => {
    type Actual = MutuallyExclusive<['a', 'b' | 'c', 'b']>;
    // Expect a compile error if we pretend it is true
    // @ts-expect-error Actual should not be true here
    type _Assert = Assert<Equal<Actual, true>>;
    expect(true).toBe(true);
  });

  it('string collision yields error type', () => {
    type Actual = MutuallyExclusive<['a', 'b' | 'c', string]>;
    // @ts-expect-error Actual should not be true here
    type _Assert = Assert<Equal<Actual, true>>;
    expect(true).toBe(true);
  });

  it('multiple string collision yields error type', () => {
    type Actual = MutuallyExclusive<[string, string]>;
    // @ts-expect-error Actual should not be true here
    type _Assert = Assert<Equal<Actual, true>>;
    expect(true).toBe(true);
  });

  it('never support maintains true', () => {
    type Actual = MutuallyExclusive<['a', 'b' | 'c', never]>;
    type _Assert = Assert<Equal<Actual, true>>;
    expect(true).toBe(true);
  });

  it('multiple never support maintains true', () => {
    type Actual = MutuallyExclusive<[never, 'b' | 'c', never]>;
    type _Assert = Assert<Equal<Actual, true>>;
    expect(true).toBe(true);
  });
});
