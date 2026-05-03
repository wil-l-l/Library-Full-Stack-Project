import "./InteractButton.css";

const InteractButton = ({ icon }) => {
  return (
    <button className="book-page__interact-btn">
      <img src={icon} alt="" className="book-page__interact-btn__icon " />
    </button>
  );
};

export default InteractButton;
