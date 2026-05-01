import "./MediaPageTopHalf.css";
import StarIcon from "../../../assets/icons/star.svg";
import HeartIcon from "../../../assets/icons/heart.png";
import ShareIcon from "../../../assets/icons/share.png";
import EbookIcon from "../../../assets/icons/ebook.png";
import HeadphonesIcon from "../../../assets/icons/headphones.png";
import sharedConstants from "../../../../../sharedConstants";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router";

const MediaPageTopHalf = ({ type, title, authors, id }) => {
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
        <div className="media-page__entry-box__rating-box">
          <p>4.3</p>
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
          <p>(21)</p>
        </div>
      </div>
      <div className="media-page__entry-box__interact-box">
        <button
          className="media-page__entry-box__interact-box__side-btn"
          onClick={async () =>
            interactionBtnClick(
              `/api/user/favorite/${id}`,
              "POST",
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
        <button className="media-page__entry-box__interact-box__side-btn">
          <img
            src={ShareIcon}
            alt=""
            className="media-page__entry-box__interact-box__side-btn__icon"
          />
        </button>
      </div>
      {borrowResponse && borrowResponse.success === false && (
        <p className="error-text"> {borrowResponse.message}</p>
      )}
      {favoriteResponse && favoriteResponse.success === false && (
        <p className="error-text"> {favoriteResponse.message}</p>
      )}
    </div>
  );
};

export default MediaPageTopHalf;
