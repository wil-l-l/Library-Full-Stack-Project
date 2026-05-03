import "./BookPage.css";
import EBookIcon from "../../assets/icons/ebook.png";
import HeartIcon from "../../assets/icons/heart.png";
import ShareIcon from "../../assets/icons/share.png";
import { useParams } from "react-router";
import getBookById from "../../utils/getBookById";
import { useContext, useState } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import useBooks from "../../hooks/useBooks";
import useScrollToTop from "../../hooks/useScrollToTop";
import BookCard from "../../components/BookCard/BookCard";
import InteractButton from "./InteractButton/InteractButton";
import Ratings from "./Ratings/Ratings";
import Details from "./Details/Details";

const BookPage = () => {
  const { id } = useParams();

  useScrollToTop();

  const { books } = useContext(BooksContext);
  const [book, setBook] = useState(!books ? null : getBookById(id, books));

  useBooks((loadedBooks) => setBook(getBookById(id, loadedBooks)));

  return !books || book === null ? (
    <p>Book is loading...</p>
  ) : book === false ? (
    <p className="red-text">Could not load book, please try again</p>
  ) : (
    <section
      className="book-page page-padding"
      style={{ paddingBottom: "350px" }}
    >
      <div className="book-page__buttons-bar">
        <InteractButton icon={ShareIcon} />
        <div className="book-page__interact-bar">
          <InteractButton icon={HeartIcon} />
          <InteractButton icon={HeartIcon} />
          <InteractButton icon={ShareIcon} />
        </div>
      </div>
      <div className="book-page__book-display">
        <BookCard
          title={book.title}
          authors={book.authors}
          style={{
            card: {
              zoom: "1.1",
              rowGap: "5px",
            },
            imgBox: {
              height: "160px",
            },
          }}
        />
      </div>
      <Ratings />
      <Details summary={book.summary} tags={book.tags} authors={book.authors} />
    </section>
  );
};

export default BookPage;
