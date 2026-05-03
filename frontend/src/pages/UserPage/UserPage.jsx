import NavBar from "../../components/NavBar/NavBar";
import "./UserPage.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import useScrollToTop from "../../hooks/useScrollToTop";
import UserNavBar from "./UserNavBar/UserNavBar";
import BookCard from "../../components/BookCard/BookCard";

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

  const listToIterThrough = () =>
    activeTab === tabs.borrowed
      ? user.books
      : activeTab === tabs.history
        ? user.history
        : user.favorites;

  const bookBtnClickHandler = async (endpoint) => {
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

  return (
    <section
      className="user-page page-padding"
      style={{ marginBottom: " 1000px" }}
    >
      <UserNavBar
        tabs={[tabs.borrowed, tabs.favorites, tabs.history]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <h3 className="user-page__active-tab-text">{activeTab}</h3>
      <div className="user-page__book-cards-box">
        <BookCard title={"The Atomic Habits"} authors={["James Clear"]} />
        <BookCard title={"The Atomic Habits"} authors={["James Clear"]} />
        <BookCard title={"The Atomic Habits"} authors={["James Clear"]} />

        <BookCard title={"The Atomic Habits"} authors={["James Clear"]} />
        <BookCard title={"The Atomic Habits"} authors={["James Clear"]} />
        <BookCard title={"The Atomic Habits"} authors={["James Clear"]} />
      </div>
    </section>
  );
};

export default UserPage;
