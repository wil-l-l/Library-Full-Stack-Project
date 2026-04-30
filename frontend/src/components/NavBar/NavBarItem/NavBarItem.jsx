import { useState } from "react";
import "./NavBarItem.css";
import MatchingList from "./MatchingList/MatchingList";
import { useNavigate } from "react-router";

const NavBarItem = ({ icon, label }) => {
  const navigate = useNavigate();

  const [active, setActive] = useState(false);
  const [searchText, setSearchText] = useState("");

  const closeSearchMenu = () => {
    setActive(false);
    setSearchText("");
  };

  return (
    <>
      {active && (
        <div className="nav-bar__search-menu">
          <p>Search</p>
          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
              navigate(`/search`, {
                state: {
                  searchText,
                },
              });
              closeSearchMenu();
            }}
          >
            <input
              type="text"
              name=""
              id=""
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onKeyDown={(e) => e.key === "Escape" && closeSearchMenu()}
              className="nav-bar__search-menu__input"
              placeholder="Search"
            />
          </form>
          <MatchingList
            category={"Titles"}
            searchText={searchText.toLowerCase()}
          />
        </div>
      )}
      <button
        className={`nav-bar__option-btn`}
        onClick={() => setActive(!active)}
      >
        <div className="nav-bar__option-btn__img-box">
          <img
            src={icon}
            alt=""
            className="nav-bar__option-btn__img-box__img"
          />
        </div>
        <p>{label}</p>
      </button>
    </>
  );
};

export default NavBarItem;
