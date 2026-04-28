import "./MediaPage.css";
import EBookIcon from "../../assets/icons/ebook.png";
import StarIcon from "../../assets/icons/star.svg";
import HeartIcon from "../../assets/icons/heart.png";
import ShareIcon from "../../assets/icons/share.png";

const MediaPage = ({
  type,
  cover = null,
  title,
  authors,
  ratingStars = null,
  ratersCount = null,
}) => {
  return (
    <section className="media-page">
      <div className="media-page__entry-box">
        <div className="media-page__entry-box__media-display-box">
          <div className="media-page__entry-box__media-type-box">
            <img
              src={EBookIcon}
              alt=""
              className="media-page__entry-box__media-type-box__icon"
            />
            <p>EBOOK</p>
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
          <p>What Every Body Is Saying</p>
          <p>Joe Navarro</p>
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
          <button className="media-page__entry-box__interact-box__side-btn">
            <img
              src={HeartIcon}
              alt=""
              className="media-page__entry-box__interact-box__side-btn__icon"
            />
          </button>
          <button className="media-page__entry-box__interact-box__borrow-btn">
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
      </div>
    </section>
  );
};

export default MediaPage;
