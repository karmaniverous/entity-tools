import type { TranscodeRegistryFrom } from './TranscodeRegistryFrom';
import type { Transcodes } from './Transcodes';

export type EncodeParam<F> = F extends { encode: (value: infer V) => string }
  ? V
  : never;
export type DecodeReturn<F> = F extends { decode: (value: string) => infer V }
  ? V
  : never;

/**
 * Branded error shapes to improve DX when encode/decode agreement fails.
 */
export type MissingEncodeError<K extends string> = {
  __error__: 'MissingEncode';
  key: K;
};

export type MissingDecodeError<K extends string> = {
  __error__: 'MissingDecode';
  key: K;
};

export type EncodeDecodeMismatchError<K extends string, E, D> = {
  __error__: 'EncodeDecodeMismatch';
  key: K;
  encodeParam: E;
  decodeReturn: D;
};

/**
 * Ensures that for each entry K:
 *  - encode: (value: VK) =\> string
 *  - decode: (value: string) =\> VK
 * and VK matches in both positions (bi-directionally).
 */
export type EncodeDecodeAgreement<
  T extends Record<string, { decode: (value: string) => unknown }>,
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
  const T extends Record<string, { decode: (value: string) => unknown }>,
>(spec: T & EncodeDecodeAgreement<T>): Transcodes<TranscodeRegistryFrom<T>> {
  // Runtime identity; types come from the single signature.
  return spec as unknown as Transcodes<TranscodeRegistryFrom<T>>;
}
