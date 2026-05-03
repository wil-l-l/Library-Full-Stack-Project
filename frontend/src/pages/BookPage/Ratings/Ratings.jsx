import "./Ratings.css";
import Stars from "./Stars/Stars";

const Ratings = () => {
  return (
    <div className="book-page__ratings-box">
      <p>4.0</p>
      <Stars />
      <p>(22)</p>
    </div>
  );
};

export default Ratings;
