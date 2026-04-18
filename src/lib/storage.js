export function getStorage(key, fallback = null) {
  if (typeof window === "undefined") return fallback;

  try {
    const value = localStorage.getItem(key);

    if (value === null) return fallback;

    return JSON.parse(value);
  } catch (error) {
    console.error(`Storage read error: ${key}`, error);
    return fallback;
  }
}

export function setStorage(key, value) {
  if (typeof window === "undefined") return;

  try {
    localStorage.setItem(
      key,
      JSON.stringify(value)
    );
  } catch (error) {
    console.error(`Storage write error: ${key}`, error);
  }
}

export function removeStorage(key) {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Storage remove error: ${key}`, error);
  }
}

export function clearStorage() {
  if (typeof window === "undefined") return;

  try {
    localStorage.clear();
  } catch (error) {
    console.error("Storage clear error", error);
  }
}