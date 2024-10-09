import type { Entity } from './Entity';
import type { Exactify } from './Exactify';

/**
 * Returns the properties of {@link Entity | `Entity`} `E` of types that do not extend type `T`. Ignores `undefined` types.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 * @typeParam T - The type to filter by.
 *
 * @category Entities
 */
export type PropertiesNotOfType<E extends Entity, T> = keyof {
  [Property in keyof Exactify<E> as [T] extends [never]
    ? [NonNullable<E[Property]>] extends [never]
      ? never
      : Property
    : [NonNullable<E[Property]>] extends [never]
      ? NonNullable<E[Property]> extends T
        ? Property
        : never
      : never]: never;
} &
  string;
