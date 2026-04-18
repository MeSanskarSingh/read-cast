import Link from "next/link";
import {
  HiOutlineBookOpen,
  HiOutlineHome,
  HiOutlineMagnifyingGlass,
  HiOutlineXMark,
} from "react-icons/hi2";

export default function Navbar({
  search = "",
  setSearch = null,
}) {
  const isSearchEnabled = typeof setSearch === "function";

  return (
    <header className="sticky top-0 z-50 mb-8 border-b border-[var(--border)] bg-[rgba(11,15,25,0.85)] backdrop-blur-md">
      <div className="container-app flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-1 py-1"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--accent)] text-white shadow-lg">
            <HiOutlineBookOpen size={22} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Libris
            </h1>
            <p className="text-sm text-muted">
              Your Personal Library
            </p>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          <Link
            href="/"
            className="flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-[var(--card)]"
          >
            <HiOutlineHome size={20} />
            Home
          </Link>

          {isSearchEnabled && (
            <div className="flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--card)] px-3 py-2">
              <HiOutlineMagnifyingGlass
                size={18}
                className="text-slate-400"
              />

              <input
                type="text"
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search books..."
                className="min-w-[220px] border-none bg-transparent p-0 outline-none"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  className="rounded-lg p-1 hover:bg-slate-700"
                >
                  <HiOutlineXMark size={18} />
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}