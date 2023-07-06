import { FeatureFlags } from '@/shared/types/featureFlags';
import { getFeatureFlags } from './setGetFeatures';

interface ToggleFeaturesOptions<T> {
    name: keyof FeatureFlags;
    on: () => T;
    off: () => T;
}

export function toggleFeatures<T>(props: ToggleFeaturesOptions<T>): T {
  const {
    off,
    on,
    name,
  } = props;

  if (getFeatureFlags(name)) {
    return on();
  }

  return off();
}
