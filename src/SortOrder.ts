import type { Entity } from './Entity';

/**
 * Specifies progressive sorting on properties of `Item`.
 *
 * @typeParam Item - Item type, must extend {@link Entity | `Entity`}.
 *
 * @category Sort
 */
export type SortOrder<Item extends Entity> = {
  property: keyof Item;
  desc?: boolean;
}[];
