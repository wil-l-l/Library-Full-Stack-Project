import "./InteractButton.css";

const InteractButton = ({ icon, action, currentAction, setCurrentAction }) => {
  return (
    <button
      className={`book-page__interact-btn ${currentAction === action ? "book-page__interact-btn--active" : ""}`}
      onClick={() => setCurrentAction(action)}
    >
      <img src={icon} alt="" className="book-page__interact-btn__icon " />
    </button>
  );
};

export default InteractButton;
