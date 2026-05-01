import NavBar from "../../components/NavBar/NavBar";
import "./UserPage.css";
import { useState } from "react";

const UserPage = () => {
  const [activeTab, setActiveTab] = useState("borrowed");

  return (
    <>
      <NavBar />
      <section className="user-page">
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
        </div>
      </section>
    </>
  );
};

export default UserPage;
