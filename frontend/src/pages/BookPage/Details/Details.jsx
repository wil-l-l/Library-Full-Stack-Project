import { useState } from "react";
import "./Details.css";
import Section from "./Section/Section";
import { useNavigate } from "react-router";
import formatAuthorName from "../../../utils/formatAuthorName";
import PlusIcon from "../../../assets/icons/plus.png";
import MinusIcon from "../../../assets/icons/minus.png";
import sharedConstants from "../../../../../sharedConstants";

const Details = ({ summary, tags, authors }) => {
  const [doExpandText, setDoExpandText] = useState(false);
  const navigate = useNavigate();

  const getSummaryByParts = () => {
    const regex = /--break/gi;
    const match = regex.exec(sharedConstants.bookSummary);
    return (
      <>
        <p>{sharedConstants.bookSummary.substring(0, match.index)}</p>
        <br />
        <p>
          {sharedConstants.bookSummary.substring(
            match.index + 7,
            sharedConstants.bookSummary.length,
          )}
        </p>
      </>
    );
  };

  return (
    <div className="book-page__details">
      <Section
        heading={"About this Book"}
        content={
          <>
            <div
              style={
                !doExpandText
                  ? {
                      display: "-webkit-box",
                      WebkitLineClamp: 7,
                      lineClamp: 7,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }
                  : {}
              }
            >
              {getSummaryByParts()}
            </div>
            <button
              className="book-page__interact-btn"
              style={{ zoom: ".8", fontWeight: "600px", marginTop: "10px" }}
              onClick={() => setDoExpandText(!doExpandText)}
            >
              <img
                src={!doExpandText ? PlusIcon : MinusIcon}
                alt=""
                style={{ width: "16px" }}
                className="book-page__interact-btn__icon"
              />
            </button>
          </>
        }
      />
      <Section
        heading={"Related Subjects"}
        content={
          <div className="book-page__details__btn-box">
            {tags.map((tag) => (
              <button
                className="book-page__details__btn"
                onClick={() => navigate(`/search?tag=${tag.toLowerCase()}`)}
              >
                {tag}
              </button>
            ))}
          </div>
        }
      />
      <Section
        heading={"Authors"}
        content={
          <div className="book-page__details__btn-box">
            {authors.map((name) => (
              <button
                className="book-page__details__btn"
                onClick={() =>
                  navigate(`/search?author=${formatAuthorName(name)}`)
                }
              >
                {name}
              </button>
            ))}
          </div>
        }
      />
      <Section
        heading={"Borrow Details"}
        content={
          <p>
            This title is available for 21 days (3 weeks) after you borrow it.
          </p>
        }
      />
    </div>
  );
};

export default Details;
