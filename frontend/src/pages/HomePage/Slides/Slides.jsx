import "./Slides.css";

const Slides = ({ title, slides = null }) => {
  return (
    <>
      <div className="slides-title-box">
        <h3 className="slides__title">{title}</h3>
        <p className="slides__see-all-text">See All</p>
      </div>
      <div className="slides">{slides}</div>
    </>
  );
};

export default Slides;
