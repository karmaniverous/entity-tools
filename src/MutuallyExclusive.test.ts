import { describe, expectTypeOf, it } from 'vitest';

import type { MutuallyExclusive } from './MutuallyExclusive';

describe('MutuallyExclusive (types)', () => {
  it('happy path returns true', () => {
    type Actual = MutuallyExclusive<['a', 'b' | 'c', 'd']>;

    expectTypeOf<Actual>().toEqualTypeOf<true>();
  });

  it('union collision yields error type (not true)', () => {
    type Actual = MutuallyExclusive<['a', 'b' | 'c', 'b']>;

    // Not true

    expectTypeOf<Actual>().not.toEqualTypeOf<true>();

    // Matches our error-shape (templated message varies)

    expectTypeOf<Actual>().toMatchTypeOf<{ __error__: string }>();
  });

  it('string collision yields error type', () => {
    type Actual = MutuallyExclusive<['a', 'b' | 'c', string]>;

    expectTypeOf<Actual>().not.toEqualTypeOf<true>();

    expectTypeOf<Actual>().toMatchTypeOf<{ __error__: string }>();
  });

  it('multiple string collision yields error type', () => {
    type Actual = MutuallyExclusive<[string, string]>;

    expectTypeOf<Actual>().not.toEqualTypeOf<true>();

    expectTypeOf<Actual>().toMatchTypeOf<{ __error__: string }>();
  });

  it('never support maintains true', () => {
    type Actual = MutuallyExclusive<['a', 'b' | 'c', never]>;

    expectTypeOf<Actual>().toEqualTypeOf<true>();
  });

  it('multiple never support maintains true', () => {
    type Actual = MutuallyExclusive<[never, 'b' | 'c', never]>;

    expectTypeOf<Actual>().toEqualTypeOf<true>();
  });
});
