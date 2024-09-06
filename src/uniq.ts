import { unique } from 'radash';

import type { DefaultIndexableProperty, Entity, Indexable } from './types';

/**
 * De-dupes an array of {@link Entity | `Entity`} by a set of Indexable keys.
 *
 * @typeParam I - {@link Indexable | `Indexable`} property type. Defaults to {@link DefaultIndexableProperty | `DefaultIndexableProperty`}, and should be specified if necessary.
 * @typeParam E - {@link Entity | `Entity`} type. Should be inferred from items.
 *
 * @param items - Array of {@link Entity | `Entity`}.
 * @param index - Array of {@link Indexable | `Indexable`} {@link Entity | `Entity`} keys.
 * @param delimiter - String delimiter that joins index values internally to form unique key.
 *
 * @returns Unique items.
 *
 * @remarks
 * De-dupes items by the elements of index. null and undefined values are considered equivalent.
 */
export const uniq = <I = DefaultIndexableProperty, E extends Entity = Entity>(
  items: E[] = [],
  index: Indexable<E, I>[] = [],
  delimiter = '~',
): E[] =>
  unique(items, (item) => index.map((key) => item[key] ?? '').join(delimiter));
