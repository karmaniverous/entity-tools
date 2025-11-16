import { expect } from 'vitest';

import { decodePairs } from './decodePairs';
import { encodePairs } from './encodePairs';

describe('kv codec', () => {
  it('roundtrips pairs (default delimiters)', () => {
    const pairs: Array<[string, string]> = [
      ['k1', 'v1'],
      ['k2', ''],
    ];
    const enc = encodePairs(pairs);
    expect(enc).toBe('k1#v1|k2#');
    const dec = decodePairs(enc);
    expect(dec).toEqual(pairs);
  });

  it('roundtrips empty', () => {
    const enc = encodePairs([]);
    expect(enc).toBe('');
    const dec = decodePairs('');
    expect(dec).toEqual([]);
  });

  it('supports custom delimiters', () => {
    const pairs: Array<[string, string]> = [
      ['A', '1'],
      ['B', ''],
    ];
    const enc = encodePairs(pairs, { pair: '~', kv: '::' });
    expect(enc).toBe('A::1~B::');
    const dec = decodePairs(enc, { pair: '~', kv: '::' });
    expect(dec).toEqual(pairs);
  });

  it('throws on malformed pairs (missing kv)', () => {
    expect(() => decodePairs('k1#v1|k2v2')).toThrow('invalid pair');
  });

  it('throws on malformed pairs (extra kv)', () => {
    expect(() => decodePairs('k##v')).toThrow('invalid pair');
  });
});
