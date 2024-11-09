import type { Entity } from './Entity';
import type { EntityMap } from './EntityMap';
import type { Exactify } from './Exactify';
import type { FlattenEntityMap } from './FlattenEntityMap';
import type { PropertiesNotOfType } from './PropertiesNotOfType';
import type { TranscodeMap } from './TranscodeMap';

/**
 * Returns the properties of an {@link Entity | `Entity`} or {@link EntityMap | `EntityMap`} whose types are not covered by {@link TranscodeMap | `TranscodeMap`} `T`.
 *
 * @typeParam O - The {@link Entity | `Entity`} or {@link EntityMap | `EntityMap`} type.
 * @typeParam T - The {@link TranscodeMap | `TranscodeMap`}.
 *
 * @category Transcoding
 * @category Entities
 */
export type UntranscodableProperties<
  O extends EntityMap | Entity,
  T extends TranscodeMap,
> = PropertiesNotOfType<
  O extends EntityMap ? FlattenEntityMap<O> : O,
  T[keyof Exactify<T>]
>;
