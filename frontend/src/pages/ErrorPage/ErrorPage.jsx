import { useNavigate } from "react-router";
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <section className="error-page">
      <h3>Can't find the page your looking for.</h3>
      <p>Please return home!</p>
      <button
        className="white-black-btn error-page__btn"
        onClick={() => navigate("/")}
      >
        HOME
      </button>
    </section>
  );
};

export default ErrorPage;
