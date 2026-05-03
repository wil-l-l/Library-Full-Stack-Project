import { useNavigate } from "react-router";
import "./BookCard.css";

const BookCard = ({
  img = null,
  title,
  authors,
  _id,
  style = { card: null, imgBox: null },
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="book-card"
      onClick={() => navigate(`/book/${_id}`)}
      style={style.card}
    >
      <div className="book-card__img-box" style={style.imgBox}></div>
      <p className="book-card__title">{title}</p>
      {authors.map((name) => (
        <p className="book-card__author">{name}</p>
      ))}
    </div>
  );
};

export default BookCard;
