/**
 * Maps a record of transcoders to a `TranscodeRegistry` type by extracting each
 * entry's `decode` return type.
 *
 * @example
 * type R = TranscodeRegistryFrom\<\{
 *   int: \{ decode: (value: string) =\> number \};
 * \}\>;
 * // \{ int: number \}
 *
 * @category Transcoding
 */
export type TranscodeRegistryFrom<
  T extends Record<
    string,
    {
      /**
       * Decodes a string into a value type (used for inference).
       */
      decode: (value: string) => unknown;
    }
  >,
> = {
  [K in keyof T]: ReturnType<T[K]['decode']>;
};
