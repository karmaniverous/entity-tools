import type { Entity } from './Entity';

/**
 * The base EntityMap type. All EntityMaps should extend this type.
 *
 * @category Entities
 */
export type EntityMap = Record<string, Entity>;
