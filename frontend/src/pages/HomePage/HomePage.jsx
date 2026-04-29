import "./HomePage.css";
import NavBar from "../../components/NavBar/NavBar";
import TrendingSlides from "../../components/TrendingSlides/TrendingSlides";
import GenericSlides from "../../components/GenericSlides/GenericSlides";
import { useState } from "react";

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <p>Application is loading...</p>
  ) : (
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
