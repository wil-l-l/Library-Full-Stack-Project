import { useNavigate } from "react-router";
import "./MediaPageBottomHalf.css";
import { useState } from "react";
import formatAuthorName from "../../../utils/formatAuthorName";

const MediaPageBottomHalf = ({ summary, tags, authors }) => {
  const [doExpandText, setDoExpandText] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="media-page__body-box">
      <div className="media-page__body-box__about-box">
        <h3>About</h3>
        <p
          className={`media-page__body-box__about-box__text--${doExpandText ? "open" : "closed"}`}
        >
          {summary}
        </p>
      </div>
      <button
        className="media-page__body-box__about-box__expand-text-btn"
        onClick={() => setDoExpandText(!doExpandText)}
      >
        {doExpandText ? "Less" : "More"}
      </button>
      <div className="media-page__body-box__details-box">
        <h3>Related Subjects</h3>
        {tags.map((tag) => (
          <button onClick={() => navigate(`/search?tag=${tag.toLowerCase()}`)}>
            {tag}
          </button>
        ))}
      </div>
      <div className="media-page__body-box__details-box">
        <h3>Authors</h3>
        {authors.map((name) => (
          <button
            onClick={() =>
              navigate(`/search/?author=${formatAuthorName(name)}`)
            }
          >
            {name}
          </button>
        ))}
      </div>
      <div className="media-page__body-box__borrow-details-box">
        <h3>Borrow Details</h3>
        <div className="media-page__body-box_borrow-details-box__text-box">
          <p>
            This title is available for 21 days (3 weeks) after you borrow it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MediaPageBottomHalf;
