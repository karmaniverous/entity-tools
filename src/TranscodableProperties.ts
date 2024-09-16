import type { Entity } from './Entity';
import type { Exactify } from './Exactify';
import type { PropertiesOfType } from './PropertiesOfType';
import type { TranscodeMap } from './TranscodeMap';

/**
 * Returns the properties of {@link Entity | `Entity`} `E` whose types are covered by {@link TranscodeMap | `TranscodeMap`} `T`.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 * @typeParam T - The {@link TranscodeMap | `TranscodeMap`}.
 *
 * @category Transcoding
 * @category Entities
 */
export type TranscodableProperties<
  E extends Entity,
  T extends TranscodeMap,
> = PropertiesOfType<E, T[keyof Exactify<T>]>;
