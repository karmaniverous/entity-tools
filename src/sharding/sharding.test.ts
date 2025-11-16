import { expect } from 'vitest';

import { enumerateShardSuffixes } from './enumerateShardSuffixes';
import { hashString } from './hashString';
import { shardSuffixFromHash } from './shardSuffixFromHash';

describe('sharding math', () => {
  it('hashString is deterministic and unsigned', () => {
    const a = hashString('hello');
    const b = hashString('hello');
    const c = hashString('world');
    expect(a).toBe(b);
    expect(a >>> 0).toBe(a);
    expect(c >>> 0).toBe(c);
  });

  it('enumerateShardSuffixes: chars=0 and radix/width grids', () => {
    expect(enumerateShardSuffixes(10, 0)).toEqual(['']);
    const hex2 = enumerateShardSuffixes(16, 2);
    expect(hex2.length).toBe(256);
    expect(hex2[0]).toBe('00');
    expect(hex2[255]).toBe('ff');
  });

  it('enumerateShardSuffixes throws on invalid params', () => {
    expect(() => enumerateShardSuffixes(1, 2)).toThrow('invalid radix');
    expect(() => enumerateShardSuffixes(37, 2)).toThrow('invalid radix');
    expect(() => enumerateShardSuffixes(16, -1)).toThrow('invalid chars');
  });

  it('shardSuffixFromHash: padding and modulo', () => {
    expect(shardSuffixFromHash(0xdeadbeef, 10, 2)).toMatch(/^\d{2}$/);
    expect(shardSuffixFromHash(123, 16, 2)).toMatch(/^[0-9a-f]{2}$/);
    // chars=0 => empty suffix
    expect(shardSuffixFromHash(123, 10, 0)).toBe('');
  });

  it('shardSuffixFromHash throws on invalid params', () => {
    expect(() => shardSuffixFromHash(1, 1, 1)).toThrow('invalid radix');
    expect(() => shardSuffixFromHash(1, 40, 1)).toThrow('invalid radix');
    expect(() => shardSuffixFromHash(1, 10, -1)).toThrow('invalid chars');
  });
});
