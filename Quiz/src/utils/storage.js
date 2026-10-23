const KEY = "quizhub-state-v1";

export const loadState = (fallback) => {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? { ...fallback, ...JSON.parse(raw) } : fallback;
  } catch {
    return fallback;
  }
};

export const saveState = (state) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* ignore */
  }
};