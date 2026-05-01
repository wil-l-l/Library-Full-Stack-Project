import "./NavBar.css";
import NavBarItem from "./NavBarItem/NavBarItem";
import HomeIcon from "../../assets/icons/home.svg";
import SearchIcon from "../../assets/icons/search--white.png";
import ProfileIcon from "../../assets/icons/profile.png";
import { useNavigate } from "react-router";
import { CiUser } from "react-icons/ci";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const NavBar = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <nav className="nav-bar">
      <div className="nav-bar__text-box" onClick={() => navigate(`/`)}>
        <p className="nav-bar__text-box__welcome-txt">Welcome to</p>
        <p className="nav-bar__text-box__library-txt">E-Library</p>
      </div>
      <div className="nav-bar__items-box">
        <div className="nav-bar__user-icon-box">
          <p className="nav-bar__user-icon-box__username">
            {user ? user.username : "Not logged in"}
          </p>
          <CiUser
            size={35}
            onClick={() => navigate(`/${user ? "user" : "login"}`)}
          />
        </div>
        <NavBarItem icon={SearchIcon} />
      </div>
    </nav>
  );
};

export default NavBar;
