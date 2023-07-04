import { FeatureFlags } from '@/shared/types/featureFlags';

// FEATURES DON'T CHANGE DURING A SESSION, NO NEED TO MAKE THEM REACTIVE!!!
let featureFlags: FeatureFlags;

export function setFeatureFlags(newFeatureFlags?: FeatureFlags) {
  if (newFeatureFlags) {
    featureFlags = newFeatureFlags;
  }
}

export function getFeatureFlags(flag: keyof FeatureFlags) {
  return featureFlags[flag];
}
