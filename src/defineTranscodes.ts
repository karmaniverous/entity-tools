import type { Transcoder } from './Transcoder';
import type { TranscodeRegistryFrom } from './TranscodeRegistryFrom';
import type { Transcodes } from './Transcodes';

// Internal helper types to enforce encode/decode agreement.
type EncodeParam<F> = F extends { encode: (value: infer V) => string }
  ? V
  : never;
type DecodeReturn<F> = F extends { decode: (value: string) => infer V }
  ? V
  : never;

/**
 + Ensures that for each entry K:
 +   - encode: (value: VK) =\> string
 +   - decode: (value: string) =\> VK
 + and VK matches in both positions (bi-directionally).
 */
type EncodeDecodeAgreement<T extends Record<string, Transcoder<unknown>>> = {
  [K in keyof T]-?: [EncodeParam<T[K]>] extends [DecodeReturn<T[K]>]
    ? [DecodeReturn<T[K]>] extends [EncodeParam<T[K]>]
      ? T[K]
      : never
    : never;
};

/**
 + Value-first builder for transcode registries. Preserves literal keys and
 + enforces compile-time agreement between encode and decode types.
 +
 + Returns the same value at runtime; the return type is narrowed to
 + Transcodes\<TranscodeRegistryFrom<T>\> for API ergonomics.
 */
export function defineTranscodes<
  const T extends Record<string, Transcoder<unknown>>,
>(spec: T & EncodeDecodeAgreement<T>): Transcodes<TranscodeRegistryFrom<T>> {
  // Runtime identity; the type-level narrowing is the purpose of this helper.
  return spec as unknown as Transcodes<TranscodeRegistryFrom<T>>;
}
