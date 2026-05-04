import NavBar from "../../components/NavBar/NavBar";
import "./UserPage.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import useScrollToTop from "../../hooks/useScrollToTop";
import UserNavBar from "./UserNavBar/UserNavBar";
import BookCard from "../../components/BookCard/BookCard";
import BookIcon from "../../assets/icons/ebook.png";
import HeartIcon from "../../assets/icons/heart.png";
import bookBtnClickHandler from "../../utils/bookBtnClickHandler";

const UserPage = () => {
  const tabs = {
    borrowed: "Borrowed",
    favorites: "Favorites",
    history: "History",
  };

  const [activeTab, setActiveTab] = useState(tabs.borrowed);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useScrollToTop();

  useEffect(() => {
    !user && navigate("/login");
  }, [user, navigate]);

  const listToIterThrough = () =>
    activeTab === tabs.borrowed
      ? user.books
      : activeTab === tabs.history
        ? user.history
        : user.favorites;

  const getActionBtn = (_id) => {
    const interactBtn = {};

    if (activeTab === tabs.borrowed) {
      interactBtn.icon = BookIcon;
      interactBtn.onClickHandler = () => {
        bookBtnClickHandler(`/api/loan/return/${_id}`, user, setUser, navigate);
      };
    } else if (activeTab === tabs.favorites) {
      interactBtn.icon = HeartIcon;
      interactBtn.onClickHandler = () =>
        bookBtnClickHandler(
          `/api/user/unfavorite/${_id}`,
          user,
          setUser,
          navigate,
        );
    }

    return interactBtn;
  };

  return (
    <section
      className="user-page page-padding"
      style={{ marginBottom: " 1000px" }}
    >
      <NavBar />
      <UserNavBar
        tabs={[tabs.borrowed, tabs.favorites, tabs.history]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="user-page__active-tab-box">
        <h3 className="user-page__active-tab-text">{activeTab}</h3>
        <button
          className="user-page__active-tab-box__logout-btn white-black-btn"
          onClick={() => {
            setUser(null);
            localStorage.setItem("user", null);
            navigate("/");
          }}
        >
          Logout
        </button>
      </div>
      {user && (
        <div className="user-page__book-cards-box">
          {listToIterThrough() &&
            listToIterThrough().length > 0 &&
            listToIterThrough().map(({ title, authors, _id }, index) => (
              <BookCard
                title={title}
                authors={authors}
                _id={_id}
                enableButtons={getActionBtn(_id)}
                key={_id + index}
              />
            ))}
          {!listToIterThrough() && <p>{activeTab} shelf is empty</p>}
        </div>
      )}
    </section>
  );
};

export default UserPage;
