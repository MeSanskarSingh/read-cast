export const EPUB_RENDER_OPTIONS = {
  width: "100%",
  height: "100%",
  flow: "paginated",
  spread: "none",
  allowScriptedContent: false,
};

export const EPUB_STYLE_DEFAULTS = {
  lineHeight: "1.8",
  padding: "24px",
};

export function getThemeColors(theme = "dark") {
  switch (theme) {
    case "light":
      return {
        background: "#f8fafc",
        color: "#111827",
      };

    case "sepia":
      return {
        background: "#f5ecd9",
        color: "#3f2f1f",
      };

    case "dark":
    default:
      return {
        background: "#0f172a",
        color: "#f8fafc",
      };
  }
}

export function buildReaderTheme({
  selectedFont = "Inter",
  fontSize = 20,
  theme = "dark",
}) {
  const { background, color } =
    getThemeColors(theme);

  return {
    body: {
      "font-family": selectedFont,
      "font-size": `${fontSize}px`,
      background,
      color,
      "line-height":
        EPUB_STYLE_DEFAULTS.lineHeight,
      padding: EPUB_STYLE_DEFAULTS.padding,
    },

    p: {
      "margin-bottom": "1em",
    },

    h1: {
      "margin-bottom": "0.8em",
    },

    h2: {
      "margin-bottom": "0.7em",
    },

    img: {
      "max-width": "100%",
      height: "auto",
    },
  };
}