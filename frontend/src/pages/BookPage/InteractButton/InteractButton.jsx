import "./InteractButton.css";

const InteractButton = ({
  icon,
  action,
  currentAction,
  setCurrentAction,
  clickHandler,
}) => {
  return (
    <button
      className={`book-page__interact-btn ${currentAction === action ? "book-page__interact-btn--active" : ""}`}
      onClick={() => {
        setCurrentAction(action);
        clickHandler();
      }}
    >
      <img src={icon} alt="" className="book-page__interact-btn__icon " />
    </button>
  );
};

export default InteractButton;
