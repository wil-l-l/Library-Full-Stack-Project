import "./NavBar.css";
import NavBarItem from "./NavBarItem/NavBarItem";
import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search--white.png";
import ProfileIcon from "../../assets/icons/profile.png";
import { useNavigate } from "react-router";
import { CiUser } from "react-icons/ci";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <nav className="nav-bar">
      <div className="nav-bar__profile-img-box">
        <img src="" alt="" />
      </div>
      <div className="nav-bar__search-bar">
        <SearchBar />
      </div>
    </nav>
  );
};

export default NavBar;
