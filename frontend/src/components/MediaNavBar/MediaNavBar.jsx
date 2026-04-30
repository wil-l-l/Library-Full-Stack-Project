import { useNavigate } from "react-router";
import "./MediaNavBar.css";
import sharedConstants from "../../../../sharedConstants";

const MediaNavBar = () => {
  const navigate = useNavigate();

  const navigateToGenre = (genre) => navigate(`/search/?genre=${genre}`);

  return (
    <nav className="media-nav-bar">
      <button className="media-nav-bar__btn media-nav-bar__btn--open">
        Home
      </button>
      <button
        className="media-nav-bar__btn media-nav-bar__btn--closed"
        onClick={() =>
          navigateToGenre(sharedConstants.mediaTypes.ebook.toLowerCase())
        }
      >
        Ebooks
      </button>
      <button
        className="media-nav-bar__btn media-nav-bar__btn--closed"
        onClick={() =>
          navigateToGenre(sharedConstants.mediaTypes.audiobook.toLowerCase())
        }
      >
        Audiobooks
      </button>
      <button
        className="media-nav-bar__btn media-nav-bar__btn--closed"
        onClick={() =>
          navigateToGenre(sharedConstants.mediaTypes.comics.toLowerCase())
        }
      >
        Comics
      </button>
    </nav>
  );
};

export default MediaNavBar;
