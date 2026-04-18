import { HiOutlineXMark, HiOutlineBars3BottomLeft } from "react-icons/hi2";

export default function ChapterDrawer({
  isOpen,
  setIsOpen,
  chapters = [],
  onSelectChapter,
}) {
  return (
    <>
      {/* Open Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed left-4 top-24 z-40 flex items-center gap-2 rounded-xl bg-[var(--accent)] px-4 py-3 text-white shadow-lg"
        >
          <HiOutlineBars3BottomLeft size={20} />
          Chapters
        </button>
      )}

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[340px] transform border-r border-[var(--border)] bg-[var(--background)] p-4 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Chapters</h2>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="rounded-xl p-2 hover:bg-[var(--card)]"
          >
            <HiOutlineXMark size={22} />
          </button>
        </div>

        {/* Chapter List */}
        <div className="space-y-2 overflow-y-auto pr-1">
          {chapters.length === 0 ? (
            <p className="text-sm text-muted">No chapters found.</p>
          ) : (
            chapters.map((chapter, index) => (
              <button
                key={chapter.href || index}
                type="button"
                onClick={() => {
                  onSelectChapter(chapter);
                  setIsOpen(false);
                }}
                className="block w-full rounded-xl px-4 py-3 text-left text-sm transition hover:bg-[var(--card)]"
              >
                {chapter.label || `Chapter ${index + 1}`}
              </button>
            ))
          )}
        </div>
      </aside>
    </>
  );
}