import AuthPage from "../../components/AuthPage/AuthPage";
import { Link, useNavigate } from "react-router";
import "./LoginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <AuthPage
      heading={"Login"}
      subheading={"Log in to use all the features of this app!"}
      endpoint={"login"}
      doOnSuccess={(responseData) => {
        navigate("/");
        localStorage.setItem("userJWT", responseData);
      }}
      outsideChildren={
        <p className="auth-page__outside-form-text">
          Don't have an account? <Link to={"/signup"}>Create one now</Link>
        </p>
      }
    />
  );
};

export default LoginPage;
