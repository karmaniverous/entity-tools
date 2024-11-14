import { shake } from 'radash';

import type { MakeUpdatable } from './MakeUpdatable';
import { isNil } from './Nil';

/**
 * Creates a shallow update of `record` with the properties of `update` according to the following conventions:
 *
 * * `record` and `update` must be compatible types.
 * * `undefined` properties in `update` are ignored.
 * * `null` properties in `update` are assigned to `record`.
 * * All `undefined` and `null` properties in the resulting update are removed.
 *
 * Does not mutate `record` or `update`.
 *
 * @param record - The record to update.
 * @param update - A compatible record with properties to update.
 *
 * @returns A shallow copy of `record` merged with the properties of `update`.
 *
 * @category Entities
 */
export const updateRecord = <T extends object>(
  record: T,
  update: MakeUpdatable<T>,
): T => shake(Object.assign({}, record, shake(update)), isNil) as T;
