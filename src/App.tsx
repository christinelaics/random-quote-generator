import React from "react";
import { useState } from "react";
import {QUOTES} from "./data/quotes";
import { getNextIndex } from "./utils/quotes";
import QuoteCard from "./components/QuoteCard";
import NewQuoteButton from "./components/newQuoteButton";

export default function App() {
  const [index, setIndex] = useState(0);
  const quote = QUOTES[index];

  function showNext() {
    setIndex((i) => getNextIndex(i, QUOTES.length));
  }

  return (
    <main className="m-8">
      <h1 className="mb-8">Quote of the Day</h1>

      <section className="pl-3">
        <QuoteCard quote={quote} />
      </section>

      <div className="mt-8">
        <NewQuoteButton onClick={showNext} />
      </div>
    </main>
  );
}