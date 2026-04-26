import { useNavigate } from "react-router";

const NavBarItem = ({ icon, label }) => {
  const navigate = useNavigate();

  return (
    <button
      className="nav-bar__option-btn"
      onClick={() => navigate(`/${label.toLowerCase()}`)}
    >
      <div className="nav-bar__option-btn__img-box">
        <img src={icon} alt="" className="nav-bar__option-btn__img-box__img" />
      </div>
      <p>{label}</p>
    </button>
  );
};

export default NavBarItem;
