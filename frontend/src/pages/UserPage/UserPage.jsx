import NavBar from "../../components/NavBar/NavBar";
import "./UserPage.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("borrowed");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const listToIterThrough = () =>
    activeTab === "borrowed" ? user.books : user.favorites;

  return (
    <>
      <NavBar />
      <section className="user-page" style={{ marginBottom: " 1000px" }}>
        <div className="user-page__tabs-bar">
          <button
            className={`user-page__tabs-bar__btn user-page__tabs-bar__btn--${"borrowed" === activeTab ? "open" : "closed"} `}
            onClick={() => setActiveTab("borrowed")}
          >
            Borrowed
          </button>
          <button
            className={`user-page__tabs-bar__btn user-page__tabs-bar__btn--${"favorites" === activeTab ? "open" : "closed"} `}
            onClick={() => setActiveTab("favorites")}
          >
            Favorites
          </button>
          <button
            className={`user-page__tabs-bar__btn user-page__tabs-bar__btn--closed `}
            onClick={() => {
              setUser(null);
              localStorage.setItem("user", null);
              navigate("/");
            }}
          >
            Logout
          </button>
        </div>
        <ul className="user-page__active-cards-list">
          {listToIterThrough() &&
            listToIterThrough().length > 0 &&
            listToIterThrough().map(({ title }) => (
              <li className="user-page__active-cards-list__book-card">
                <p>{title}</p>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default UserPage;
