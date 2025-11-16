/**
 + Decodes a serialized key/value string using configurable delimiters.
 + Requires exactly one kv delimiter per pair; throws on malformed pairs.
 + Defaults: pair="|", kv="#".
 */
export function decodePairs(
  serialized: string,
  options?: { pair?: string; kv?: string },
): Array<[string, string]> {
  const pair = options?.pair ?? '|';
  const kv = options?.kv ?? '#';
  if (!serialized) return [];
  return serialized.split(pair).map((seg) => {
    const i = seg.indexOf(kv);
    if (i < 0) throw new Error('invalid pair');
    const j = seg.indexOf(kv, i + kv.length);
    if (j >= 0) throw new Error('invalid pair');
    const key = seg.slice(0, i);
    const value = seg.slice(i + kv.length);
    return [key, value];
  });
}

export type DecodePairsOptions = Parameters<typeof decodePairs>[1];
