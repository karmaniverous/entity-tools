/**
 * Replace the keys in an object type with the same keys in a replacement type.
 *
 * @typeParam T - The object type to modify.
 * @typeParam R - The source of replacement keys.
 */
export type ReplaceKeys<T extends object, R extends object> = Omit<
  T,
  keyof T & keyof R
> &
  Pick<R, keyof T & keyof R>;
