import type { Quote } from '../data/quotes';

export default function QuoteCard({quote}: {quote:Quote}) {
    return (
        <blockquote>
            <p>{quote.text}</p>
            {quote.author && <footer>- {quote.author}</footer>}
        </blockquote>
    );
}