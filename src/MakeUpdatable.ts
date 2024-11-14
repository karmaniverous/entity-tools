/**
 * Makes all properties of `T` except for `U` optional and, if originally optional, nullable. Makes `U` required.
 *
 * @typeParam T - The type to make updatable.
 * @typeParam U - The properties to reserve as required.
 *
 * @category Utilities
 */
export type MakeUpdatable<T extends object, U extends keyof T = never> = {
  [P in keyof T as P extends U ? never : P]+?: undefined extends T[P]
    ? T[P] | null
    : T[P];
} & Required<Pick<T, U>>;
