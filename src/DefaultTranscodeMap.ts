// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { defaultTranscodes } from './defaultTranscodes'; // imported to support API docs
import type { TranscodeMap } from './TranscodeMap';

/**
 * Default {@link TranscodeMap | `TranscodeMap`} supporting {@link defaultTranscodes | `defaultTranscodes`}.
 *
 * @see {@link Transcodes | `Transcodes`}
 *
 * @category Transcoding
 */
export interface DefaultTranscodeMap extends TranscodeMap {
  /**
   * Supports variable-width transcoding of `BigInt` values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  bigint: bigint;

  /**
   * Supports fixed-width transcoding of `BigInt` values of up to 20 digits. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  bigint20: bigint;

  /**
   * Supports fixed-width transcoding of `boolean` values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  boolean: boolean;

  /**
   * Supports fixed-width transcoding of `number` values with up to 6 decimal places. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  fix6: number;

  /**
   * Supports fixed-width transcoding of integer values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  int: number;

  /**
   * Supports variable-width transcoding of number values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  number: number;

  /**
   * Supports variable-width transcoding of `string` values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  string: string;

  /**
   * Supports fixed-width transcoding of UNIX timestamp values. See {@link defaultTranscodes | `defaultTranscodes`} for implementation details.
   */
  timestamp: number;
}
