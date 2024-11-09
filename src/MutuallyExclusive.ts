/**
 * Returns `true` if there is no intersection between `First` the elements of `Rest`.
 *
 * @typeParam First - A `string` type
 * @typeParam Rest - A tuple of `string` types
 *
 * @returns `true` if there is no intersection between `First` the elements of `Rest`, otherwise a custom error type.
 *
 * @example
 * ```ts
 * type ReturnsTrue = AllDisjoint<'a', ['b' | 'c', 'd']>;
 * // true
 *
 * type ReturnsError = AllDisjoint<'c', ['b' | 'c', 'c']>;
 * // { __error__: 'overlaps on c' }
 * ```
 *
 * @category Utilities
 * @protected
 */
export type AllDisjoint<
  First extends string,
  Rest extends string[],
> = Rest extends [infer Head, ...infer Tail]
  ? Head extends string
    ? [First & Head] extends [never]
      ? AllDisjoint<First, Tail extends string[] ? Tail : []>
      : { __error__: `overlaps on ${First}` }
    : true
  : true;

/**
 * Returns `true` if there is no intersection between the elements of `T`.
 *
 * @typeParam T - The tuple of string types to check for mutual exclusivity.
 *
 * @returns `true` if there is no intersection between the elements of `T`, otherwise a custom error type.
 *
 * @example
 * ```ts
 * type ReturnsTrue = MutuallyExclusive<['a', 'b' | 'c', 'd']>;
 * // true
 *
 * type ReturnsError = MutuallyExclusive<['a', 'b' | 'c', 'c']>;
 * // { __error__: 'overlaps on c' }
 * ```
 *
 * @category Utilities
 */
export type MutuallyExclusive<T extends string[]> = T extends [
  infer Head,
  ...infer Tail,
]
  ? Head extends string
    ? Tail extends string[]
      ? AllDisjoint<Head, Tail> extends true
        ? MutuallyExclusive<Tail>
        : AllDisjoint<Head, Tail>
      : true
    : true
  : true;
