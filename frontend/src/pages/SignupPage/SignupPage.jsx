import "./SignupPage.css";
import { Link } from "react-router";

const SignupPage = () => {
  return (
    <div className="signup-page">
      <form action="" className="signup-form">
        <h2 className="signup-page__main-heading">Sign up</h2>
        <p className="signup-page__features-text">
          Sign up to borrow books online!
        </p>
        <input
          type="text"
          placeholder="Username"
          className="signup-form__input-field"
        />
        <input
          type="password"
          placeholder="Password"
          className="signup-form__input-field"
        />
        <button type="submit" className="signup-page__submit-btn">
          Sign up
        </button>
      </form>

      <p className="signup-page__sign-in-text">
        Already have an account? <Link>Sign in</Link>
      </p>
    </div>
  );
};

export default SignupPage;
