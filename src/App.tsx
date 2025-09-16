import React from "react";
import {QUOTES} from "./data/quotes";

export default function App() {
  const first = QUOTES[0];

  return (
    <main>
      <h1>Quote of the Day</h1>

      <section>
        <blockquote>
          <p>{first.text}</p>
          {first.author && <footer>- {first.author}</footer>}
        </blockquote>
      </section>
    </main>
  );
}