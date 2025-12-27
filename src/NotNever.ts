/**
 * Returns `true` if no property of `T` indicated in `N` has a `never` type.
 *
 * @typeParam T - The `object` type to check for `never` properties.
 * @typeParam N - A tuple of keys of `T` to check for `never` type.
 *
 * @returns `true` if no property of `T` indicated in `N` has a `never` type, otherwise a custom error type.
 *
 * @example
 * ```ts
 * type ReturnsTrue = NotNever<{ a: string; b: number; c: boolean }, ['b', 'c']>;
 * // true
 *
 * type ReturnsError = NotNever<{ a: string; b: number; c: never }, ['b', 'c']>;
 * // { __error__: 'c is never' }
 * ```
 *
 * @category Utilities
 */
export type NotNever<
  T extends object,
  N extends (string & keyof T)[],
> = N extends [infer Head, ...infer Tail]
  ? Head extends string & keyof T
    ? [T[Head]] extends [never]
      ? {
          /**
           * Branded error string indicating which key was detected as `never`.
           */
          __error__: `${Head} is never`;
        }
      : Tail extends string[]
        ? NotNever<T, Tail extends (string & keyof T)[] ? Tail : []>
        : true
    : true
  : true;
