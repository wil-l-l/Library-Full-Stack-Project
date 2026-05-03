import "./NavBar.css";
import NavBarItem from "./NavBarItem/NavBarItem";
import SearchIcon from "../../assets/icons/search--white.png";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <nav className="nav-bar">
      <button className="nav-bar__btn" onClick={() => navigate("/home")}>
        HOME
      </button>
      <button className="nav-bar__btn" onClick={() => navigate("/user")}>
        USER
      </button>
      <SearchBar />
    </nav>
  );
};

export default NavBar;
