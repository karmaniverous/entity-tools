/**
 * The base TypeMap type. Relates types to the string token identifying the type in runtime code. All TypeMaps should extend this type.
 *
 * @example
 * ```
 * interface StringifiableTypes extends TypeMap {
 *   string: string;
 *   number: number;
 *   boolean: boolean;
 *   bigint: bigint;
 * }
 * ```
 *
 * @category Type Maps
 */
export type TypeMap = Record<string, unknown>;

/**
 * The default {@link TypeMap | `TypeMap`} representing indexable types.
 *
 * @category Type Maps
 */
export interface StringifiableTypes extends TypeMap {
  string: string;
  number: number;
  boolean: boolean;
  bigint: bigint;
}

/**
 * Strips the generic `[x: string]: unknown` property from `Record<string, unknown>` type.
 *
 * @typeParam T - The `Record<string, unknown>` type.
 *
 * @returns The `Record<string, unknown>` type without the generic property.
 *
 * @category Utilities
 */
export type Exactify<T extends Record<string, unknown>> = {
  [P in keyof T as string extends P ? never : P]: T[P];
};

/**
 * The base Entity type. All Entities should extend this type.
 *
 * @category Entities
 */
export type Entity = Record<string, unknown>;

/**
 * Generates a union of the keys of an {@link Entity | `Entity`} type whose values are of a given type.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 * @typeParam T - The type to filter by.
 *
 * @returns A union of the keys of {@link Entity | `Entity`} `E` whose values are of type `T`.
 *
 * @category Entities
 */
export type PropertiesOfType<E extends Entity, T> = keyof {
  [Property in keyof Exactify<E> as [T] extends [never]
    ? [NonNullable<E[Property]>] extends [never]
      ? Property
      : never
    : [NonNullable<E[Property]>] extends [never]
      ? never
      : NonNullable<E[Property]> extends T
        ? Property
        : never]: never;
};

/**
 * Generates a union of the keys of an {@link Entity | `Entity`} type whose values are not of a given type.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 * @typeParam T - The type to filter by.
 *
 * @returns A union of the keys of {@link Entity | `Entity`} `E` whose values are not of type `T`.
 *
 * @category Entities
 */
export type PropertiesNotOfType<E extends Entity, T> = keyof {
  [Property in keyof Exactify<E> as [T] extends [never]
    ? [NonNullable<E[Property]>] extends [never]
      ? never
      : Property
    : [NonNullable<E[Property]>] extends [never]
      ? NonNullable<E[Property]> extends T
        ? Property
        : never
      : never]: never;
};

/**
 * Generates a union of the keys of an {@link Entity | `Entity`} type that are represented in a given {@link TypeMap | `TypeMap`}.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 * @typeParam T - The {@link TypeMap | `TypeMap`}.
 *
 * @returns A union of the keys of {@link Entity | `Entity`} `E` whose types are in {@link TypeMap | `TypeMap`} `T`.
 *
 * @category Entities
 * @category Type Maps
 */
export type PropertiesInTypeMap<
  E extends Entity,
  T extends TypeMap,
> = PropertiesOfType<E, T[keyof Exactify<T>]>;

/**
 * Generates a union of the keys of an {@link Entity | `Entity`} type that are not represented in a given {@link TypeMap | `TypeMap`}.
 *
 * @typeParam E - The {@link Entity | `Entity`} type.
 * @typeParam T - The {@link TypeMap | `TypeMap`}.
 *
 * @returns A union of the keys of {@link Entity | `Entity`} `E` whose types are not in {@link TypeMap | `TypeMap`} `T`.
 *
 * @category Entities
 * @category Type Maps
 */
export type PropertiesNotInTypeMap<
  E extends Entity,
  T extends TypeMap,
> = PropertiesNotOfType<E, T[keyof Exactify<T>]>;
