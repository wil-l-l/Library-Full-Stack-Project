import "./MediaPageTopHalf.css";
import StarIcon from "../../../assets/icons/star.svg";
import HeartIcon from "../../../assets/icons/heart.png";
import ShareIcon from "../../../assets/icons/share.png";
import EbookIcon from "../../../assets/icons/ebook.png";
import HeadphonesIcon from "../../../assets/icons/headphones.png";
import sharedConstants from "../../../../../sharedConstants";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate, Link, useLocation } from "react-router";

const MediaPageTopHalf = ({
  type,
  title,
  authors,
  id,
  ratersCount,
  ratingStars,
}) => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [borrowResponse, setBorrowResponse] = useState(null);
  const [favoriteResponse, setFavoriteResponse] = useState(null);

  const onInteractionSuccess = (response) =>
    response.success && setUser(response.data);

  const interactionBtnClick = async (endpoint, method, setResponseState) => {
    if (!user) return navigate("/login");

    let response = await fetch(endpoint, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
      }),
    });

    response = await response.json();
    setResponseState(response);
    onInteractionSuccess(response);
  };

  const { pathname } = useLocation();

  return (
    <div className="media-page__entry-box">
      <div className="media-page__entry-boxa__media-display-box">
        <div className="media-page__entry-box__media-type-box">
          <img
            src={
              type === sharedConstants.mediaTypes.ebook
                ? EbookIcon
                : HeadphonesIcon
            }
            alt=""
            className="media-page__entry-box__media-type-box__icon"
          />
          <p>{type.toUpperCase()}</p>
        </div>
        <div className="media-page__entry-box__cover-box">
          <img
            src=""
            alt=""
            className="media-page__entry-box__cover-box__img"
          />
        </div>
      </div>
      <div className="media-page__entry-box__media-details-box">
        <p>{title}</p>
        {authors.map((name) => (
          <p>{name}</p>
        ))}
        {ratersCount === 0 ? (
          "Book has no ratings yet!"
        ) : (
          <div className="media-page__entry-box__rating-box">
            <p>{ratingStars}</p>
            <div className="media-page__entry-box__rating-box__stars">
              <img
                src={StarIcon}
                alt=""
                className="media-page__entry-box__rating-box__stars__star-icon"
                fill={"black"}
              />
              <img
                src={StarIcon}
                alt=""
                className="media-page__entry-box__rating-box__stars__star-icon"
                fill={"black"}
              />
              <img
                src={StarIcon}
                alt=""
                className="media-page__entry-box__rating-box__stars__star-icon"
                fill={"black"}
              />
              <img
                src={StarIcon}
                alt=""
                className="media-page__entry-box__rating-box__stars__star-icon"
                fill={"black"}
              />
              <img
                src={StarIcon}
                alt=""
                className="media-page__entry-box__rating-box__stars__star-icon"
                fill={"black"}
              />
            </div>
            <p>({ratersCount})</p>
          </div>
        )}
      </div>
      <div className="media-page__entry-box__interact-box">
        <button
          className="media-page__entry-box__interact-box__side-btn"
          onClick={async () =>
            interactionBtnClick(
              `/api/user/favorite/${id}`,
              "PATCH",
              setFavoriteResponse,
            )
          }
        >
          <img
            src={HeartIcon}
            alt=""
            className="media-page__entry-box__interact-box__side-btn__icon"
          />
        </button>
        <button
          className="media-page__entry-box__interact-box__borrow-btn"
          onClick={async () =>
            interactionBtnClick(`/api/loan/${id}`, "PATCH", setBorrowResponse)
          }
        >
          BORROW
        </button>
        <button
          className="media-page__entry-box__interact-box__side-btn"
          onClick={() =>
            navigator.clipboard.writeText("http://localhost:5173" + pathname)
          }
        >
          <img
            src={ShareIcon}
            alt=""
            className="media-page__entry-box__interact-box__side-btn__icon"
          />
        </button>
      </div>
      {user.history.length > 0 &&
        user.history.some(({ _id }) => _id === id) && (
          <form
            action=""
            className="media-page__entry-box__rate-form"
            onClick={() => user === null && navigate("/login")}
            onSubmit={() => {
              console.log("Submit rating form");
            }}
          >
            <input type="number" step={0.5} min={0} max={5} />
          </form>
        )}
      {borrowResponse && borrowResponse.success === false && (
        <>
          <p className="error-text"> {borrowResponse.message}</p>
          <Link to={"/user"} className="media-page__borrows-redirect-text">
            Go to borrows to return loaned books
          </Link>
        </>
      )}
      {favoriteResponse && favoriteResponse.success === false && (
        <p className="error-text"> {favoriteResponse.message}</p>
      )}
    </div>
  );
};

export default MediaPageTopHalf;
