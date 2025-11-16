/**
 + Computes a stable 32-bit unsigned FNV-1a hash for a string.
 */
export function hashString(value: string): number {
  let h = 0x811c9dc5; // FNV-1a offset basis
  for (let i = 0; i < value.length; i++) {
    h ^= value.charCodeAt(i);
    // FNV prime 16777619; keep 32-bit via imul + >>> 0 when returned
    h = Math.imul(h, 0x01000193);
  }
  return h >>> 0;
}
