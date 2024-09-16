import { expect } from 'chai';

import { defaultTranscodes } from './defaultTranscodes';

describe('defaultTranscodes', function () {
  describe('bigint20', function () {
    describe('encode', function () {
      it('should encode valid bigint20', function () {
        expect(
          defaultTranscodes.bigint20.encode(12345678901234567890n),
        ).to.equal('p12345678901234567890');
      });

      it('should encode short bigint20', function () {
        expect(
          defaultTranscodes.bigint20.encode(1234567890123456789n),
        ).to.equal('p01234567890123456789');
      });

      it('should encode negative bigint20', function () {
        expect(
          defaultTranscodes.bigint20.encode(-1234567890123456789n),
        ).to.equal('n01234567890123456789');
      });

      it('should fail on long bigint20', function () {
        expect(() =>
          defaultTranscodes.bigint20.encode(-123456789012345678901n),
        ).to.throw('invalid bigint20');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.bigint20.encode('foo')).to.throw(
          'invalid bigint20',
        );
      });
    });

    describe('decode', function () {
      it('should decode valid bigint20', function () {
        expect(
          defaultTranscodes.bigint20.decode('p12345678901234567890'),
        ).to.equal(12345678901234567890n);
      });

      it('should decode short bigint20', function () {
        expect(
          defaultTranscodes.bigint20.decode('p01234567890123456789'),
        ).to.equal(1234567890123456789n);
      });

      it('should decode negative bigint20', function () {
        expect(
          defaultTranscodes.bigint20.decode('n01234567890123456789'),
        ).to.equal(-1234567890123456789n);
      });

      it('should fail on long bigint20', function () {
        expect(() =>
          defaultTranscodes.bigint20.decode('p123456789012345678901'),
        ).to.throw('invalid encoded bigint20');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.bigint20.decode(42)).to.throw(
          'invalid encoded bigint20',
        );
      });
    });
  });

  describe('boolean', function () {
    describe('encode', function () {
      it('should encode valid boolean', function () {
        expect(defaultTranscodes.boolean.encode(true)).to.equal('true');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.boolean.encode('foo')).to.throw(
          'invalid boolean',
        );
      });
    });

    describe('decode', function () {
      it('should decode valid boolean', function () {
        expect(defaultTranscodes.boolean.decode('true')).to.equal(true);
      });

      it('should fail on invalid boolean', function () {
        expect(() => defaultTranscodes.boolean.decode('foo')).to.throw(
          'invalid encoded boolean',
        );
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.boolean.decode(42)).to.throw(
          'invalid encoded boolean',
        );
      });
    });
  });

  describe('fix6', function () {
    describe('encode', function () {
      it('should encode valid fix6', function () {
        expect(defaultTranscodes.fix6.encode(1234567890.123456)).to.equal(
          'p1234567890.123456',
        );
      });

      it('should encode short fix6', function () {
        expect(defaultTranscodes.fix6.encode(123.456)).to.equal(
          'p0000000123.456000',
        );
      });

      it('should encode negative fix6', function () {
        expect(defaultTranscodes.fix6.encode(-123.456)).to.equal(
          'n0000000123.456000',
        );
      });

      it('should fail on long fix6', function () {
        expect(() =>
          defaultTranscodes.fix6.encode(-12345678901.23456),
        ).to.throw('invalid fix6');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.fix6.encode('foo')).to.throw(
          'invalid fix6',
        );
      });
    });

    describe('decode', function () {
      it('should decode valid fix6', function () {
        expect(defaultTranscodes.fix6.decode('p1234567890.123456')).to.equal(
          1234567890.123456,
        );
      });

      it('should decode short fix6', function () {
        expect(defaultTranscodes.fix6.decode('p0000000123.456000')).to.equal(
          123.456,
        );
      });

      it('should decode negative fix6', function () {
        expect(defaultTranscodes.fix6.decode('n0000000123.456000')).to.equal(
          -123.456,
        );
      });

      it('should fail on long fix6', function () {
        expect(() =>
          defaultTranscodes.fix6.decode('p12345678901.23456'),
        ).to.throw('invalid encoded fix6');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.fix6.decode(42)).to.throw(
          'invalid encoded fix6',
        );
      });
    });
  });

  describe('int', function () {
    describe('encode', function () {
      it('should encode valid int', function () {
        expect(defaultTranscodes.int.encode(1234567890123456)).to.equal(
          'p1234567890123456',
        );
      });

      it('should encode short int', function () {
        expect(defaultTranscodes.int.encode(123456)).to.equal(
          'p0000000000123456',
        );
      });

      it('should encode negative int', function () {
        expect(defaultTranscodes.int.encode(-123456)).to.equal(
          'n0000000000123456',
        );
      });

      it('should fail on non-int', function () {
        expect(() => defaultTranscodes.int.encode(-12345678901.23456)).to.throw(
          'invalid int',
        );
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.int.encode('foo')).to.throw(
          'invalid int',
        );
      });
    });

    describe('decode', function () {
      it('should decode valid int', function () {
        expect(defaultTranscodes.int.decode('p1234567890123456')).to.equal(
          1234567890123456,
        );
      });

      it('should decode short int', function () {
        expect(defaultTranscodes.int.decode('p0000000000123456')).to.equal(
          123456,
        );
      });

      it('should decode negative int', function () {
        expect(defaultTranscodes.int.decode('n0000000000123456')).to.equal(
          -123456,
        );
      });

      it('should fail on long int', function () {
        expect(() =>
          defaultTranscodes.int.decode('p12345678901234567'),
        ).to.throw('invalid encoded int');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.int.decode(42)).to.throw(
          'invalid encoded int',
        );
      });
    });
  });

  describe('string', function () {
    describe('encode', function () {
      it('should encode valid string', function () {
        expect(defaultTranscodes.string.encode('foo')).to.equal('foo');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.string.encode(42)).to.throw(
          'invalid string',
        );
      });
    });

    describe('decode', function () {
      it('should decode valid string', function () {
        expect(defaultTranscodes.string.decode('foo')).to.equal('foo');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.string.decode(42)).to.throw(
          'invalid encoded string',
        );
      });
    });
  });

  describe('timestamp', function () {
    describe('encode', function () {
      it('should encode valid timestamp', function () {
        expect(defaultTranscodes.timestamp.encode(1234567890123)).to.equal(
          '1234567890123',
        );
      });

      it('should encode short timestamp', function () {
        expect(defaultTranscodes.timestamp.encode(123456)).to.equal(
          '0000000123456',
        );
      });

      it('should fail on negative timestamp', function () {
        expect(() => defaultTranscodes.timestamp.encode(-123456)).to.throw(
          'invalid timestamp',
        );
      });

      it('should fail on non-int', function () {
        expect(() =>
          defaultTranscodes.timestamp.encode(-12345678901.23456),
        ).to.throw('invalid timestamp');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.timestamp.encode('foo')).to.throw(
          'invalid timestamp',
        );
      });
    });

    describe('decode', function () {
      it('should decode valid timestamp', function () {
        expect(defaultTranscodes.timestamp.decode('1234567890123')).to.equal(
          1234567890123,
        );
      });

      it('should decode short timestamp', function () {
        expect(defaultTranscodes.timestamp.decode('0000000123456')).to.equal(
          123456,
        );
      });

      it('should fail on long timestamp', function () {
        expect(() =>
          defaultTranscodes.timestamp.decode('12345678901234567'),
        ).to.throw('invalid encoded timestamp');
      });

      it('should fail on invalid type', function () {
        // @ts-expect-error invalid type
        expect(() => defaultTranscodes.timestamp.decode(42)).to.throw(
          'invalid encoded timestamp',
        );
      });
    });
  });
});
