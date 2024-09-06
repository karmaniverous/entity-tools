import { isNumber, isString } from 'radash';

import {
  type DefaultIndexableProperty,
  type DefaultProperty,
  type Entity,
  type Indexable,
  isNil,
} from './types';

/**
 * Sort an array of {@link Entity | `Entity`} progressively by a set of {@link Indexable | `Indexable`} keys.
 *
 * @typeParam P - Entity property type. Defaults to {@link DefaultProperty | `DefaultProperty`}.
 * @typeParam I - {@link Indexable | `Indexable`} property type. Defaults to {@link DefaultIndexableProperty | `DefaultIndexableProperty`}, and should be specified if necessary.
 * @typeParam E - Entity type. Should be inferred from items.
 *
 * @param items - Array of {@link Entity | `Entity`}.
 * @param index - Array of Indexable {@link Entity | `Entity`} keys.
 * @param desc - Map of {@link Indexable | `Indexable`} {@link Entity | `Entity`} keys to boolean values. If a value is true, the corresponding key will sort in descending order.
 *
 * @returns Sorted `items`.
 *
 * @remarks
 * Sorts `items` progresively by the elements of `index`, passing to the next element if values at the current element are equal.
 *
 * `null` and `undefined` values are considered equivalent and less than any other value.
 *
 * An `index` element that is present and `true` in `desc` will sort in descending order, otherwise ascending.
 */
export const sort = <
  P = DefaultProperty,
  I = DefaultIndexableProperty,
  E extends Entity<P> = Entity<P>,
>(
  items: E[] = [],
  index: Indexable<E, P, I>[] = [],
  desc: { [key in Indexable<E, P, I>]?: boolean } = {},
): E[] =>
  [...items].sort((a, b) => {
    let comp = 0;

    for (const key of index) {
      if (isNumber(a[key]) && isNumber(b[key])) comp = a[key] - b[key];

      if (isString(a[key]) && isString(b[key]))
        comp = a[key].localeCompare(b[key]);

      if (!isNil(a[key]) && isNil(b[key])) comp = 1;

      if (isNil(a[key]) && !isNil(b[key])) comp = -1;

      if (comp) return desc[key] ? -comp : comp;
    }

    return comp;
  });
