import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import TrendingSlides from "../../components/TrendingSlides/TrendingSlides";
import GenericSlides from "../../components/GenericSlides/GenericSlides";

function HomePage() {
  return (
    <>
      <NavBar />
      <main>
        <TrendingSlides />
        <GenericSlides title={"Popular Ebooks"} />
        <GenericSlides title={"Popular Audiobooks"} />
        <GenericSlides title={"Popular Comics"} />
        <p>HomePage</p>
      </main>
    </>
  );
}

export default HomePage;
