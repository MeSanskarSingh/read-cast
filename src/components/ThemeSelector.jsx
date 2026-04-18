import {
  HiOutlineMoon,
  HiOutlineSun,
  HiOutlineSwatch,
} from "react-icons/hi2";

import themes from "@/utils/themes";

const iconMap = {
  dark: HiOutlineMoon,
  light: HiOutlineSun,
  sepia: HiOutlineSwatch,
};

export default function ThemeSelector({
  theme,
  setTheme,
}) {
  return (
    <div className="mb-4 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-3">
      <p className="mb-3 text-sm font-medium text-muted">
        Reading Theme
      </p>

      <div className="flex flex-wrap gap-2">
        {themes.map((item) => {
          const Icon = iconMap[item.key];
          const active = theme === item.key;

          return (
            <button
              key={item.key}
              type="button"
              onClick={() => setTheme(item.key)}
              className={`rounded-xl px-4 py-3 text-left transition ${
                active
                  ? "bg-[var(--accent)] text-white"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              <div className="flex items-center gap-2">
                <Icon size={18} />
                <span className="font-medium">
                  {item.label}
                </span>
              </div>

              <p className="mt-1 text-xs opacity-80">
                {item.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}