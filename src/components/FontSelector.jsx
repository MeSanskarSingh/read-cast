import fonts from "@/utils/fonts";

export default function FontSelector({
  selectedFont,
  setSelectedFont,
}) {
  return (
    <div className="mb-4 flex flex-wrap items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3">
      <label
        htmlFor="font-select"
        className="text-sm font-medium text-muted"
      >
        Font
      </label>

      <select
        id="font-select"
        value={selectedFont}
        onChange={(e) => setSelectedFont(e.target.value)}
        className="min-w-[240px]"
      >
        {fonts.map((font) => (
          <option
            key={font.value}
            value={font.value}
            style={{ fontFamily: font.value }}
          >
            {font.label}
          </option>
        ))}
      </select>

      <span
        className="rounded-xl border border-[var(--border)] px-4 py-2 text-sm"
        style={{ fontFamily: selectedFont }}
      >
        The quick brown fox jumps over the lazy dog
      </span>
    </div>
  );
}