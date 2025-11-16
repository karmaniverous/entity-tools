/**
 * Returns the properties of `object` `O` with types that extend type `V`. Ignores `undefined` types.
 *
 * @typeParam O - The `object` type.
 * @typeParam V - The type to filter by.
 *
 * @category Utilities
 */
export type PropertiesOfType<O extends object, V> = keyof {
  [Property in keyof O as [V] extends [never]
    ? [NonNullable<O[Property]>] extends [never]
      ? Property
      : never
    : [NonNullable<O[Property]>] extends [never]
      ? never
      : NonNullable<O[Property]> extends V
        ? Property
        : never]: never;
};
