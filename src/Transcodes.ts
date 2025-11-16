import type { Exactify } from './Exactify';
import type { TranscodeRegistry } from './TranscodeRegistry';

/**
 * Maps transcode keys to their respective encoding and decoding functions.
 *
 * @typeParam TR - The {@link TranscodeRegistry | `TranscodeRegistry`} type.
 *
 * @remarks
 * The keys of this object must exactly match the keys of the {@link TranscodeRegistry | `TranscodeRegistry`}.
 *
 * Each `encode` function must take the mapped type as an argument and return a `string`. Invalid values should throw an error.
 *
 * Each `decode` function must take a `string` as an argument and return the mapped type.
 *
 * Encoded strings should be articulated such that they sort alphanumerically in the same order as the mapped type. Numerical values should therefore be encoded at a foxed length.
 *
 * @example
 * ```
 * interface MyTranscodeRegistry extends TranscodeRegistry {
 *   fix6: number;
 * }
 *
 * const myTranscodes: Transcodes<MyTranscodeRegistry> = {
 *   fix6: {
 *     encode: (value) => {
 *       if (
 *         !isNumber(value) ||
 *         value > Number.MAX_SAFE_INTEGER / 1000000 ||
 *         value < Number.MIN_SAFE_INTEGER / 1000000
 *       )
 *         throw new Error('invalid fix6');
 *
 *       const [prefix, abs] = value < 0 ? ['n', -value] : ['p', value];
 *
 *       return `${prefix}${abs.toFixed(6).padStart(17, '0')}`;
 *     },
 *     decode: (value) => {
 *       if (!isString(value) || !/^[np][0-9]{10}\.[0-9]{6}$/.test(value))
 *         throw new Error('invalid encoded fix6');
 *
 *       return (value.startsWith('n') ? -1 : 1) * Number(value.slice(1));
 *     },
 *   },
 * };
 *
 * console.log(myTranscodes.fix6.encode(-123.45));              //  n0000000123.450000
 * console.log(myTranscodes.fix6.encode(123.45));               //  p0000000123.450000
 * console.log(myTranscodes.fix6.encode(100000000000123.45));   //  throws error
 * console.log(myTranscodes.fix6.encode('foo'));                //  throws error
 *
 * console.log(myTranscodes.fix6.decode('n0000000123.450000')); // -123.45 (number)
 * console.log(myTranscodes.fix6.decode('p0000000123.450000')); //  123 (number)
 * console.log(myTranscodes.fix6.decode('q0000000123.450000')); //  throws error
 * console.log(myTranscodes.fix6.decode('foo'));                //  throws error
 * ```
 *
 * @category Transcoding
 */
export type Transcodes<TR extends TranscodeRegistry> = {
  [P in keyof Exactify<TR>]: {
    encode: (value: TR[P]) => string;
    decode: (value: string) => TR[P];
  };
};
