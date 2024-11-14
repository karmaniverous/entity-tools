/**
 * The base Entity type. Supports string keys with any value. Derived types will accept unspecified string keys. All Entities should extend this type.
 *
 * NOTE: This type is essential to support document databases that can accept unknown keys. It does NOT play well with the {@link Omit | `Omit`} utility type! Use {@link MakeOptional | `MakeOptional`} instead.
 *
 * @category Entities
 */
export type Entity = Record<string, unknown>;
