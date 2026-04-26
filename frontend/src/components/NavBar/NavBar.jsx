import "./NavBar.css";
import NavBarItem from "./NavBarItem/NavBarItem";
import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search.png";
import ProfileIcon from "../../assets/icons/profile.png";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavBarItem icon={HomeIcon} label={"Home"} />
      <NavBarItem icon={SearchIcon} label={"Search"} />
      <NavBarItem icon={ProfileIcon} label={"Profile"} />
    </nav>
  );
};

export default NavBar;
