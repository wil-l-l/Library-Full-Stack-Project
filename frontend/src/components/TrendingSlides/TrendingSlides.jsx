import { useContext } from "react";
import TrendingSlideItem from "./TrendingSlideItem/TrendingSlideItem";
import "./TrendingSlides.css";
import { BooksContext } from "../../contexts/BooksContext";

const TrendingSlides = () => {
  const { books } = useContext(BooksContext);

  return (
    <>
      <h2 className="page-padding">Trending Now</h2>
      <ul className="trending-slides-list">
        {books
          .filter(({ trending }) => trending)
          .map(({ title, cover }) => (
            <TrendingSlideItem title={title} cover={cover} />
          ))}
      </ul>
    </>
  );
};

export default TrendingSlides;
