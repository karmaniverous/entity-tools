/**
 * A pair of encode/decode functions for a specific value type V.
 *
 * @category Transcoding
 */
export type Transcoder<V> = {
  /**
   * Encodes a value into a string representation.
   */
  encode: (value: V) => string;

  /**
   * Decodes a string representation into a value.
   */
  decode: (value: string) => V;
};
