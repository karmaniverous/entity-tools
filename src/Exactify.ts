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
