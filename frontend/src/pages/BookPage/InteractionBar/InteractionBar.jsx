import InteractButton from "../InteractButton/InteractButton";
import EBookIcon from "../../../assets/icons/ebook.png";
import HeartIcon from "../../../assets/icons/heart.png";
import ShareIcon from "../../../assets/icons/share.png";
import { useState } from "react";

const InteractionBar = () => {
  const actions = {
    borrow: "Borrow",
    favorite: "Favorite",
    share: "Share",
  };

  const [currentAction, setCurrentAction] = useState(actions.borrow);

  const getInteractBtn = (action, icon) => (
    <InteractButton
      action={action}
      setCurrentAction={setCurrentAction}
      currentAction={currentAction}
      icon={icon}
    />
  );

  return (
    <div className="book-page__interaction-box">
      <div className="book-page__interact-bar horizontal-scroll-box ">
        {getInteractBtn(actions.borrow, EBookIcon)}
        {getInteractBtn(actions.favorite, HeartIcon)}
        {getInteractBtn(actions.share, ShareIcon)}
      </div>
      <p className="book-page__interact-bar__text">{currentAction}</p>
    </div>
  );
};

export default InteractionBar;
