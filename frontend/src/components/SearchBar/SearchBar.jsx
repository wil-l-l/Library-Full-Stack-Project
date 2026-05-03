import "./SearchBar.css";
import SearchIcon from "../../assets/icons/search--black.svg";
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  return (
    <div className="search-bar">
      <img src={SearchIcon} alt="" className="search-bar__img" />
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/search`, {
            state: {
              searchText,
            },
          });
          setSearchText("");
        }}
      >
        <input
          type="text"
          className="search-bar__input"
          placeholder="Search by book or author"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
