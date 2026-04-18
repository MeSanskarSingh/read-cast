import fonts from "@/utils/fonts";
import themes from "@/utils/themes";

export const DEFAULT_READER_SETTINGS = {
  fontSize: 20,
  selectedFont: "Inter",
  theme: "dark",
  lineHeight: 1.8,
};

export const FONT_SIZE_LIMITS = {
  min: 14,
  max: 40,
  step: 2,
};

export const AVAILABLE_FONTS = fonts.map(
  (font) => font.value
);

export const AVAILABLE_THEMES = themes.map(
  (theme) => theme.key
);

export function isValidTheme(value) {
  return AVAILABLE_THEMES.includes(value);
}

export function isValidFont(value) {
  return AVAILABLE_FONTS.includes(value);
}

export function sanitizeFontSize(value) {
  const size = Number(value) || 20;

  if (size < FONT_SIZE_LIMITS.min)
    return FONT_SIZE_LIMITS.min;

  if (size > FONT_SIZE_LIMITS.max)
    return FONT_SIZE_LIMITS.max;

  return size;
}