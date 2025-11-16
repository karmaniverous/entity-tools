import type { Exactify } from './Exactify';
import type { TranscodeRegistry } from './TranscodeRegistry';
import type { TranscodeRegistryFrom } from './TranscodeRegistryFrom';
import type { Transcodes } from './Transcodes';

// Internal helper types to enforce encode/decode agreement.
type IsUnknown<T> = unknown extends T
  ? [T] extends [unknown]
    ? true
    : false
  : false;

export type EncodeParam<F> = F extends { encode: (value: infer V) => string }
  ? V
  : never;
export type DecodeReturn<F> = F extends { decode: (value: string) => infer V }
  ? V
  : never;

/**
 * Helper to disallow unknown-valued entries in typed registries.
 */
type NonUnknownRegistry<TR extends TranscodeRegistry> = {
  [K in keyof Exactify<TR>]-?: IsUnknown<TR[K]> extends true ? never : unknown;
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
  [K in keyof T]-?: IsUnknown<EncodeParam<T[K]>> extends true
    ? never
    : IsUnknown<DecodeReturn<T[K]>> extends true
      ? never
      : [EncodeParam<T[K]>] extends [DecodeReturn<T[K]>]
        ? [DecodeReturn<T[K]>] extends [EncodeParam<T[K]>]
          ? T[K]
          : never
        : never;
};

/**
 * Overload B: inference-first — derive the registry shape from decode() return types.
 * Enforces encode/decode agreement per key.
 */
export function defineTranscodes<
  const T extends Record<string, { decode: (value: string) => unknown }>,
>(spec: T & EncodeDecodeAgreement<T>): Transcodes<TranscodeRegistryFrom<T>>;
/**
 * Value-first builder for transcode registries.
 * Overload A: fully typed registries (best for canonical/default registries).
 */
export function defineTranscodes<
  TR extends TranscodeRegistry,
  T extends Transcodes<TR>,
>(
  spec: T &
    // Enforce agreement based on the actual argument shape.
    EncodeDecodeAgreement<T> &
    // Disallow unknown in TR to prevent typed-overload from accepting unknown.
    NonUnknownRegistry<TR>,
): Transcodes<TR>;
export function defineTranscodes(spec: unknown) {
  // Runtime identity; types are provided by overload resolution.
  return spec;
}
