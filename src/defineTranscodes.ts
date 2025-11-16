import type { Transcoder } from './Transcoder';
import type { TranscodeRegistry } from './TranscodeRegistry';
import type { TranscodeRegistryFrom } from './TranscodeRegistryFrom';
import type { Transcodes } from './Transcodes';

// Internal helper types to enforce encode/decode agreement.
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
  T extends Record<string, Transcoder<unknown>>,
> = {
  [K in keyof T]-?: [EncodeParam<T[K]>] extends [DecodeReturn<T[K]>]
    ? [DecodeReturn<T[K]>] extends [EncodeParam<T[K]>]
      ? T[K]
      : never
    : never;
};

/**
 * Value-first builder for transcode registries.
 * Overload A: fully typed registries (best for canonical/default registries).
 */
export function defineTranscodes<TR extends TranscodeRegistry>(
  spec: Transcodes<TR>,
): Transcodes<TR>;
/**
 * Overload B: inference-first — derive the registry shape from decode() return types.
 * Enforces encode/decode agreement per key.
 */
export function defineTranscodes<
  const T extends Record<string, Transcoder<unknown>>,
>(spec: T & EncodeDecodeAgreement<T>): Transcodes<TranscodeRegistryFrom<T>>;
export function defineTranscodes(spec: unknown) {
  // Runtime identity; types are provided by overload resolution.
  return spec;
}
