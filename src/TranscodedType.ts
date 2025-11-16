import type { TranscodeName } from './TranscodeName';
import type { TranscodeRegistry } from './TranscodeRegistry';

/**
 + Extracts the value type for a specific transcode name.
 */
export type TranscodedType<
  TR extends TranscodeRegistry,
  TN extends TranscodeName<TR>,
> = TR[TN];
