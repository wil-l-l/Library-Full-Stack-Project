import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import TrendingSlides from "../../components/TrendingSlides/TrendingSlides";
import GenericSlides from "../../components/GenericSlides/GenericSlides";
import { useEffect, useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";

function HomePage() {
  const { books, setBooks } = useContext(BooksContext);

  useEffect(() => {
    const fetchAllBooks = async () => {
      const response = await fetch("/api/books");
      const loadedBooks = await response.json();
      if (loadedBooks.success) setBooks(loadedBooks.data);
      else setBooks(false);
    };
    fetchAllBooks();
  }, [setBooks]);

  return books === null ? (
    <p>Application is loading...</p>
  ) : books === false ? (
    <p className="red-text">Could not load data</p>
  ) : (
    <>
      <NavBar />
      <main>
        <TrendingSlides />
        <GenericSlides categoryTitle={"Popular Ebooks"} />
        <GenericSlides categoryTitle={"Popular Audiobooks"} />
        <GenericSlides categoryTitle={"Popular Comics"} />
        <p>HomePage</p>
      </main>
    </>
  );
}

export default HomePage;
