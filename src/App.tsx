import React from "react";
import { useState } from "react";
import {QUOTES} from "./data/quotes";
import { getNextIndex } from "./utils/quotes";

export default function App() {
  const [index, setIndex] = useState(0);
  const quote = QUOTES[index];

  function showNext() {
    setIndex((i) => getNextIndex(i, QUOTES.length));
  }

  return (
    <main>
      <h1>Quote of the Day</h1>

      <section>
        <blockquote>
          <p>{quote.text}</p>
          {quote.author && <footer>- {quote.author}</footer>}
        </blockquote>
      </section>

      <div>
        <button onClick={showNext}>New Quote</button>
      </div>
    </main>
  );
}