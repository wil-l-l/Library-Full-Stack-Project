import "./NavBar.css";
import NavBarItem from "./NavBarItem/NavBarItem";
import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search--white.png";
import ProfileIcon from "../../assets/icons/profile.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <h1>E-Library</h1>
      <NavBarItem icon={SearchIcon} />
    </nav>
  );
};

export default NavBar;
