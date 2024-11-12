/**
 * Replace the type at a key in an object type.
 *
 * @typeParam T - The object type to modify.
 * @typeParam K - The key to replace.
 * @typeParam R - The type to replace the key with.
 *
 * @category Utilities
 */
export type ReplaceKey<T extends object, K extends keyof T, R> = Omit<T, K> &
  Record<K, R>;
