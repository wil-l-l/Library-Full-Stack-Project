import "./UserNavBar.css";

const UserNavBar = ({ tabs }) => {
  return (
    <nav className="user-page__nav-bar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className="user-page__nav-bar__btn user-page__nav-bar__btn--closed"
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default UserNavBar;
