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
  bigint20: bigint;
  boolean: boolean;
  fix6: number;
  int: number;
  string: string;
}
