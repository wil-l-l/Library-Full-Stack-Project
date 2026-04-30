import { useNavigate } from "react-router";
import "./TrendingSlideItem.css";

const TrendingSlideItem = ({ title, cover = null, _id }) => {
  const navigate = useNavigate();

  return (
    <li
      className="tending-slides-box__item"
      onClick={() => navigate(`/book/${_id}`)}
    >
      {title}
    </li>
  );
};

export default TrendingSlideItem;
