export type Quote = {
    id: string;
    text: string;
    author?: string;
};

export const QUOTES: Quote[] = [
    { id: "q1", text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { id: "q2", text: "Simplicity is the soul of efficiency.", author: "Austin Freeman" },
    { id: "q3", text: "Done is better than perfect.", author: "Sheryl Sandberg" },
    { id: "q4", text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { id: "q5", text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
]