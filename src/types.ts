/**
 * Default {@link Entity | `Entity`} property types.
 */
export type DefaultProperty =
  | string
  | number
  | boolean
  | null
  | undefined
  | { [key: string]: DefaultProperty }
  | DefaultProperty[];

/**
 * Default indexable {@link Entity | `Entity`} property types. Types that do not intersect with valid property types will be ignored.
 */
export type DefaultIndexableProperty = number | string | null | undefined;

/**
 * Generate an Entity type.
 *
 * Extending from this type prevents use of invalid property types.
 *
 * @typeParam P - Entity property type. Defaults to {@link DefaultProperty | `DefaultProperty`}.
 *
 * @example
 * ```ts
 * // Say the database doesn't support undefined values.
 * type Property = Exclude<DefaultProperty, undefined>;
 *
 * // Define User entity interface. Omit the type argument if using the DefaultProperty type.
 * interface User extends Entity<Property> {
 *   id: number;
 *   name: string;
 * }
 * ```
 *
 * This is a contrived example, as a more flexible solution would be to keep the undefined type and strip undefined properties before posting to the database.
 */
export type Entity<P = DefaultProperty> = Record<string, P>;

/**
 * Generate a union of indexable {@link Entity | `Entity`} keys.
 *
 * @typeParam E - {@link Entity | `Entity`} type.
 * @typeParam I - Indexable property type. Defaults to {@link DefaultIndexableProperty | `DefaultIndexableProperty`}.
 *
 * @example
 * ```ts
 * // Say the DB can't index undefined values.
 * type IndexableProperty = Exclude<DefaultIndexableProperty, undefined>;
 *
 * // Define User entity interface. Uses default Property type.
 * interface User extends Entity {
 *   id: number;
 *   name: string;
 *   optional?: string;              // Not indexable.
 *   data: Record<string, Property>; // Not indexable.
 * }
 *
 * type IndexableKeys = Indexable<User, IndexableProperty>; // 'id' | 'name'
 * ```
 */
export type Indexable<E extends Entity, I = DefaultIndexableProperty> = keyof {
  [P in keyof E as E[P] extends I ? P : never]: E[P];
};

export const isNil = (value: unknown): value is null | undefined =>
  value === null || value === undefined;
