import "./GenericSlides.css";
import HeadphonesIcon from "../../assets/icons/headphones.png";
import EBookIcon from "../../assets/icons/ebook.png";
import ComicIcon from "../../assets/icons/comic.png";
import GenericSlideItem from "./GenericSlideItem/GenericSlideItem";
import { useContext } from "react";
import { BooksContext } from "../../contexts/BooksContext";
import sharedConstants from "../../../../sharedConstants";

const GenericSlides = ({ categoryTitle }) => {
  const { books } = useContext(BooksContext);

  return (
    <div className="generic-slides-box">
      <div className="generic-slides-box__text-box page-padding">
        <h2>{categoryTitle}</h2>
        <p className="underline-on-hover">See More</p>
      </div>
      <ul className="generic-slides-box__list horizontal-scroll-box">
        {books
          .filter(({ type, popular, trending }) => {
            return (
              categoryTitle.match(new RegExp(type, "gi")) &&
              popular &&
              !trending
            );
          })
          .map(({ authors, popular, type, title, _id }) => (
            <GenericSlideItem
              title={title}
              popular={popular}
              authors={authors}
              type={type}
              icon={
                type === sharedConstants.mediaTypes.ebook
                  ? EBookIcon
                  : HeadphonesIcon
              }
              _id={_id}
            />
          ))}
      </ul>
    </div>
  );
};

export default GenericSlides;
