/**
 * tsd harness that points the CLI at our type tests under tests/types.
 * The tsd CLI defaults to the "test-d/" directory by convention.
 */
import '../tests/types/MutuallyExclusive.test-d.ts';

// Ensure this file is treated as a module.
export {};
