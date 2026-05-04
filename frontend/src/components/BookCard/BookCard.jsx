import { useNavigate } from "react-router";
import "./BookCard.css";
import HeartIcon from "../../assets/icons/heart.png";
import ShareIcon from "../../assets/icons/share.png";

const BookCard = ({
  img = null,
  title,
  authors,
  _id,
  style = { card: null, imgBox: null },
  enableButtons = {
    icon: null,
    onClickHandler: null,
  },
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="book-card"
      onClick={() => navigate(`/book/${_id}`)}
      style={style.card}
    >
      {enableButtons.icon && (
        <button
          className="book-card__btn"
          onClick={enableButtons.onClickHandler}
        >
          <img
            src={enableButtons.icon}
            alt=""
            className="book-card__btn__img"
          />
        </button>
      )}
      <div className="book-card__img-box" style={style.imgBox}></div>
      <p className="book-card__title">{title}</p>
      {authors.map((name) => (
        <p className="book-card__author">{name}</p>
      ))}
    </div>
  );
};

export default BookCard;
