import "./NavBar.css";
import SearchIcon from "../../assets/icons/search--white.png";
import { useNavigate } from "react-router";
import { UserContext } from "../../contexts/UserContext";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const navigate = useNavigate();

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
