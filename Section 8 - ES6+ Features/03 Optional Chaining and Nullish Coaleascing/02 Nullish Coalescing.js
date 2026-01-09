// Nullish Coalescing (`??`):** Provides a default value **only** when the left side is **`null` or `undefined`** (unlike `||`, which triggers on any falsy value like `0` or `''`).

const userSettings = { volume: 0, theme: null };

// Using || (incorrectly uses default for 0):
const audioVolume_OR = userSettings.volume || 10; // Output: 10 (because 0 is falsy)

// Using ?? (correctly uses 0):
const audioVolume_NULLISH = userSettings.volume ?? 10; // Output: 0
const theme_NULLISH = userSettings.theme ?? 'dark';    // Output: dark