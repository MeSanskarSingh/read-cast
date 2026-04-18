import { useRouter } from "next/router";
import { useMemo } from "react";
import Link from "next/link";

import books from "@/data/books";

import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Reader from "@/components/Reader";
import ReaderControls from "@/components/ReaderControls";
import FontSelector from "@/components/FontSelector";
import ThemeSelector from "@/components/ThemeSelector";

import useLocalStorage from "@/hooks/useLocalStorage";

import { HiOutlineArrowLeft } from "react-icons/hi2";

export default function BookReaderPage() {
  const router = useRouter();
  const { slug } = router.query;

  const book = useMemo(
    () => books.find((item) => item.slug === slug),
    [slug]
  );

  const [fontSize, setFontSize] = useLocalStorage(
    "reader-font-size",
    20
  );

  const [selectedFont, setSelectedFont] = useLocalStorage(
    "reader-font-family",
    "Inter"
  );

  const [theme, setTheme] = useLocalStorage(
    "reader-theme",
    "dark"
  );

  if (!router.isReady) {
    return (
      <Layout>
        <Navbar />
        <div className="container-app py-10">
          <p className="text-muted">Loading book...</p>
        </div>
      </Layout>
    );
  }

  if (!book) {
    return (
      <Layout>
        <Navbar />
        <div className="container-app py-10">
          <h1 className="mb-2 text-2xl font-bold">Book not found</h1>
          <p className="mb-6 text-muted">
            The requested book does not exist in your library.
          </p>

          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2"
          >
            <HiOutlineArrowLeft size={18} />
            Back to Library
          </Link>
        </div>
      </Layout>
    );
  }

  const goPrev = () =>
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowLeft" })
    );

  const goNext = () =>
    window.dispatchEvent(
      new KeyboardEvent("keydown", { key: "ArrowRight" })
    );

  return (
    <Layout>
      <Navbar />

      <section className="mb-5 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
        <Link
          href="/"
          className="mb-4 inline-flex items-center gap-2 text-sm text-muted hover:text-white"
        >
          <HiOutlineArrowLeft size={18} />
          Back
        </Link>

        <h1 className="text-2xl font-bold">{book.title}</h1>
        <p className="mt-1 text-muted">{book.author}</p>
      </section>

      <FontSelector
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
      />

      <ThemeSelector
        theme={theme}
        setTheme={setTheme}
      />

      <ReaderControls
        fontSize={fontSize}
        setFontSize={setFontSize}
        theme={theme}
        setTheme={setTheme}
        onPrev={goPrev}
        onNext={goNext}
      />

      <Reader
        bookUrl={book.file}
        selectedFont={selectedFont}
        fontSize={fontSize}
        theme={theme}
      />
    </Layout>
  );
}