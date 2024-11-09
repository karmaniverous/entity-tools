import type { Entity } from './Entity';
import type { EntityMap } from './EntityMap';
import type { Exactify } from './Exactify';
import type { FlattenEntityMap } from './FlattenEntityMap';
import type { PropertiesOfType } from './PropertiesOfType';
import type { TranscodeMap } from './TranscodeMap';

/**
 * Returns the properties of an {@link Entity | `Entity`} or {@link EntityMap | `EntityMap`} whose types are covered by {@link TranscodeMap | `TranscodeMap`} `T`.
 *
 * @typeParam O - The {@link Entity | `Entity`} or {@link EntityMap | `EntityMap`} type.
 * @typeParam T - The {@link TranscodeMap | `TranscodeMap`}.
 *
 * @category Transcoding
 * @category Entities
 */
export type TranscodableProperties<
  O extends EntityMap | Entity,
  T extends TranscodeMap,
> = PropertiesOfType<
  O extends EntityMap ? FlattenEntityMap<O> : O,
  T[keyof Exactify<T>]
>;
