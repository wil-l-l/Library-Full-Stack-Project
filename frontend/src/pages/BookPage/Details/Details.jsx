import { useState } from "react";
import "./Details.css";
import Section from "./Section/Section";
import { useNavigate } from "react-router";
import formatAuthorName from "../../../utils/formatAuthorName";
import PlusIcon from "../../../assets/icons/plus.png";
import MinusIcon from "../../../assets/icons/minus.png";

const Details = ({ summary, tags, authors }) => {
  const [doExpandText, setDoExpandText] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="book-page__details">
      <Section
        heading={"About this Book"}
        content={
          <>
            <p
              style={
                !doExpandText
                  ? {
                      display: "-webkit-box",
                      WebkitLineClamp: 7,
                      lineClamp: 7,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }
                  : {}
              }
            >
              {
                "Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus. Lorem ipsum dolor sit amet consectetur adipiscing elit quisque faucibus ex sapien vitae pellentesque sem placerat in id cursus mi pretium tellus duis convallis tempus leo eu aenean sed diam urna tempor pulvinar vivamus fringilla lacus nec metus bibendum egestas iaculis massa nisl malesuada lacinia integer nunc posuere ut hendrerit semper vel class aptent taciti sociosqu ad litora torquent per conubia nostra inceptos himenaeos orci varius natoque penatibus et magnis dis parturient montes nascetur ridiculus mus donec rhoncus eros lobortis nulla molestie mattis scelerisque maximus eget fermentum odio phasellus non purus est efficitur laoreet mauris pharetra vestibulum fusce dictum risus."
              }
            </p>
            <button
              className="book-page__interact-btn"
              style={{ zoom: ".8", fontWeight: "600px", marginTop: "10px" }}
              onClick={() => setDoExpandText(!doExpandText)}
            >
              <img
                src={!doExpandText ? PlusIcon : MinusIcon}
                alt=""
                style={{ width: "16px" }}
                className="book-page__interact-btn__icon"
              />
            </button>
          </>
        }
      />
      <Section
        heading={"Related Subjects"}
        content={
          <div className="book-page__details__btn-box">
            {tags.map((tag) => (
              <button
                className="book-page__details__btn"
                onClick={() => navigate(`/search?tag=${tag.toLowerCase()}`)}
              >
                {tag}
              </button>
            ))}
          </div>
        }
      />
      <Section
        heading={"Authors"}
        content={
          <div className="book-page__details__btn-box">
            {authors.map((name) => (
              <button
                className="book-page__details__btn"
                onClick={() =>
                  navigate(`/search?author=${formatAuthorName(name)}`)
                }
              >
                {name}
              </button>
            ))}
          </div>
        }
      />
      <Section
        heading={"Borrow Details"}
        content={
          <p>
            This title is available for 21 days (3 weeks) after you borrow it.
          </p>
        }
      />
    </div>
  );
};

export default Details;
