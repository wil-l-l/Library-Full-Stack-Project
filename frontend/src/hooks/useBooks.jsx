import { useContext, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";

function useBooks(callbackOnSuccess) {
  const { books, setBooks } = useContext(BooksContext);

  useEffect(() => {
    const fetchAllBooks = async () => {
      if (books) return;
      const response = await fetch("/api/books");
      const loadedBooks = await response.json();
      if (loadedBooks.success) {
        setBooks(loadedBooks.data);
        callbackOnSuccess(loadedBooks.data);
      } else setBooks(false);
    };
    fetchAllBooks();
  }, [books, setBooks, callbackOnSuccess]);
}

export default useBooks;
