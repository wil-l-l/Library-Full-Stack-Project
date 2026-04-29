import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import TrendingSlides from "../../components/TrendingSlides/TrendingSlides";
import GenericSlides from "../../components/GenericSlides/GenericSlides";
import { useState } from "react";
import { useEffect } from "react";

function HomePage() {
  const [loadedBooks, setLoadedBooks] = useState(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      const response = await fetch("/api/books");
      const books = await response.json();
      if (books.success) {
        setLoadedBooks(books);
      } else {
        setLoadedBooks(false);
      }
    };
    fetchAllBooks();
  }, []);

  return loadedBooks === null ? (
    <p>Application is loading...</p>
  ) : loadedBooks === false ? (
    <p className="red-text">Could not load data</p>
  ) : (
    <>
      <NavBar />
      <main>
        <TrendingSlides />
        <GenericSlides title={"Popular Ebooks"} />
        <GenericSlides title={"Popular Audiobooks"} />
        <GenericSlides title={"Popular Comics"} />
        <p>HomePage</p>
      </main>
    </>
  );
}

export default HomePage;
