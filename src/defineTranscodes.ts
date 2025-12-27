import type { TranscodeRegistryFrom } from './TranscodeRegistryFrom';
import type { Transcodes } from './Transcodes';

/**
 * Extracts the parameter type of an `encode` function, if present.
 *
 * @category Transcoding
 */
export type EncodeParam<F> = F extends {
  /**
   * Encodes a value into a string.
   */
  encode: (value: infer V) => string;
}
  ? V
  : never;

/**
 * Extracts the return type of a `decode` function, if present.
 *
 * @category Transcoding
 */
export type DecodeReturn<F> = F extends {
  /**
   * Decodes a string into a value.
   */
  decode: (value: string) => infer V;
}
  ? V
  : never;

/**
 * Branded error shapes to improve DX when encode/decode agreement fails.
 */
export type MissingEncodeError<K extends string> = {
  /**
   * Error discriminant.
   */
  __error__: 'MissingEncode';

  /**
   * Transcode key that is missing an `encode` implementation.
   */
  key: K;
};

/**
 * Branded error shape indicating a missing `decode` implementation for a key.
 */
export type MissingDecodeError<K extends string> = {
  /**
   * Error discriminant.
   */
  __error__: 'MissingDecode';

  /**
   * Transcode key that is missing a `decode` implementation.
   */
  key: K;
};

/**
 * Branded error shape indicating `encode`/`decode` type disagreement for a key.
 */
export type EncodeDecodeMismatchError<K extends string, E, D> = {
  /**
   * Error discriminant.
   */
  __error__: 'EncodeDecodeMismatch';

  /**
   * Transcode key whose `encode` and `decode` types disagree.
   */
  key: K;

  /**
   * The inferred `encode` parameter type for the mismatched key.
   */
  encodeParam: E;

  /**
   * The inferred `decode` return type for the mismatched key.
   */
  decodeReturn: D;
};

/**
 * Ensures that for each entry K:
 *  - encode: (value: VK) =\> string
 *  - decode: (value: string) =\> VK
 * and VK matches in both positions (bi-directionally).
 */
export type EncodeDecodeAgreement<
  T extends Record<
    string,
    {
      /**
       * Decodes a string into a value type (used for inference and agreement checks).
       */
      decode: (value: string) => unknown;
    }
  >,
> = {
  [K in keyof T]-?: K extends string
    ? [EncodeParam<T[K]>] extends [never]
      ? MissingEncodeError<K>
      : [DecodeReturn<T[K]>] extends [never]
        ? MissingDecodeError<K>
        : [EncodeParam<T[K]>] extends [DecodeReturn<T[K]>]
          ? [DecodeReturn<T[K]>] extends [EncodeParam<T[K]>]
            ? T[K]
            : EncodeDecodeMismatchError<
                K,
                EncodeParam<T[K]>,
                DecodeReturn<T[K]>
              >
          : EncodeDecodeMismatchError<K, EncodeParam<T[K]>, DecodeReturn<T[K]>>
    : T[K];
};

/**
 * Inference-first builder — derive the registry shape from decode() return types.
 * Enforces encode/decode agreement per key.
 */
export function defineTranscodes<
  const T extends Record<
    string,
    {
      /**
       * Decodes a string into a value type (used for inference and agreement checks).
       */
      decode: (value: string) => unknown;
    }
  >,
>(spec: T & EncodeDecodeAgreement<T>): Transcodes<TranscodeRegistryFrom<T>> {
  // Runtime identity; types come from the single signature.
  return spec as unknown as Transcodes<TranscodeRegistryFrom<T>>;
}
