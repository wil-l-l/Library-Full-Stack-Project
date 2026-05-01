import AuthPage from "../../components/AuthPage/AuthPage";
import { Link, useNavigate } from "react-router";
import "./LoginPage.css";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  return (
    <AuthPage
      heading={"Log in"}
      subheading={"Log in to use all the features of this app!"}
      endpoint={"login"}
      doOnSuccess={(responseData) => {
        navigate(-1);
        setUser(responseData);
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
