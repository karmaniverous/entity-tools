/**
 * Returns the properties of `object` `O` with types that extend type `T`. Ignores `undefined` types.
 *
 * @typeParam O - The `object` type.
 * @typeParam T - The type to filter by.
 *
 * @category Utilities
 */
export type PropertiesOfType<O extends object, T> = keyof {
  [Property in keyof O as [T] extends [never]
    ? [NonNullable<O[Property]>] extends [never]
      ? Property
      : never
    : [NonNullable<O[Property]>] extends [never]
      ? never
      : NonNullable<O[Property]> extends T
        ? Property
        : never]: never;
};
