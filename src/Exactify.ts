/**
 * Strips unspecified properties like `[x: string]: unknown` from `Record` types.
 *
 * @typeParam O - The `Record` type.
 *
 * @returns The `Record` type with only specified properties.
 *
 * @category Utilities
 */
export type Exactify<O extends object> = {
  [P in keyof O as string extends P
    ? never
    : number extends P
      ? never
      : symbol extends P
        ? never
        : P]: O[P];
};
