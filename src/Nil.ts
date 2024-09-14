/**
 * Null or undefined.
 *
 * @category Utilities
 */
export type Nil = null | undefined;

/**
 * Tests whether a value is {@link Nil | `Nil`}.
 *
 * @param value - Value.
 *
 * @returns true if `value` is `null` or `undefined`.
 *
 * @category Utilities
 */
export const isNil = (value: unknown): value is Nil =>
  value === null || value === undefined;
