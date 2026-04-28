import "./GenericSlideItem.css";

const GenericSlideItem = ({ icon, title, authors }) => {
  return (
    <li className="generic-slides-box__list__item">
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
          <p>Ebook</p>
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
