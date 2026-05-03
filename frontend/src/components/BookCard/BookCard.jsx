import { useNavigate } from "react-router";
import "./BookCard.css";

const BookCard = ({
  img = null,
  title,
  authors,
  style = { card: null, imgBox: null },
}) => {
  const navigate = useNavigate();

  return (
    <div
      className="book-card"
      onClick={() => navigate(`/book/${"69f64e7f1e27fc093e17997f"}`)}
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
