import { useContext } from "react";
import "./MatchingList.css";
import { BooksContext } from "../../../../contexts/BooksContext";
import SearchIcon from "../../../../assets/icons/search--white.png";

const MatchingList = ({ category, searchText }) => {
  const { books } = useContext(BooksContext);

  return (
    <ul className="nav-bar__search-menu__matching-list">
      {category}
      {books
        .filter(({ title }) => title.toLowerCase().includes(searchText))
        .map(
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
