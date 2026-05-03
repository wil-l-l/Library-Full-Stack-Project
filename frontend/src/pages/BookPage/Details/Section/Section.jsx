import "./Section.css";

const Section = ({ heading, content }) => {
  return (
    <section className="book-page__details__section">
      <h3 className="book-page__details__section__heading">{heading}</h3>
      <div className="book-page__details__section__content-box">{content}</div>
    </section>
  );
};

export default Section;
