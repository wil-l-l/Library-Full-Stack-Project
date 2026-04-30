import { useContext } from "react";
import TrendingSlideItem from "./TrendingSlideItem/TrendingSlideItem";
import "./TrendingSlides.css";
import { BooksContext } from "../../contexts/BooksContext";

const TrendingSlides = () => {
  const { books } = useContext(BooksContext);

  return (
    <>
      <h2 className="page-padding">Trending Now</h2>
      <ul className="trending-slides-list horizontal-scroll-box">
        {books
          .filter(({ trending }) => trending)
          .map(({ title, cover, _id }) => (
            <TrendingSlideItem title={title} cover={cover} _id={_id} />
          ))}
      </ul>
    </>
  );
};

export default TrendingSlides;
