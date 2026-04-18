import { useEffect, useRef, useState } from "react";
import ePub from "epubjs";

export default function Reader({
  bookUrl,
  selectedFont = "Inter",
  fontSize = 20,
  theme = "dark",
}) {
  const viewerRef = useRef(null);
  const bookRef = useRef(null);
  const renditionRef = useRef(null);

  const [loading, setLoading] = useState(true);

  const progressKey = `reader-progress-${bookUrl}`;

  /* Init Book */
  useEffect(() => {
    if (!viewerRef.current || !bookUrl) return;

    const book = ePub(bookUrl);

    const rendition = book.renderTo(viewerRef.current, {
      width: "100%",
      height: "100%",
      flow: "paginated",
      spread: "none",
    });

    bookRef.current = book;
    renditionRef.current = rendition;

    const savedLocation =
      typeof window !== "undefined"
        ? localStorage.getItem(progressKey)
        : null;

    rendition.display(savedLocation || undefined);

    rendition.on("rendered", () => {
      setLoading(false);
    });

    rendition.on("relocated", (location) => {
      if (typeof window !== "undefined") {
        localStorage.setItem(
          progressKey,
          location.start.cfi
        );
      }
    });

    return () => {
      rendition.destroy();
      book.destroy();
    };
  }, [bookUrl, progressKey]);

  /* Apply Reader Theme */
  useEffect(() => {
    if (!renditionRef.current) return;

    const background =
      theme === "light"
        ? "#f8fafc"
        : theme === "sepia"
        ? "#f5ecd9"
        : "#0f172a";

    const color =
      theme === "light"
        ? "#111827"
        : theme === "sepia"
        ? "#3f2f1f"
        : "#f8fafc";

    renditionRef.current.themes.default({
      body: {
        "font-family": selectedFont,
        "font-size": `${fontSize}px`,
        color,
        background,
        "line-height": "1.8",
        padding: "24px",
      },
      p: {
        "margin-bottom": "1em",
      },
    });
  }, [selectedFont, fontSize, theme]);

  /* Keyboard Navigation */
  useEffect(() => {
    const handleKeys = (e) => {
      if (!renditionRef.current) return;

      if (e.key === "ArrowRight") {
        renditionRef.current.next();
      }

      if (e.key === "ArrowLeft") {
        renditionRef.current.prev();
      }
    };

    window.addEventListener("keydown", handleKeys);

    return () =>
      window.removeEventListener("keydown", handleKeys);
  }, []);

  return (
    <div className="relative h-[calc(100vh-140px)] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)]">
      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-[var(--background)]">
          <div className="loader-spin" />
        </div>
      )}

      <div ref={viewerRef} className="h-full w-full" />
    </div>
  );
}