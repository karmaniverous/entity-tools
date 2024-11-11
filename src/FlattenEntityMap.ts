import type { Entity } from './Entity';
import type { EntityMap } from './EntityMap';
import type { Exactify } from './Exactify';

/**
 * Returns the keys of an {@link Entity | `Entity`} type.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 *
 * @category Entities
 * @protected
 */
export type EntityKeys<E extends Entity> = E extends E ? keyof E : never;

/**
 * Returns the value type of a property `P` of an {@link Entity | `Entity`} type.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 * @typeParam P - The property key.
 *
 * @category Entities
 * @protected
 */
export type EntityValue<E extends Entity, P extends PropertyKey> = E extends
  | Record<P, infer V>
  | Partial<Record<P, infer V>>
  ? V
  : never;

/**
 * Returns a union of exactified entity types in an {@link EntityMap | `EntityMap`}.
 *
 * @typeParam M - The {@link EntityMap | `EntityMap`} type.
 *
 * @category Entities
 * @protected
 */
export type EntityMapValues<M extends EntityMap> = {
  [P in keyof M]: Exactify<M[P]>;
}[keyof Exactify<M>];

/**
 * Flattens an {@link EntityMap | `EntityMap`} into a single object with matching key types unionized.
 *
 * @typeParam M - The {@link EntityMap | `EntityMap`} to flatten.
 *
 * @category Entities
 */
export type FlattenEntityMap<M extends EntityMap> = {
  [K in EntityKeys<EntityMapValues<M>>]: EntityValue<EntityMapValues<M>, K>;
};
