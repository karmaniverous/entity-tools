import type { TranscodeRegistryFrom } from './TranscodeRegistryFrom';
import type { Transcodes } from './Transcodes';

export type EncodeParam<F> = F extends { encode: (value: infer V) => string }
  ? V
  : never;
export type DecodeReturn<F> = F extends { decode: (value: string) => infer V }
  ? V
  : never;

/**
 * Ensures that for each entry K:
 *  - encode: (value: VK) =\> string
 *  - decode: (value: string) =\> VK
 * and VK matches in both positions (bi-directionally).
 */
export type EncodeDecodeAgreement<
  T extends Record<string, { decode: (value: string) => unknown }>,
> = {
  [K in keyof T]-?: [EncodeParam<T[K]>] extends [never]
    ? never
    : [DecodeReturn<T[K]>] extends [never]
      ? never
      : [EncodeParam<T[K]>] extends [DecodeReturn<T[K]>]
        ? [DecodeReturn<T[K]>] extends [EncodeParam<T[K]>]
          ? T[K]
          : never
        : never;
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
