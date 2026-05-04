import "./Stars.css";
import StarIcon from "../../../../assets/icons/star.svg";
import HalfStarIcon from "../../../../assets/icons/halfstar.svg";
import EmptyStarIcon from "../../../../assets/icons/emptystar.svg";

// Will render if there is at least one rating
const Stars = ({ ratingStars }) => {
  const getStarIcon = (lowerLimit, upperLimit) => (
    <img
      src={
        ratingStars >= upperLimit
          ? StarIcon
          : ratingStars < upperLimit && ratingStars > lowerLimit
            ? HalfStarIcon
            : EmptyStarIcon
      }
      alt=""
      className="book-page__ratings-box__stars-box__star-icon"
      fill={"black"}
    />
  );

  return (
    <div className="book-page__ratings-box__stars-box">
      {getStarIcon(0, 1)}
      {getStarIcon(1, 2)}
      {getStarIcon(2, 3)}
      {getStarIcon(3, 4)}
      {getStarIcon(4, 5)}
    </div>
  );
};

export default Stars;
