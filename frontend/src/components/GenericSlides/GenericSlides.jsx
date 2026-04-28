import "./GenericSlides.css";
import HeadphonesIcon from "../../assets/icons/headphones.png";
import EBookIcon from "../../assets/icons/ebook.png";
import ComicIcon from "../../assets/icons/comic.png";

const GenericSlides = ({ title }) => {
  return (
    <div className="generic-slides-box">
      <div className="generic-slides-box__text-box page-padding">
        <h2>{title}</h2>
        <p className="underline-on-hover">See More</p>
      </div>
      <ul className="generic-slides-box__list">
        <li className="generic-slides-box__list__item">
          <div className="generic-slides-box__list__item__cover-img-box">
            <img src="" alt="" />
          </div>
          <div className="generic-slides-box__list__item__book-details">
            <div className="generic-slides-box__list__item__book-details__book-type-box">
              <img
                src={EBookIcon}
                alt=""
                className="generic-slides-box__list__item__book-details__book-type-box__icon"
              />
              <p>Ebook</p>
            </div>
            <p>What Every Body Is Saying</p>
            <p>Joe Navarro</p>
          </div>
        </li>
        <li className="generic-slides-box__list__item"></li>
        <li className="generic-slides-box__list__item"></li>
      </ul>
    </div>
  );
};

export default GenericSlides;
