import "./NavBar.css";
import NavBarItem from "./NavBarItem/NavBarItem";
import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search--white.png";
import ProfileIcon from "../../assets/icons/profile.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar__text-box">
        <p className="nav-bar__text-box__welcome-txt">Welcome to</p>
        <p className="nav-bar__text-box__library-txt">E-Library</p>
      </div>
      <NavBarItem icon={SearchIcon} />
    </nav>
  );
};

export default NavBar;
