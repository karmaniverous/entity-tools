import { expectAssignable } from 'tsd';

import type {
  EncodeDecodeAgreement,
  EncodeDecodeMismatchError,
  MissingEncodeError,
} from '../src/defineTranscodes';

// Mismatch error branding: encode/decode disagree
type MismatchAgreement = EncodeDecodeAgreement<{
  bad: {
    encode: (v: number) => string;
    decode: (s: string) => boolean;
  };
}>;

expectAssignable<EncodeDecodeMismatchError<'bad', number, boolean>>({
  __error__: 'EncodeDecodeMismatch',
  key: 'bad',
  encodeParam: 1 as number,
  decodeReturn: true as boolean,
});
expectAssignable<MismatchAgreement['bad']>({
  __error__: 'EncodeDecodeMismatch',
  key: 'bad',
  encodeParam: 1 as number,
  decodeReturn: true as boolean,
});

// Missing encode function branding (agreement type only; builder boundary blocks this)
type MissingEncodeAgreement = EncodeDecodeAgreement<{
  missing: {
    // no encode here on purpose
    decode: (s: string) => number;
  };
}>;
expectAssignable<MissingEncodeError<'missing'>>({
  __error__: 'MissingEncode',
  key: 'missing',
});
expectAssignable<MissingEncodeAgreement['missing']>({
  __error__: 'MissingEncode',
  key: 'missing',
});

// Positive: equality passes and returns original shape
type GoodAgreement = EncodeDecodeAgreement<{
  good: { encode: (v: string) => string; decode: (s: string) => string };
}>;
expectAssignable<GoodAgreement['good']>({
  encode: (_: string) => '',
  decode: (_: string) => '',
});

