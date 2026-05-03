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
  const { user } = useContext(UserContext);

  useScrollToTop();

  const listToIterThrough = () =>
    activeTab === tabs.borrowed
      ? user.books
      : activeTab === tabs.history
        ? user.history
        : user.favorites;

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
      <h3 className="user-page__active-tab-text">{activeTab}</h3>
      <div className="user-page__book-cards-box">
        {listToIterThrough() &&
          listToIterThrough().length > 0 &&
          listToIterThrough().map(({ title, authors, _id }) => (
            <BookCard title={title} authors={authors} _id={_id} />
          ))}
        {!listToIterThrough() && <p>{activeTab} shelf is empty</p>}
      </div>
    </section>
  );
};

export default UserPage;
