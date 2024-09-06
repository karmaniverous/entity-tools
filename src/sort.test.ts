import { expect } from 'chai';
import { omit } from 'radash';

import { sort } from '.';
import { users } from './types.test';

describe('sort', function () {
  it('will not sort on data', function () {
    // @ts-expect-error 'data' is not indexable.
    sort(users, ['data']);

    expect(true).to.be.true;
  });

  it('empty index returns original data', function () {
    const result = sort(users);

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 2, name: 'Adam', optional: 'foo' },
      { id: 3, name: 'Bob', optional: 'bar' },
      { id: 1, name: 'Charlie', optional: null },
      { id: 4, name: 'Adam' },
    ]);
  });

  it('should sort by id asc', function () {
    const result = sort(users, ['id']);

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 1, name: 'Charlie', optional: null },
      { id: 2, name: 'Adam', optional: 'foo' },
      { id: 3, name: 'Bob', optional: 'bar' },
      { id: 4, name: 'Adam' },
    ]);
  });

  it('should sort by id desc', function () {
    const result = sort(users, ['id'], { id: true });

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 4, name: 'Adam' },
      { id: 3, name: 'Bob', optional: 'bar' },
      { id: 2, name: 'Adam', optional: 'foo' },
      { id: 1, name: 'Charlie', optional: null },
    ]);
  });

  it('should sort by name asc id asc', function () {
    const result = sort(users, ['name', 'id']);

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 2, name: 'Adam', optional: 'foo' },
      { id: 4, name: 'Adam' },
      { id: 3, name: 'Bob', optional: 'bar' },
      { id: 1, name: 'Charlie', optional: null },
    ]);
  });

  it('should sort by name asc id desc', function () {
    const result = sort(users, ['name', 'id'], { id: true });

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 4, name: 'Adam' },
      { id: 2, name: 'Adam', optional: 'foo' },
      { id: 3, name: 'Bob', optional: 'bar' },
      { id: 1, name: 'Charlie', optional: null },
    ]);
  });

  it('should sort by optional asc name desc', function () {
    const result = sort(users, ['optional', 'name'], { name: true });

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 1, name: 'Charlie', optional: null },
      { id: 4, name: 'Adam' },
      { id: 3, name: 'Bob', optional: 'bar' },
      { id: 2, name: 'Adam', optional: 'foo' },
    ]);
  });
});
