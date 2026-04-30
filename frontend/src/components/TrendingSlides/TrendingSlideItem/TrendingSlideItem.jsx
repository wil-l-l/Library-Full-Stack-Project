import "./TrendingSlideItem.css";

const TrendingSlideItem = ({ title, cover = null }) => {
  return <li className="tending-slides-box__item">{title}</li>;
};

export default TrendingSlideItem;
