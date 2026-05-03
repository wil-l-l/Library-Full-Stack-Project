import "./UserNavBar.css";

const UserNavBar = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <nav className="user-page__nav-bar">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`user-page__nav-bar__btn user-page__nav-bar__btn--${activeTab === tab ? "open" : "closed"}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default UserNavBar;
