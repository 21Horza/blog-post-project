import { FeatureFlags } from '@/shared/types/featureFlags';

// FEATURES DON'T CHANGE DURING SESSION, THEY HAS TO BE MADE REACTIVE!!!
let featureFlags: FeatureFlags = {};

// context
// state
// reload pgae
// crutch
export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlag(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}

export function getAllFeatureFlags() {
  return featureFlags;
}
