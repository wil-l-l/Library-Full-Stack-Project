import "./BookCard.css";

const BookCard = ({ img = null, title, authors }) => {
  return (
    <div className="book-card">
      <div className="book-card__img-box"></div>
      <p className="book-card__title">{title}</p>
      {authors.map((name) => (
        <p className="book-card__author">{name}</p>
      ))}
    </div>
  );
};

export default BookCard;
