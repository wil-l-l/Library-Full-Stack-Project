import { useContext, useEffect } from "react";
import { BooksContext } from "../contexts/BooksContext";

function useBooks(callbackOnSuccess = null) {
  const { books, setBooks } = useContext(BooksContext);

  useEffect(() => {
    const fetchAllBooks = async () => {
      if (books) return;
      const response = await fetch(
        "https://library-project-backend-i28f.onrender.com/api/books",
      );
      const loadedBooks = await response.json();
      if (loadedBooks.success) {
        setBooks(loadedBooks.data);
        callbackOnSuccess && callbackOnSuccess(loadedBooks.data);
      } else setBooks(false);
    };
    fetchAllBooks();
  }, [books, setBooks, callbackOnSuccess]);
}

export default useBooks;
