import type { Entity } from './Entity';
import type { Exactify } from './Exactify';
import type { PropertiesNotOfType } from './PropertiesNotOfType';
import type { TranscodeMap } from './TranscodeMap';

/**
 * Returns the properties of {@link Entity | `Entity`} `E` whose types are not covered by {@link TranscodeMap | `TranscodeMap`} `T`.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 * @typeParam T - The {@link TranscodeMap | `TranscodeMap`}.
 *
 * @category Transcoding
 * @category Entities
 */
export type UntranscodableProperties<
  E extends Entity,
  T extends TranscodeMap,
> = PropertiesNotOfType<E, T[keyof Exactify<T>]>;
