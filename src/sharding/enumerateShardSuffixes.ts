/**
 + Enumerates all shard suffixes for a radix/width combination.
 + For chars === 0, returns [""].
 */
export function enumerateShardSuffixes(radix: number, chars: number): string[] {
  if (!Number.isInteger(radix) || radix < 2 || radix > 36)
    throw new Error('invalid radix');
  if (!Number.isInteger(chars) || chars < 0) throw new Error('invalid chars');
  if (chars === 0) return [''];
  const space = radix ** chars;
  const out = new Array<string>(space);
  for (let i = 0; i < space; i++) {
    out[i] = i.toString(radix).padStart(chars, '0');
  }
  return out;
}
