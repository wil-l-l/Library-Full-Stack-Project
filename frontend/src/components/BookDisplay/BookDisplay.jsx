import "./BookDisplay.css";

const BookDisplay = ({ authors, title, summary, cover }) => {
  return (
    <div className="book-display page-padding">
      <p className="book-display__authors">China Mieville</p>
      <p className="book-display__title">The City & the City</p>
      <div className="book-display__book-card">
        <div className="book-display__book-card__cover-box"></div>
        <div className="book-display__book-card__summary">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            perferendis, ipsa fugiat nam voluptate praesentium dicta nostrum
            facere, sunt est, aspernatur officia natus dolorem quo quod quae
            tempore vitae error?
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDisplay;
