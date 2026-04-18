export default function Layout({ children, className = "" }) {
  return (
    <main className={`min-h-screen bg-[var(--background)] text-[var(--foreground)] ${className}`}>
      <div className="container-app">
        {children}
      </div>
    </main>
  );
}