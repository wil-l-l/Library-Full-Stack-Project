import NavBar from "../../components/NavBar/NavBar";
import "./UserPage.css";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router";
import useScrollToTop from "../../hooks/useScrollToTop";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("borrowed");
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  useScrollToTop();

  const listToIterThrough = () =>
    activeTab === "borrowed"
      ? user.books
      : activeTab === "history"
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
            className={`user-page__tabs-bar__btn user-page__tabs-bar__btn--${"history" === activeTab ? "open" : "closed"} `}
            onClick={() => setActiveTab("history")}
          >
            History
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
            listToIterThrough().map(({ title, _id }) => (
              <li
                className="user-page__active-cards-list__book-card"
                onClick={() => navigate(`/book/${_id}`)}
              >
                <p>{title}</p>
                {activeTab === "borrowed" && (
                  <button
                    onClick={() =>
                      bookBtnClickHandler(`/api/loan/return/${_id}`)
                    }
                  >
                    Return
                  </button>
                )}
                {activeTab === "favorites" && (
                  <button
                    onClick={() =>
                      bookBtnClickHandler(`/api/user/unfavorite/${_id}`)
                    }
                  >
                    Unfavorite
                  </button>
                )}
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};

export default UserPage;
