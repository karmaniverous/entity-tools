import { Entity } from './Entity';
import { PropertiesOfType } from './PropertiesOfType';
import { TranscodeMap } from './TranscodeMap';

/**
 * A partial {@link Entity | `Entity`} composed solely of properties that can be transcoded.
 *
 * @category Entities
 * @category Transcoding
 */
export type PartialTranscodable<
  Item extends Entity,
  T extends TranscodeMap,
> = Partial<Pick<Item, PropertiesOfType<Item, T[keyof T]>>>;
