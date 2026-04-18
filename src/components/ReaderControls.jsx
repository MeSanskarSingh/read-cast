import {
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
  HiOutlineMinus,
  HiOutlinePlus,
  HiOutlineMoon,
  HiOutlineSun,
} from "react-icons/hi2";

export default function ReaderControls({
  fontSize,
  setFontSize,
  theme,
  setTheme,
  onPrev,
  onNext,
}) {
  const cycleTheme = () => {
    if (theme === "dark") return setTheme("light");
    if (theme === "light") return setTheme("sepia");
    setTheme("dark");
  };

  const themeIcon =
    theme === "dark" ? (
      <HiOutlineMoon size={20} />
    ) : (
      <HiOutlineSun size={20} />
    );

  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3">
      {/* Page Navigation */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          className="btn-secondary flex items-center gap-2"
        >
          <HiOutlineChevronLeft size={18} />
          Prev
        </button>

        <button
          type="button"
          onClick={onNext}
          className="btn-secondary flex items-center gap-2"
        >
          Next
          <HiOutlineChevronRight size={18} />
        </button>
      </div>

      {/* Reading Controls */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setFontSize((prev) => Math.max(14, prev - 2))}
          className="btn-secondary"
        >
          <HiOutlineMinus size={18} />
        </button>

        <span className="min-w-[72px] text-center text-sm text-muted">
          {fontSize}px
        </span>

        <button
          type="button"
          onClick={() => setFontSize((prev) => Math.min(40, prev + 2))}
          className="btn-secondary"
        >
          <HiOutlinePlus size={18} />
        </button>

        <button
          type="button"
          onClick={cycleTheme}
          className="btn-primary flex items-center gap-2"
        >
          {themeIcon}
          {theme}
        </button>
      </div>
    </div>
  );
}