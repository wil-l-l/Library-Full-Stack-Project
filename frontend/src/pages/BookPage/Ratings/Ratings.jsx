import "./Ratings.css";
import Stars from "./Stars/Stars";

const Ratings = ({ ratersCount = null, ratingStars = null }) => {
  return !ratersCount ? (
    <p className="book-page__ratings-box">Book has not been rated!</p>
  ) : (
    <div className="book-page__ratings-box">
      <p>{ratersCount}</p>
      <Stars ratingStars={ratingStars} />
      <p>
        (
        {String(ratingStars).length === 1
          ? String(ratingStars) + ".0"
          : ratingStars}
        )
      </p>
    </div>
  );
};

export default Ratings;
