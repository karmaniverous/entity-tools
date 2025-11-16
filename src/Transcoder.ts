/**
 * A pair of encode/decode functions for a specific value type V.
 *
 * @category Transcoding
 */
export type Transcoder<V> = {
  encode: (value: V) => string;
  decode: (value: string) => V;
};
