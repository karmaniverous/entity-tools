/* eslint-disable @typescript-eslint/no-unused-vars */

import { DefaultProperty, Entity, Indexable } from './types';

export interface User extends Entity {
  id: number;
  name: string;
  optional?: string | null;
  data: Record<string, DefaultProperty>;
}

export const users: User[] = [
  { id: 2, name: 'Adam', optional: 'foo', data: { foo: 'bar' } },
  { id: 3, name: 'Bob', optional: 'bar', data: { bar: 'baz' } },
  { id: 1, name: 'Charlie', optional: null, data: { baz: 'qux' } },
  { id: 4, name: 'Adam', data: { baz: 'qux' } },
];

// 'id' is indexable
const happyPath: Indexable<User> = 'id';

// 'optional' is indexable.
const optionalIsIndexable: Indexable<User> = 'optional';

// @ts-expect-error 'foo' doesn't exist on User.
const propertyDoesNotExist: Indexable<User> = 'foo';

// @ts-expect-error 'data' is not indexable.
const propertyIsNotIndexable: Indexable<User> = 'data';
