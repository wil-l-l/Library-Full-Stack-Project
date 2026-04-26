import "./GenericSlides.css";

const GenericSlides = ({ title }) => {
  return (
    <div className="generic-slides-box">
      <div className="generic-slides-box__text-box page-padding">
        <h2>{title}</h2>
        <p>See More</p>
      </div>
      <ul className="generic-slides-box__list">
        <li className="generic-slides-box__list__item"></li>
        <li className="generic-slides-box__list__item"></li>
        <li className="generic-slides-box__list__item"></li>
      </ul>
    </div>
  );
};

export default GenericSlides;
