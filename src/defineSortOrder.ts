import type { Entity } from './Entity';
import type { SortOrder } from './SortOrder';

/**
 + Identity helper that enforces SortOrder<E> at the call site while preserving
 + property literal unions for better inference and DX.
 */
export function defineSortOrder<E extends Entity>(
  so: SortOrder<E>,
): SortOrder<E> {
  return so;
}
