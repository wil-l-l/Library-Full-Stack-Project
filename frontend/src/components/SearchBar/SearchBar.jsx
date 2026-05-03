import "./SearchBar.css";
import SearchIcon from "../../assets/icons/search--black.svg";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <img src={SearchIcon} alt="" className="search-bar__img" />
      <input
        type="text"
        className="search-bar__input"
        placeholder="Search by book or author"
      />
    </div>
  );
};

export default SearchBar;
