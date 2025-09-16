import React from "react";
import { useState } from "react";
import {QUOTES} from "./data/quotes";

export default function App() {
  const [index, setIndex] = useState(0);
  const quote = QUOTES[index];

  function showNext() {
    setIndex((i) => (i+1) % QUOTES.length);
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