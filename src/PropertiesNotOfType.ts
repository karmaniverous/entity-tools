/**
 * Returns the properties of `object` `O` with types that do not extend type `T`. Ignores `undefined` types.
 *
 * @typeParam O - The 'object' type.
 * @typeParam T - The type to filter by.
 *
 * @category Utilities
 */
export type PropertiesNotOfType<O extends object, T> = keyof {
  [Property in keyof O as [T] extends [never]
    ? [NonNullable<O[Property]>] extends [never]
      ? never
      : Property
    : [NonNullable<O[Property]>] extends [never]
      ? NonNullable<O[Property]> extends T
        ? Property
        : never
      : never]: never;
} &
  string;
