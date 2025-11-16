import type { Exactify } from './Exactify';

/**
 * Returns the properties of `object` `O` with types that do not extend type `V`. Ignores `undefined` types.
 *
 * @typeParam O - The 'object' type.
 * @typeParam V - The type to filter by.
 *
 * @category Utilities
 */
export type PropertiesNotOfType<O extends object, V> = keyof {
  [Property in keyof Exactify<O> as [V] extends [never]
    ? [NonNullable<Exactify<O>[Property]>] extends [never]
      ? never
      : Property
    : [NonNullable<Exactify<O>[Property]>] extends [never]
      ? never
      : NonNullable<Exactify<O>[Property]> extends V
        ? never
        : Property]: never;
} &
  string;
