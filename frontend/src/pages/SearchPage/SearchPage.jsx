import "./SearchPage.css";
import NavBar from "../../components/NavBar/NavBar";

const SearchPage = () => {
  return (
    <>
      <NavBar />
      <main className="search-page">
        <input
          type="text"
          placeholder="Search"
          className="search-page__search-input"
        />
        <ul className="search-page__trending-list">
          Trending Searches
          <li className="underline-on-hover">Placeholder Text</li>
          <li className="underline-on-hover">Placeholder Text</li>
          <li className="underline-on-hover">Placeholder Text</li>
        </ul>
      </main>
    </>
  );
};

export default SearchPage;
