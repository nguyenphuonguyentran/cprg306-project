"use client";

import { useState } from "react";
import QuoteList from "./quote-list";
import NewQuote from "./new-quote";
import quotesData from "./quotes.json";
import Link from "next/link";
import Image from "next/image";
import RandomQuote from "./random-quote";

export default function Page() {
  const [quotes, setQuotes] = useState(quotesData);

  const handleAddQuote = (quote) => {
    setQuotes([...quotes, quote]);
  };

  return (
    <main className="flex flex-col bg-gradient-to-br from-white to-pink-300 w-full h-full bg-cover bg-center items-center">
      <Image
        src="/toughlogo.png"
        alt="Logo of website Tough Quokie Club"
        width={200}
        height={200}
      />
      <h1 className="flex text-5xl font-semibold font-serif text-pink-500 justify-center items-center">
        Quote Space
      </h1>

      <div className="flex items-center">
        <div className="justify-center items-center">
          <NewQuote onAddQuote={handleAddQuote} />
          <QuoteList quotes={quotes} />
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center pt-8 pb-8 gap-3 font-semibold font-sans">
        <div className="flex flex-col items-center justify-center">
          <RandomQuote />
        </div>
        <div className="flex flex-row gap-3">
          <p className="p-3 bg-white rounded-full text-slate-500"> Visit 📍 </p>

          <button>
            <Link
              href="/final-project"
              className="flex no-underline hover:bg-pink-500 hover:text-white  font-serif font-semibold text-pink-400 bg-white p-3 rounded-3xl"
            >
              Home Page
            </Link>
          </button>
          <button>
            <Link
              href="/final-project/profile-page"
              className="flex no-underline hover:bg-pink-500 hover:text-white  font-serif font-semibold text-pink-400 bg-white p-3 rounded-3xl"
            >
              Profile Space
            </Link>
          </button>
          <button>
            <Link
              href="/final-project/website-credit-page"
              className="flex no-underline hover:bg-pink-500 hover:text-white  font-serif font-semibold text-pink-400 bg-white p-3 rounded-3xl"
            >
              Website Credits
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
