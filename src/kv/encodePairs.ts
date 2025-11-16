/**
 + Encodes key/value pairs into a single string using configurable delimiters.
 + Defaults: pair="|", kv="#".
 */
export function encodePairs(
  pairs: Array<[string, string]>,
  options?: { pair?: string; kv?: string },
): string {
  const pair = options?.pair ?? '|';
  const kv = options?.kv ?? '#';
  if (!pairs.length) return '';
  return pairs.map(([k, v]) => `${k}${kv}${v}`).join(pair);
}
