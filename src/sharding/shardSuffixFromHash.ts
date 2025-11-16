/**
 + Computes a shard suffix from a 32-bit hash modulo the shard space.
 + For chars === 0, returns "".
 */
export function shardSuffixFromHash(
  hash: number,
  radix: number,
  chars: number,
): string {
  if (!Number.isInteger(radix) || radix < 2 || radix > 36)
    throw new Error('invalid radix');
  if (!Number.isInteger(chars) || chars < 0) throw new Error('invalid chars');
  if (chars === 0) return '';
  const space = radix ** chars;
  const idx = (hash >>> 0) % space;
  return idx.toString(radix).padStart(chars, '0');
}
