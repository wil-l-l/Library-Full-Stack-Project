import "./Stars.css";
import StarIcon from "../../../../assets/icons/star.svg";

const Stars = () => {
  const getStarIcon = () => (
    <img
      src={StarIcon}
      alt=""
      className="book-page__ratings-box__stars-box__star-icon"
      fill={"black"}
    />
  );
  return (
    <div className="book-page__ratings-box__stars-box">
      {getStarIcon()}
      {getStarIcon()}
      {getStarIcon()}
      {getStarIcon()}
      {getStarIcon()}
    </div>
  );
};

export default Stars;
