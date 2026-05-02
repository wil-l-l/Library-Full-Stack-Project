import "./SearchPage.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchNavBtns from "./SearchNavBtns/SearchNavBtns";
import { useContext, useEffect, useState } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { useLocation, useSearchParams } from "react-router";
import GenericSlideItem from "../../components/GenericSlideItem/GenericSlideItem";
import BookDisplay from "../../components/BookDisplay/BookDisplay";

const SearchPage = () => {
  const { books } = useContext(BooksContext);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  const genre = searchParams.get("genre") || null;
  const tag = searchParams.get("tag") || null;
  const searchText = genre
    ? genre
    : tag
      ? tag.toLowerCase()
      : location.state.searchText;

  const filterBooksBySearchQuery = () =>
    books.filter(({ title }) => title.includes(searchText));

  const filterBooksByGenre = () =>
    books.filter(({ type }) => type.toLowerCase() === genre);

  const filterBooksByTag = () => {
    const tagsList = [];
    books.forEach((bookObj) => {
      bookObj.tags.forEach(
        (tagVal) => tagVal.toLowerCase() === tag && tagsList.push(bookObj),
      );
    });
    return tagsList;
  };

  const filteredBooks = {
    data:
      !genre && !tag
        ? filterBooksBySearchQuery()
        : !tag
          ? filterBooksByGenre()
          : filterBooksByTag(),
    length:
      !genre && !tag
        ? filterBooksBySearchQuery().length
        : !tag
          ? filterBooksByGenre().length
          : filterBooksByTag().length,
  };

  const [page, setPage] = useState(1);
  const [openMore, setOpenMore] = useState(false);
  const MAX_BOOKS_PER_PAGE = 6;
  const MAX_PAGES = Math.ceil(filteredBooks.length / MAX_BOOKS_PER_PAGE);

  const range = Array.from({ length: MAX_PAGES }, (_, index) => index + 1);

  let startSlice;
  let endSlice;

  if (page === 1) {
    startSlice = 0;
    endSlice = MAX_BOOKS_PER_PAGE;
  } else {
    startSlice = MAX_BOOKS_PER_PAGE * (page - 1);
    endSlice = MAX_BOOKS_PER_PAGE * page;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <NavBar />
      <main className="search-page" style={{ marginBottom: "2000px" }}>
        <div className="search-page-results-box page-padding">
          <p className="search-page-results-box__line-1">
            {filteredBooks.length} MATCHES IN
          </p>
          <p className="search-page-results-box__line-2">Search Results</p>
          <div className="search-page__page-display">
            <p>
              Page {page} of {MAX_PAGES}
            </p>
            <button
              className="search-page__page-display__open-more-btn"
              onClick={() => setOpenMore(!openMore)}
            >
              PG
              {openMore && (
                <ul className="search-page__page-display__pages-list">
                  {range.map((pageNum) => (
                    <li
                      className="search-page__page-display__pages-list__item"
                      onClick={() => setPage(pageNum)}
                    >
                      Page {pageNum}
                    </li>
                  ))}
                </ul>
              )}
            </button>
          </div>
        </div>
        {filteredBooks.data.length > 0 ? (
          filteredBooks.data
            .slice(startSlice, endSlice)
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
      </main>
    </>
  );
};

export default SearchPage;
