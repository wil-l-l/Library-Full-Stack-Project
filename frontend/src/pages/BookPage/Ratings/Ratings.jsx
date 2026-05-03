import "./Ratings.css";
import Stars from "./Stars/Stars";

const Ratings = ({ ratersCount = null, ratingStars = null }) => {
  return !ratersCount ? (
    <p className="book-page__ratings-box">Book has not been rated!</p>
  ) : (
    <div className="book-page__ratings-box">
      <p>{ratersCount}</p>
      <Stars />
      <p>({ratingStars})</p>
    </div>
  );
};

export default Ratings;
