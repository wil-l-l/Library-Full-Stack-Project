import { useNavigate } from "react-router";
import "./MediaNavBar.css";
import sharedConstants from "../../../../sharedConstants";

const MediaNavBar = () => {
  const navigate = useNavigate();

  const navigateToType = (type) => navigate(`/search/?type=${type}`);

  return (
    <nav className="media-nav-bar">
      <button className="media-nav-bar__btn media-nav-bar__btn--open">
        Home
      </button>
      <button
        className="media-nav-bar__btn media-nav-bar__btn--closed"
        onClick={() =>
          navigateToType(sharedConstants.mediaTypes.ebook.toLowerCase())
        }
      >
        Ebooks
      </button>
      <button
        className="media-nav-bar__btn media-nav-bar__btn--closed"
        onClick={() =>
          navigateToType(sharedConstants.mediaTypes.audiobook.toLowerCase())
        }
      >
        Audiobooks
      </button>
      <button
        className="media-nav-bar__btn media-nav-bar__btn--closed"
        onClick={() =>
          navigateToType(sharedConstants.mediaTypes.comics.toLowerCase())
        }
      >
        Comics
      </button>
    </nav>
  );
};

export default MediaNavBar;
