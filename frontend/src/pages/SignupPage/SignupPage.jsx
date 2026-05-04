import AuthPage from "../../components/AuthPage/AuthPage";
import { Link, useNavigate } from "react-router";
import "./SignupPage.css";

const SignupPage = () => {
  const navigate = useNavigate();

  return (
    <AuthPage
      heading={"Signup"}
      subheading={"Sign up to borrow books online!"}
      endpoint={"signup"}
      showOnSuccess={
        <button className="auth-page__btn" onClick={() => navigate("/login")}>
          Go Back to Login Page!
        </button>
      }
      outsideChildren={
        <p className="auth-page__outside-form-text">
          Already have an account? <Link to={"/login"}>Sign in</Link>
        </p>
      }
    />
  );
};

export default SignupPage;
