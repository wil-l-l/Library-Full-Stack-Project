import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import GenericSlides from "../../components/GenericSlides/GenericSlides";
import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import MediaNavBar from "../../components/MediaNavBar/MediaNavBar";
import useBooks from "../../hooks/useBooks";

function HomePage() {
  const { books } = useContext(BooksContext);

  useBooks();

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
