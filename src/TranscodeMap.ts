/**
 * Relates transcode keys to the types transcoded.
 *
 * @example
 * ```
 * interface DefaultTranscodeMap extends TranscodeMap {
 *   bigint20: bigint;
 *   boolean: boolean;
 *   fix6: number;
 *   int: number;
 *   string: string;
 * }
 * ```
 *
 * @category Transcoding
 */
export type TranscodeMap = Record<string, unknown>;
