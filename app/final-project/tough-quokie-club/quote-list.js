import Quote from "./quote";
import { useState } from "react";

export default function QuoteList({ quotes }) {
  const [sortBy, setSortBy] = useState("author");

  let sortedQuotes = [...quotes];

  // Sorting by Author
  if (sortBy === "author") {
    sortedQuotes.sort((a, b) => a.author.localeCompare(b.author));
  }

  // Sorting by Category
  else if (sortBy === "category") {
    sortedQuotes.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <main className="p-5">
      <div className="flex flex-row gap-4 justify-center text-lg font-sans font-semibold text-white">
        <p className="text-slate-700">Sort by:</p>

        <button
          onClick={() => {
            setSortBy("author");
          }}
          style={{ backgroundColor: sortBy === "author" ? "#ec4899" : " " }}
          className="bg-pink-400 pb-2 w-40 h-8 shadow-md rounded-md"
        >
          Author
        </button>

        <button
          onClick={() => {
            setSortBy("category");
          }}
          style={{ backgroundColor: sortBy === "category" ? "#0059b3" : " " }}
          className="bg-pink-400 pb-2 w-40 h-8 shadow-md rounded-md"
        >
          Category
        </button>
      </div>

      {sortedQuotes.map((quote) => (
        <Quote
          key={quote.id}
          id={quote.id}
          content={quote.content}
          author={quote.author}
          category={quote.category}
        />
      ))}
    </main>
  );
}
