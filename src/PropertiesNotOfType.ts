/**
 * Returns the properties of `object` `O` with types that do not extend type `V`. Ignores `undefined` types.
 *
 * @typeParam O - The 'object' type.
 * @typeParam V - The type to filter by.
 *
 * @category Utilities
 */
export type PropertiesNotOfType<O extends object, V> = keyof {
  [Property in keyof O as [V] extends [never]
    ? [NonNullable<O[Property]>] extends [never]
      ? never
      : Property
    : [NonNullable<O[Property]>] extends [never]
      ? NonNullable<O[Property]> extends V
        ? Property
        : never
      : never]: never;
} &
  string;
