import InteractButton from "../InteractButton/InteractButton";
import EBookIcon from "../../../assets/icons/ebook.png";
import HeartIcon from "../../../assets/icons/heart.png";
import ShareIcon from "../../../assets/icons/share.png";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useLocation, useNavigate } from "react-router";
import bookBtnClickHandler from "../../../utils/bookBtnClickHandler";

const InteractionBar = ({ id }) => {
  const { user, setUser } = useContext(UserContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const actions = {
    borrow: "Borrow",
    favorite: "Favorite",
    share: "Share",
  };

  const [currentAction, setCurrentAction] = useState(null);
  const [responseState, setResponseState] = useState(null);

  const getInteractBtn = (action, icon, clickHandler) => (
    <InteractButton
      action={action}
      setCurrentAction={setCurrentAction}
      currentAction={currentAction}
      icon={icon}
      clickHandler={clickHandler}
    />
  );

  return (
    <div className="book-page__interaction-box">
      <div className="book-page__interact-bar horizontal-scroll-box ">
        {getInteractBtn(actions.borrow, EBookIcon, () =>
          bookBtnClickHandler(
            `/api/loan/${id}`,
            user,
            setUser,
            navigate,
            setResponseState,
          ),
        )}
        {getInteractBtn(actions.favorite, HeartIcon, () =>
          bookBtnClickHandler(
            `/api/user/favorite/${id}`,
            user,
            setUser,
            navigate,
            setResponseState,
          ),
        )}
        {getInteractBtn(actions.share, ShareIcon, () =>
          navigator.clipboard.writeText("http://localhost:5173" + pathname),
        )}
      </div>
      <p className="book-page__interact-bar__text">
        {currentAction === null ? "..." : currentAction}
      </p>
      <p className="book-page__interact-bar__text">
        {responseState && currentAction !== actions.share
          ? responseState && responseState.message
          : currentAction === actions.share && "Copied book link to clipboard!"}
      </p>
    </div>
  );
};

export default InteractionBar;
