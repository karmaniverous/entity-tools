/**
 * Makes specified properties of T optional.
 *
 * @typeParam T - The type to make properties optional.
 * @typeParam U - The properties to make optional.
 *
 * @category Utilities
 */
export type MakeOptional<T, U extends keyof T> = Omit<T, U> &
  Partial<Pick<T, U>>;
