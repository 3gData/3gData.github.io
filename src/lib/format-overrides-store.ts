import { useSyncExternalStore } from "react";

import {
  EMPTY_FORMAT_OVERRIDE_BUNDLE,
  type FormatOverrideBundle,
} from "./format-overrides";

const listeners = new Set<() => void>();
let currentBundle: FormatOverrideBundle = EMPTY_FORMAT_OVERRIDE_BUNDLE;

export function getFormatOverrideBundle(): FormatOverrideBundle {
  return currentBundle;
}

export function subscribeFormatOverrideBundle(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function useFormatOverrideBundle(): FormatOverrideBundle {
  return useSyncExternalStore(
    subscribeFormatOverrideBundle,
    getFormatOverrideBundle,
    getFormatOverrideBundle
  );
}
