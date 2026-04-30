import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import TrendingSlides from "../../components/TrendingSlides/TrendingSlides";
import GenericSlides from "../../components/GenericSlides/GenericSlides";
import { useEffect, useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import MediaNavBar from "../../components/MediaNavBar/MediaNavBar";

function HomePage() {
  const { books, setBooks } = useContext(BooksContext);

  useEffect(() => {
    const fetchAllBooks = async () => {
      if (books) return;
      const response = await fetch("/api/books");
      const loadedBooks = await response.json();
      if (loadedBooks.success) setBooks(loadedBooks.data);
      else setBooks(false);
    };
    fetchAllBooks();
  }, [books, setBooks]);

  return books === null ? (
    <p>Application is loading...</p>
  ) : books === false ? (
    <p className="red-text">Could not load data</p>
  ) : (
    <section className="home-page">
      <NavBar />
      <main className="home-page__main-section">
        <MediaNavBar />
        <GenericSlides categoryTitle={"Popular Ebooks"} />
        <GenericSlides categoryTitle={"Popular Audiobooks"} />
        <GenericSlides categoryTitle={"Popular Comics"} />
        <p>HomePage</p>
      </main>
    </section>
  );
}

export default HomePage;
