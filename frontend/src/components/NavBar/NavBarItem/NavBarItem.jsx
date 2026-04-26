const NavBarItem = ({ icon, label }) => {
  return (
    <div className="nav-bar__option-box">
      <div className="nav-bar__option-box__img-box">
        <img src={icon} alt="" className="nav-bar__option-box__img-box__img" />
      </div>
      <p>{label}</p>
    </div>
  );
};

export default NavBarItem;
