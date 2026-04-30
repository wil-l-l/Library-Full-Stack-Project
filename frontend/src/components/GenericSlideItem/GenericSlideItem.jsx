import { useNavigate } from "react-router";
import "./GenericSlideItem.css";

const GenericSlideItem = ({ icon, title, authors, type }) => {
  const navigate = useNavigate();

  return (
    <li
      className="generic-slides-box__list__item"
      onClick={() => navigate("/book")}
    >
      <div className="generic-slides-box__list__item__cover-img-box">
        <img src="" alt="" />
      </div>
      <div className="generic-slides-box__list__item__book-details">
        <div className="generic-slides-box__list__item__book-details__book-type-box">
          <img
            src={icon}
            alt=""
            className="generic-slides-box__list__item__book-details__book-type-box__icon"
          />
          <p>{type}</p>
        </div>
        <p>{title}</p>
        <p className="generic-slides-box__list__item__book-details__book-type-box__author-text">
          {authors.length > 1
            ? authors.map((authorName, index) =>
                index !== authors.length - 1 ? authorName + ", " : authorName,
              )
            : authors[0]}
        </p>
      </div>
    </li>
  );
};

export default GenericSlideItem;
