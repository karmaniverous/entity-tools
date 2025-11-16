import type { Exactify } from './Exactify';
import type { TranscodeRegistry } from './TranscodeRegistry';

/**
 * Transcode name literal union for a registry.
 */
export type TranscodeName<TR extends TranscodeRegistry> = keyof Exactify<TR> &
  string;
