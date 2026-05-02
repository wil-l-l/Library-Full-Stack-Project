import "./SearchPage.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchNavBtns from "./SearchNavBtns/SearchNavBtns";
import { useContext, useState } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { useLocation, useSearchParams } from "react-router";
import GenericSlideItem from "../../components/GenericSlideItem/GenericSlideItem";
import BookDisplay from "../../components/BookDisplay/BookDisplay";
import useBooks from "../../hooks/useBooks";
import PaginationBar from "./PaginationBar/PaginationBar";
import formatAuthorName from "../../utils/formatAuthorName";

const SearchPage = () => {
  // HOOKS
  const [searchParams] = useSearchParams();
  const location = useLocation();

  // BOOKS
  const { books } = useContext(BooksContext);
  useBooks();

  const getFilteredBooks = () => {
    if (!books) return null;

    const type = searchParams.get("type") || null;
    if (type) return books.filter((book) => book.type.toLowerCase() === type);

    const tag = searchParams.get("tag") || null;
    if (tag) {
      const tagsList = [];
      books.forEach((bookObj) => {
        bookObj.tags.forEach(
          (tagVal) => tagVal.toLowerCase() === tag && tagsList.push(bookObj),
        );
      });
      return tagsList;
    }

    const author = searchParams.get("author") || null;
    const booksByAuthor = [];
    if (author) {
      books.forEach((book) => {
        book.authors.forEach(
          (name) =>
            author === formatAuthorName(name) && booksByAuthor.push(book),
        );
      });
      return booksByAuthor;
    }

    if (location.state) {
      const booksByAuthor = [];
      books.forEach((book) => {
        book.authors.forEach(
          (name) =>
            name.match(new RegExp(location.state.searchText, "gi")) &&
            booksByAuthor.push(book),
        );
      });

      const combinedList = [
        ...books.filter(
          ({ title }) =>
            title.match(new RegExp(location.state.searchText, "gi")), // return searchText results
        ),
        ...booksByAuthor,
      ];

      const foundIds = [];
      combinedList.forEach((book, index) => {
        if (!foundIds.includes(book._id)) return foundIds.push(book._id);
        combinedList[index] = null;
      });

      return combinedList.filter((val) => val !== null);
    }

    return books;
  };
  const filteredBooks = getFilteredBooks();

  // PAGINATION
  const [page, setPage] = useState(1);

  const MAX_BOOKS_PER_PAGE = 6;
  const MAX_PAGES =
    filteredBooks === null
      ? null
      : Math.ceil(filteredBooks.length / MAX_BOOKS_PER_PAGE);

  const [showPages, setShowPages] = useState(false);
  const pageRange =
    MAX_PAGES === null
      ? null
      : Array.from({ length: MAX_PAGES }, (_, index) => index + 1);

  // LIST RENDERING
  const getSlices = () => {
    let startSlice;
    let endSlice;

    if (page === 1) {
      startSlice = 0;
      endSlice = MAX_BOOKS_PER_PAGE;
    } else {
      startSlice = MAX_BOOKS_PER_PAGE * (page - 1);
      endSlice = MAX_BOOKS_PER_PAGE * page;
    }
    return {
      startSlice,
      endSlice,
    };
  };
  const listSlicing = getSlices();

  return books === null ? (
    <p>Search page is loading...</p>
  ) : books === false ? (
    <p>Could not load search page. Please try again! </p>
  ) : (
    <>
      <NavBar />
      <main className="search-page" style={{ marginBottom: "2000px" }}>
        <div className="search-page-results-box page-padding">
          <p className="search-page-results-box__line-1">
            {filteredBooks.length} MATCHES IN
          </p>
          <p className="search-page-results-box__line-2">Search Results</p>
          <PaginationBar
            filteredBooks={filteredBooks}
            page={page}
            MAX_PAGES={MAX_PAGES}
            showPages={showPages}
            setShowPages={setShowPages}
            pageRange={pageRange}
            setPage={setPage}
          />
          {filteredBooks.length > 0 ? (
            filteredBooks
              .slice(listSlicing.startSlice, listSlicing.endSlice)
              .map(
                ({ authors, title, summary, cover, _id }, index) =>
                  (index + 1) * page <= MAX_BOOKS_PER_PAGE * page && (
                    <BookDisplay
                      authors={authors}
                      title={title}
                      summary={summary}
                      cover={cover}
                      _id={_id}
                    />
                  ),
              )
          ) : (
            <p>Could not find any books with this search.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default SearchPage;
