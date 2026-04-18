export default function Loader({
  text = "Loading...",
  fullScreen = false,
}) {
  const wrapperClass = fullScreen
    ? "fixed inset-0 z-50 flex items-center justify-center bg-[var(--background)]"
    : "flex items-center justify-center py-10";

  return (
    <div className={wrapperClass}>
      <div className="flex flex-col items-center gap-4">
        <div className="loader-spin" />
        <p className="text-sm text-muted">
          {text}
        </p>
      </div>
    </div>
  );
}