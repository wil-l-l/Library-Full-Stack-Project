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
    books.filter(({ title }) => title.includes(searchText));
  const filteredBooks = {
    data: filterBooksBySearchQuery(),
    length: filterBooksBySearchQuery().length,
  };

  console.log(filteredBooks.data);

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
        {filteredBooks.data.length > 0 ? (
          filteredBooks.data.map(({ authors, title, summary, cover, _id }) => (
            <BookDisplay
              authors={authors}
              title={title}
              summary={summary}
              cover={cover}
              _id={_id}
            />
          ))
        ) : (
          <p>Could not find any books with this search.</p>
        )}
      </main>
    </>
  );
};

export default SearchPage;
