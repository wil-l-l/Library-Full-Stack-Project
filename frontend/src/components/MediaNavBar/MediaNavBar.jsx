import "./MediaNavBar.css";

const MediaNavBar = () => {
  return (
    <nav className="media-nav-bar">
      <button className="media-nav-bar__btn media-nav-bar__btn--open">
        Home
      </button>
      <button className="media-nav-bar__btn media-nav-bar__btn--closed">
        Ebooks
      </button>
      <button className="media-nav-bar__btn media-nav-bar__btn--closed">
        Audiobooks
      </button>
      <button className="media-nav-bar__btn media-nav-bar__btn--closed">
        Comics
      </button>
    </nav>
  );
};

export default MediaNavBar;
