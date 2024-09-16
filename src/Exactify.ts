/**
 * Strips the unspecified properties like `[x: string]: unknown` from `Record` types.
 *
 * @typeParam T - The `Record` type.
 *
 * @returns The `Record` type with only specified properties.
 *
 * @category Utilities
 */
export type Exactify<T extends Record<string, unknown>> = {
  [P in keyof T as string extends P
    ? never
    : number extends P
      ? never
      : symbol extends P
        ? never
        : P]: T[P];
};
