import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import MediaNavBar from "../../components/MediaNavBar/MediaNavBar";
import useBooks from "../../hooks/useBooks";
import Slides from "./Slides/Slides";
import SearchBar from "../../components/SearchBar/SearchBar";
import BookCard from "../../components/BookCard/BookCard";

function HomePage() {
  const { books } = useContext(BooksContext);
  useBooks();

  const categories = {
    ebook: "Popular Ebooks",
    audiobook: "Popular Audiobooks",
  };
  const getBooksByCategory = (category) =>
    books
      .filter(({ type, popular, trending }) => {
        return category.match(new RegExp(type, "gi")) && popular && !trending;
      })
      .map(({ authors, title }) => (
        <BookCard title={title} authors={authors} />
      ));

  return books === null ? (
    <p>Application is loading...</p>
  ) : books === false ? (
    <p className="red-text">Could not load data</p>
  ) : (
    <section
      className="home-page page-padding"
      style={{ marginBottom: "1000px" }}
    >
      <main className="home-page__main-section">
        <SearchBar />
        <Slides
          title={categories.ebook}
          slides={getBooksByCategory(categories.ebook)}
        />
        <Slides
          title={categories.audiobook}
          slides={getBooksByCategory(categories.audiobook)}
        />
      </main>
    </section>
  );
}

export default HomePage;
