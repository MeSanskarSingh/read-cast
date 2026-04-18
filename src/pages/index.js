import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import BookGrid from "@/components/BookGrid";
import books from "@/data/books";

export default function HomePage() {
  return (
    <Layout>
      <Navbar />

      {/* Hero Section */}
      <section className="mb-10 rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-slate-900 p-8">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
          Personal Reading Platform
        </p>

        <h1 className="mb-3 text-4xl font-bold tracking-tight md:text-5xl">
          Welcome to Libris
        </h1>

        <p className="max-w-2xl text-muted">
          Read your EPUB library anywhere — optimized for TV screens, remote navigation,
          custom fonts, dark themes, and distraction-free reading.
        </p>
      </section>

      <BookGrid books={books} />
    </Layout>
  );
}