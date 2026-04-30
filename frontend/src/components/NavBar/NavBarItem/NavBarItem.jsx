import { useState } from "react";
import "./NavBarItem.css";

const NavBarItem = ({ icon, label }) => {
  const [active, setActive] = useState(false);

  return (
    <>
      {active && (
        <div className="nav-bar__search-menu">
          <p>Search</p>
          <form action="">
            <input
              type="text"
              name=""
              id=""
              className="nav-bar__search-menu__input"
              placeholder="Search"
            />
          </form>
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
