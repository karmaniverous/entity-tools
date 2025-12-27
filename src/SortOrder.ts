import type { Entity } from './Entity';
import type { Exactify } from './Exactify';

/**
 * Specifies progressive sorting on properties of an {@link Entity | `Entity`} type.
 *
 * @typeParam E - {@link Entity | `Entity`} type.
 *
 * @category Sort
 */
export type SortOrder<E extends Entity> = {
  /**
   * The entity property name to sort by.
   */
  property: keyof Exactify<E>;

  /**
   * If true, sorts this property in descending order.
   */
  desc?: boolean;
}[];
