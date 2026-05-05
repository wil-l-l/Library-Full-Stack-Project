import { useNavigate } from "react-router";
import "./Slides.css";
import { frontConstants as sharedConstants } from "../../../frontConstants";

const Slides = ({ title, slides = null }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="slides-title-box">
        <h3 className="slides__title">{title}</h3>
        <p
          className="slides__see-all-text"
          onClick={() => {
            for (const key in sharedConstants.mediaTypes) {
              if (title.match(new RegExp(key, "gi")))
                navigate(`/search?type=${key}`);
            }
          }}
        >
          See All
        </p>
      </div>
      <div className="slides">{slides}</div>
    </>
  );
};

export default Slides;
