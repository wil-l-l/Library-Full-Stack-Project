import { useRef } from "react";
import "./SignupPage.css";
import { Link } from "react-router";

const SignupPage = () => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  return (
    <div className="signup-page">
      <form
        action=""
        className="signup-form"
        onSubmit={async (e) => {
          e.preventDefault();

          let response = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify({
              username: usernameRef.current.value,
              password: passwordRef.current.value,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          response = await response.json();
          console.log(response);

          usernameRef.current.value = "";
          passwordRef.current.value = "";
        }}
      >
        <h2 className="signup-page__main-heading">Sign up</h2>
        <p className="signup-page__features-text">
          Sign up to borrow books online!
        </p>
        <input
          type="text"
          placeholder="Username"
          className="signup-form__input-field"
          ref={usernameRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="signup-form__input-field"
          ref={passwordRef}
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
