import "./SearchPage.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchNavBtns from "./SearchNavBtns/SearchNavBtns";
import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { useLocation } from "react-router";
import GenericSlideItem from "../../components/GenericSlideItem/GenericSlideItem";
import BookDisplay from "../../components/BookDisplay/BookDisplay";

const SearchPage = () => {
  const { books } = useContext(BooksContext);
  const { searchText } = useLocation().state;

  const filterBooksBySearchQuery = () =>
    books
      .filter(({ title }) => title.includes(searchText))
      .map(({ title, authors, type, _id }) => (
        <GenericSlideItem
          icon={null}
          title={title}
          authors={authors}
          type={type}
          _id={_id}
        />
      ));
  const filteredBooks = {
    data: filterBooksBySearchQuery(),
    length: filterBooksBySearchQuery().length,
  };

  return (
    <>
      <NavBar />
      <main className="search-page" style={{ marginBottom: "1000px" }}>
        <div className="search-page-results-box page-padding">
          <p className="search-page-results-box__line-1">
            {filteredBooks.length} MATCHES IN
          </p>
          <p className="search-page-results-box__line-2">Search Results</p>
          <div className="search-page__page-display">
            <p>Page 1 of 200</p>
          </div>
        </div>
        <BookDisplay />
        <BookDisplay />
      </main>
    </>
  );
};

export default SearchPage;
