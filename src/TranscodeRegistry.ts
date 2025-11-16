/**
 * Relates transcodable property keys to the types transcoded.
 *
 * @example
 * ```
 * interface MyTranscodeRegistry extends TranscodeRegistry {
 *   fix6: number;
 *   boolean: boolean;
 * }
 * ```
 * @category Transcoding
 */
export type TranscodeRegistry = object;
