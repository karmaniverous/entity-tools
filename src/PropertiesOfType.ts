import type { Entity } from './Entity';
import type { Exactify } from './Exactify';

/**
 * Returns the properties of {@link Entity | `Entity`} `E` of types that extend type `T`. Ignores `undefined` types.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 * @typeParam T - The type to filter by.
 *
 * @category Entities
 */
export type PropertiesOfType<E extends Entity, T> = keyof {
  [Property in keyof Exactify<E> as [T] extends [never]
    ? [NonNullable<E[Property]>] extends [never]
      ? Property
      : never
    : [NonNullable<E[Property]>] extends [never]
      ? never
      : NonNullable<E[Property]> extends T
        ? Property
        : never]: never;
} &
  string;
