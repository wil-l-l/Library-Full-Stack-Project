import InteractButton from "../InteractButton/InteractButton";
import EBookIcon from "../../../assets/icons/ebook.png";
import HeartIcon from "../../../assets/icons/heart.png";
import ShareIcon from "../../../assets/icons/share.png";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { useLocation, useNavigate } from "react-router";

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

  const bookBtnClickHandler = async (endpoint) => {
    if (!user) navigate("/login");

    let response = await fetch(endpoint, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
      }),
    });
    response = await response.json();
    if (response.success) setUser(response.data);
  };

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
          bookBtnClickHandler(`/api/loan/${id}`, "PATCH"),
        )}
        {getInteractBtn(actions.favorite, HeartIcon, () =>
          bookBtnClickHandler(`/api/user/favorite/${id}`, "PATCH"),
        )}
        {getInteractBtn(actions.share, ShareIcon, () =>
          navigator.clipboard.writeText("http://localhost:5173" + pathname),
        )}
      </div>
      <p className="book-page__interact-bar__text">
        {currentAction === null ? "Click a button to start." : currentAction}
      </p>
    </div>
  );
};

export default InteractionBar;
