import Link from "next/link";
import { HiOutlineBookOpen, HiOutlineClock } from "react-icons/hi2";

export default function BookCard({ book }) {
  const {
    slug,
    title,
    author,
    cover,
    progress = 0,
  } = book;

  return (
    <Link
      href={`/book/${slug}`}
      className="group card-ui block overflow-hidden p-3 transition duration-200 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Cover */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800">
        <img
          src={cover}
          alt={title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3">
          <div className="flex items-center gap-2 text-sm text-white">
            <HiOutlineBookOpen size={16} />
            Read Now
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="mt-4 space-y-1">
        <h3 className="line-clamp-1 text-base font-semibold">{title}</h3>
        <p className="line-clamp-1 text-sm text-muted">{author}</p>
      </div>

      {/* Progress */}
      <div className="mt-4">
        <div className="mb-1 flex items-center justify-between text-xs text-muted">
          <span className="flex items-center gap-1">
            <HiOutlineClock size={14} />
            Progress
          </span>
          <span>{progress}%</span>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-slate-700">
          <div
            className="h-full rounded-full bg-[var(--accent)] transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Link>
  );
}