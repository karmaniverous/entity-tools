// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defaultTranscodes } from './defaultTranscodes';
import { TranscodeMap } from './TranscodeMap';

/**
 * Default {@link TranscodeMap | `TranscodeMap`} supporting {@link defaultTranscodes | `defaultTranscodes`}.
 *
 * @see {@link Transcodes | `Transcodes`}
 *
 * @category Transcoding
 */
export interface DefaultTranscodeMap extends TranscodeMap {
  /**
   * Supports transcoding of `BigInt` values of up to 20 digits. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  bigint20: bigint;

  /**
   * Supports transcoding of `boolean` values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  boolean: boolean;

  /**
   * Supports transcoding of fixed `number` values with up to 6 decimal places. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  fix6: number;

  /**
   * Supports transcoding of integer values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  int: number;

  /**
   * Supports transcoding of `string` values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  string: string;

  /**
   * Supports transcoding of UNIX timestamp values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  timestamp: number;
}
