# Development plan

## Next up (in priority order)

 - Run `npm run docs` and confirm 0 warnings.
 - Keep TypeDoc-facing TSDoc updated when exported types change.

## Completed

- Added missing TSDoc to eliminate TypeDoc warnings (encode/decode fields and branded error shapes).
- Fixed `TranscodeRegistryFrom` constraint so `defineTranscodes` can typecheck and TypeDoc can build.