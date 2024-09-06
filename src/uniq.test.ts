import { expect } from 'chai';
import { omit } from 'radash';

import { users } from './types.test';
import { uniq } from './uniq';

describe('dedupe', function () {
  it('will not dedupe on data', function () {
    // @ts-expect-error 'data' is not indexable.
    uniq(users, ['data']);

    expect(true).to.be.true;
  });

  it('empty index returns first item', function () {
    const result = uniq(users);

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 2, name: 'Adam', optional: 'foo' },
    ]);
  });

  it('dedupes on name', function () {
    const result = uniq(users, ['name']);

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 2, name: 'Adam', optional: 'foo' },
      { id: 3, name: 'Bob', optional: 'bar' },
      { id: 1, name: 'Charlie', optional: null },
    ]);
  });

  it('dedupes on optional', function () {
    const result = uniq(users, ['optional']);

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 2, name: 'Adam', optional: 'foo' },
      { id: 3, name: 'Bob', optional: 'bar' },
      { id: 1, name: 'Charlie', optional: null },
    ]);
  });

  it('dedupes on name & optional', function () {
    const result = uniq(users, ['name', 'optional']);

    expect(result.map((u) => omit(u, ['data']))).to.deep.equal([
      { id: 2, name: 'Adam', optional: 'foo' },
      { id: 3, name: 'Bob', optional: 'bar' },
      { id: 1, name: 'Charlie', optional: null },
      { id: 4, name: 'Adam' },
    ]);
  });
});
