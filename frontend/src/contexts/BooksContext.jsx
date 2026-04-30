import { useEffect } from "react";
import { createContext, useState } from "react";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(
    JSON.parse(localStorage.getItem("books")) || null,
  );

  useEffect(() => {
    if (books) {
      localStorage.setItem("books", JSON.stringify(books));
    }
  }, [books]);

  return <BooksContext value={{ books, setBooks }}>{children}</BooksContext>;
};

export { BooksProvider, BooksContext };
