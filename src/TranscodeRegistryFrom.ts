/**
 * Maps a record of transcoders to a `TranscodeRegistry` type by extracting each
 * entry's `decode` return type.
 *
 * @example
 * type R = TranscodeRegistryFrom\<\{ int: Transcoder<number> \}\>;
 * // \{ int: number \}
 */
import type { Transcoder } from './Transcoder';

export type TranscodeRegistryFrom<
  T extends Record<string, Transcoder<unknown>>,
> = {
  [K in keyof T]: ReturnType<T[K]['decode']>;
};
