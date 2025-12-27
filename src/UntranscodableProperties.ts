import type { Entity } from './Entity';
import type { EntityMap } from './EntityMap';
import type { Exactify } from './Exactify';
import type { FlattenEntityMap } from './FlattenEntityMap';
import type { PropertiesNotOfType } from './PropertiesNotOfType';
import type { TranscodeRegistry } from './TranscodeRegistry';

/**
 * Returns the properties of an {@link Entity | `Entity`} or {@link EntityMap | `EntityMap`} whose types are not covered by {@link TranscodeRegistry | `TranscodeRegistry`} `TR`.
 *
 * @typeParam O - The {@link Entity | `Entity`} or {@link EntityMap | `EntityMap`} type.
 * @typeParam TR - The {@link TranscodeRegistry | `TranscodeRegistry`}.
 *
 * @category Transcoding
 * @category Entities
 */
export type UntranscodableProperties<
  O extends EntityMap | Entity,
  TR extends TranscodeRegistry,
> = PropertiesNotOfType<
  O extends EntityMap ? FlattenEntityMap<O> : O,
  TR[keyof Exactify<TR>]
>;
