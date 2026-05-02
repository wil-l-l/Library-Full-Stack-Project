import "./MediaPage.css";
import EBookIcon from "../../assets/icons/ebook.png";
import HeartIcon from "../../assets/icons/heart.png";
import ShareIcon from "../../assets/icons/share.png";
import { useParams } from "react-router";
import getBookById from "../../utils/getBookById";
import MediaPageTopHalf from "./MediaPageTopHalf/MediaPageTopHalf";
import MediaPageBottomHalf from "./MediaPageBottomHalf/MediaPageBottomHalf";
import { useEffect, useContext, useState } from "react";
import { BooksContext } from "../../contexts/BooksContext";

const MediaPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { books, setBooks } = useContext(BooksContext);
  const [book, setBook] = useState(!books ? null : getBookById(id, books));

  useEffect(() => {
    const fetchAllBooks = async () => {
      if (books) return;
      const response = await fetch("/api/books");
      const loadedBooks = await response.json();
      if (loadedBooks.success) {
        setBooks(loadedBooks.data);
        setBook(getBookById(id, loadedBooks.data));
      } else setBooks(false);
    };
    fetchAllBooks();
  }, [books, setBooks, id]);

  return !books || book === null ? (
    <p>Book is loading...</p>
  ) : book === false ? (
    <p className="red-text">Could not load book, please try again</p>
  ) : (
    <section className="media-page" style={{ paddingBottom: "800px" }}>
      <MediaPageTopHalf
        icon={null}
        type={book.type}
        title={book.title}
        authors={book.authors}
        id={id}
      />
      <MediaPageBottomHalf
        summary={book.summary}
        tags={book.tags}
        authors={book.authors}
      />
    </section>
  );
};

export default MediaPage;
