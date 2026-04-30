import "./SearchPage.css";
import NavBar from "../../components/NavBar/NavBar";
import SearchNavBtns from "./SearchNavBtns/SearchNavBtns";
import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import { useLocation } from "react-router";
import GenericSlideItem from "../../components/GenericSlideItem/GenericSlideItem";

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
      <main className="search-page">
        <div className="search-page__filter-sort-bar">
          <div className="search-page__filter-sort-bar__filter-box">
            <img src="" alt="" />
            <p>Filter (0)</p>
          </div>
          <img src="" alt="" />
        </div>
        <p className="search-page__showing-text">
          Showing 1-24 of {filteredBooks.length}
        </p>
        <SearchNavBtns />
        <ul>{filteredBooks.data}</ul>
        <SearchNavBtns />
      </main>
    </>
  );
};

export default SearchPage;
