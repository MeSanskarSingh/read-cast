export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function truncate(text = "", length = 60) {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trim()}...`;
}

export function slugToTitle(slug = "") {
  return slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() +
        word.slice(1)
    )
    .join(" ");
}

export function formatPercent(value = 0) {
  const safe = clamp(Number(value) || 0, 0, 100);
  return `${safe}%`;
}

export function joinClasses(...classes) {
  return classes.filter(Boolean).join(" ");
}