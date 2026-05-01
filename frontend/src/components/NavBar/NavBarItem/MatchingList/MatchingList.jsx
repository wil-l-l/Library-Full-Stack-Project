import { useContext } from "react";
import "./MatchingList.css";
import { BooksContext } from "../../../../contexts/BooksContext";
import SearchIcon from "../../../../assets/icons/search--white.png";

const MatchingList = ({ category, searchText }) => {
  const { books } = useContext(BooksContext);

  const getAuthorMatches = () => {
    const matches = [];

    books.forEach((bookObj) => {
      bookObj.authors.forEach((name) => {
        if (name.toLowerCase().includes(searchText)) {
          matches.push(bookObj);
        }
      });
    });

    return matches;
  };

  const filteredBooks =
    category === "Titles"
      ? books.filter(({ title }) => title.toLowerCase().includes(searchText))
      : getAuthorMatches();

  return (
    <ul className="nav-bar__search-menu__matching-list">
      {category}
      {filteredBooks.map(
        ({ title }, index) =>
          index < 5 && (
            <li className="nav-bar__search-menu__matching-list__item">
              <img
                src={SearchIcon}
                alt=""
                className="nav-bar__search-menu__matching-list__item__search-icon"
              />
              <p>{title}</p>
            </li>
          ),
      )}
    </ul>
  );
};

export default MatchingList;
