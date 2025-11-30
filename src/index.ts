/**
 * @module entity-tools
 */
export { conditionalize } from './conditionalize';
export type { ConditionalProperty } from './ConditionalProperty';
export type { DefaultTranscodeRegistry } from './DefaultTranscodeRegistry';
export { defaultTranscodes } from './defaultTranscodes';
export { defineSortOrder } from './defineSortOrder';
export type { Entity } from './Entity';
export type { EntityMap } from './EntityMap';
export type { Exactify } from './Exactify';
export type {
  EntityKeys,
  EntityMapValues,
  EntityValue,
  FlattenEntityMap,
} from './FlattenEntityMap';
export type { MakeOptional } from './MakeOptional';
export type { MakeRequired } from './MakeRequired';
export type { MakeUpdatable } from './MakeUpdatable';
export type { AllDisjoint, MutuallyExclusive } from './MutuallyExclusive';
export { isNil, type Nil } from './Nil';
export type { NotNever } from './NotNever';
export type { PropertiesNotOfType } from './PropertiesNotOfType';
export type { PropertiesOfType } from './PropertiesOfType';
export type { ReplaceKey } from './ReplaceKey';
export type { ReplaceKeys } from './ReplaceKeys';
export { sort } from './sort';
export type { SortOrder } from './SortOrder';
export type { TranscodableProperties } from './TranscodableProperties';
export type { TranscodeRegistry } from './TranscodeRegistry';
export type { Transcodes } from './Transcodes';
export type { UntranscodableProperties } from './UntranscodableProperties';
export { updateItem } from './updateItem';
export type { WithRequiredAndNonNullable } from './WithRequiredAndNonNullable';
// Transcoding helpers and names
export type { EncodeDecodeAgreement } from './defineTranscodes';
export type { EncodeParam } from './defineTranscodes';
export type { DecodeReturn } from './defineTranscodes';
export type {
  EncodeDecodeMismatchError,
  MissingDecodeError,
  MissingEncodeError,
} from './defineTranscodes';
export { defineTranscodes } from './defineTranscodes';
export type { TranscodedType } from './TranscodedType';
export type { TranscodeName } from './TranscodeName';
export type { Transcoder } from './Transcoder';
export type { TranscodeRegistryFrom } from './TranscodeRegistryFrom';
// KV helpers
export { decodePairs } from './kv/decodePairs';
export { encodePairs } from './kv/encodePairs';
// Sharding math helpers
export { enumerateShardSuffixes } from './sharding/enumerateShardSuffixes';
export { hashString } from './sharding/hashString';
export { shardSuffixFromHash } from './sharding/shardSuffixFromHash';
