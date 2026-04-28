import "./GenericSlides.css";
import HeadphonesIcon from "../../assets/icons/headphones.png";
import EBookIcon from "../../assets/icons/ebook.png";
import ComicIcon from "../../assets/icons/comic.png";
import GenericSlideItem from "../GenericSlideItem/GenericSlideItem";

const GenericSlides = ({ title }) => {
  return (
    <div className="generic-slides-box">
      <div className="generic-slides-box__text-box page-padding">
        <h2>{title}</h2>
        <p className="underline-on-hover">See More</p>
      </div>
      <ul className="generic-slides-box__list">
        <GenericSlideItem
          icon={EBookIcon}
          title={"What Every Body Is Saying"}
          authors={["Joe Navarro", "Joe Navarro"]}
        />
        <GenericSlideItem
          icon={EBookIcon}
          title={"What Every Body Is Sayinggggggggggggggggggggggggggg"}
          authors={[
            "Joe Navarroooooooooooooooooooooooooooooooooooooooooooooooooooooooooo",
          ]}
        />
        <GenericSlideItem
          icon={EBookIcon}
          title={"What Every Body Is Saying"}
          authors={["Joe Navarro"]}
        />
      </ul>
    </div>
  );
};

export default GenericSlides;
