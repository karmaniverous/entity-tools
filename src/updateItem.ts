import { shake } from 'radash';

import type { MakeUpdatable } from './MakeUpdatable';
import { isNil } from './Nil';

/**
 * Creates a shallow update of `item` with the properties of `update` according to the following conventions:
 *
 * * `item` and `update` must be compatible types.
 * * `undefined` properties in `update` are ignored.
 * * `null` properties in `update` are assigned to `item`.
 * * All `undefined` and `null` properties in the resulting update are removed.
 *
 * Does not mutate `item` or `update`.
 *
 * @param item - The item to update.
 * @param update - A compatible item with properties to update.
 *
 * @returns A shallow copy of `item` merged with the properties of `update`.
 *
 * @category Entities
 */
export const updateItem = <T extends object>(
  item: T,
  update: MakeUpdatable<T>,
): T => shake(Object.assign({}, item, shake(update)), isNil) as T;
