import { useNavigate } from "react-router";
import "./BookDisplay.css";
import getRandomCover from "../../utils/getRandomCover";

const BookDisplay = ({ authors, title, summary, _id }) => {
  const navigate = useNavigate();
  const TEXT_THRESHOLD = 200;

  return (
    <div className="book-display page-padding">
      <div className="book-display__top-box">
        <div className="book-display__top-box__left">
          {authors.map((name) => (
            <p className="book-display__authors" key={name}>
              {name}
            </p>
          ))}
          <p className="book-display__title">{title}</p>
        </div>
        <button
          className="book-display__top-box__open-btn white-black-btn"
          onClick={() => navigate(`/book/${_id}`)}
        >
          OPEN
        </button>
      </div>
      <div className="book-display__book-card">
        <div className="book-display__book-card__cover-box">
          <img
            src={getRandomCover()}
            alt=""
            className="book-display__book-card__cover-box__cover"
          />
        </div>
        <div className="book-display__book-card__summary">
          {summary.length > TEXT_THRESHOLD
            ? summary.slice(0, TEXT_THRESHOLD) + `...`
            : summary}
        </div>
      </div>
    </div>
  );
};

export default BookDisplay;
