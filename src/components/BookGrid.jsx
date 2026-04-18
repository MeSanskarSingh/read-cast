import BookCard from "./BookCard";

export default function BookGrid({ books = [] }) {
  if (!books.length) {
    return (
      <section className="section-gap">
        <div className="card-ui flex min-h-[260px] flex-col items-center justify-center p-8 text-center">
          <h2 className="heading-lg">No Books Found</h2>
          <p className="mt-2 text-muted">
            Add EPUB files and metadata to your library to begin reading.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-gap">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="heading-lg">Your Library</h2>
          <p className="mt-1 text-muted">
            {books.length} {books.length === 1 ? "book" : "books"} available
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {books.map((book) => (
          <BookCard key={book.slug} book={book} />
        ))}
      </div>
    </section>
  );
}