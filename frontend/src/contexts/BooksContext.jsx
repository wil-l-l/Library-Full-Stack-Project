import { createContext, useState } from "react";

const BooksContext = createContext();

const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState(null);

  return <BooksContext value={{ books, setBooks }}>{children}</BooksContext>;
};

export { BooksProvider, BooksContext };
