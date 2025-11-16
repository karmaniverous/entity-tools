import { expectAssignable } from 'tsd';

import { defaultTranscodes } from '../src/defaultTranscodes';
import type { DefaultTranscodeRegistry } from '../src/DefaultTranscodeRegistry';
import type { Transcodes } from '../src/Transcodes';

// defaultTranscodes conforms to the canonical default registry
expectAssignable<Transcodes<DefaultTranscodeRegistry>>(defaultTranscodes);

