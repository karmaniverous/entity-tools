import { isInt, isNumber, isString } from 'radash';

import type { DefaultTranscodeRegistry } from './DefaultTranscodeRegistry';
import { defineTranscodes } from './defineTranscodes';
import type { Transcodes } from './Transcodes';

/**
 * A default set of {@link Transcodes | `Transcodes`} supporting {@link DefaultTranscodeRegistry | `DefaultTranscodeRegistry`}. These can be extended as needed by consuming applications.
 *
 * See {@link https://github.com/karmaniverous/entity-tools/blob/main/src/defaultTranscodes.ts | implementation details}.
 *
 * @category Transcoding
 */
export const defaultTranscodes: Transcodes<DefaultTranscodeRegistry> =
  defineTranscodes<DefaultTranscodeRegistry>({
    bigint: {
      encode: (value: bigint) => {
        if (typeof value !== 'bigint') throw new Error('invalid bigint');

        return value.toString();
      },
      decode: (value) => {
        try {
          return BigInt(value);
        } catch {
          throw new Error('invalid encoded bigint');
        }
      },
    },
    bigint20: {
      encode: (value: bigint) => {
        if (
          typeof value !== 'bigint' ||
          value > 99999999999999999999n ||
          value < -99999999999999999999n
        )
          throw new Error('invalid bigint20');

        const [prefix, abs] = value < 0n ? ['n', -value] : ['p', value];

        return `${prefix}${abs.toString().padStart(20, '0')}`;
      },
      decode: (value) => {
        if (!isString(value) || !/^[np][0-9]{20}$/.test(value))
          throw new Error('invalid encoded bigint20');

        return (value.startsWith('n') ? -1n : 1n) * BigInt(value.slice(1));
      },
    },
    boolean: {
      encode: (value: boolean) => {
        if (typeof value !== 'boolean') throw new Error('invalid boolean');

        return value.toString()[0];
      },
      decode: (value: string): boolean => {
        if (!isString(value) || !/^[tf]$/.test(value))
          throw new Error('invalid encoded boolean');

        return value === 't';
      },
    },
    fix6: {
      encode: (value: number) => {
        if (
          !isNumber(value) ||
          value > Number.MAX_SAFE_INTEGER / 1000000 ||
          value < Number.MIN_SAFE_INTEGER / 1000000
        )
          throw new Error('invalid fix6');

        const [prefix, abs] = value < 0 ? ['n', -value] : ['p', value];

        return `${prefix}${abs.toFixed(6).padStart(17, '0')}`;
      },
      decode: (value) => {
        if (!isString(value) || !/^[np][0-9]{10}\.[0-9]{6}$/.test(value))
          throw new Error('invalid encoded fix6');

        return (value.startsWith('n') ? -1 : 1) * Number(value.slice(1));
      },
    },
    int: {
      encode: (value: number) => {
        if (!isInt(value)) throw new Error('invalid int');

        const [prefix, abs] = value < 0 ? ['n', -value] : ['p', value];

        return `${prefix}${abs.toString().padStart(16, '0')}`;
      },
      decode: (value) => {
        if (!isString(value) || !/^[np][0-9]{16}$/.test(value))
          throw new Error('invalid encoded int');

        return (value.startsWith('n') ? -1 : 1) * Number(value.slice(1));
      },
    },
    number: {
      encode: (value: number) => {
        if (typeof value !== 'number') throw new Error('invalid number');

        return value.toString();
      },
      decode: (value) => {
        const decode = Number(value);

        if (isNaN(decode)) throw new Error('invalid encoded number');

        return Number(value);
      },
    },
    string: {
      encode: (value: string) => {
        if (!isString(value)) throw new Error('invalid string');

        return value;
      },
      decode: (value: string): string => {
        if (!isString(value)) throw new Error('invalid encoded string');

        return value;
      },
    },
    timestamp: {
      encode: (value: number) => {
        if (!isInt(value) || value < 0 || value > 9999999999999)
          throw new Error('invalid timestamp');

        return value.toString().padStart(13, '0');
      },
      decode: (value) => {
        if (!isString(value) || !/^[0-9]{13}$/.test(value))
          throw new Error('invalid encoded timestamp');

        return Number(value);
      },
    },
  });
