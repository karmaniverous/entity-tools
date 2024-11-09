import { Entity } from './Entity';
import { Exactify } from './Exactify';
import { PropertiesOfType } from './PropertiesOfType';
import { TranscodeMap } from './TranscodeMap';

/**
 * A partial {@link Entity | `Entity`} composed solely of properties that can be transcoded.
 *
 * @typeParam Item - The {@link Entity | `Entity`} type to make partial.
 * @typeParam T - The {@link TranscodeMap | `TranscodeMap`} map type indentifying transcodable properties.
 *
 * @category Entities
 * @category Transcoding
 */
export type PartialTranscodable<
  Item extends Entity,
  T extends TranscodeMap,
> = Partial<Pick<Item, PropertiesOfType<Item, T[keyof Exactify<T>]>>>;
