import "./AuthPage.css";
import { useRef, useState } from "react";
import { Link } from "react-router";

const AuthPage = ({
  heading,
  subheading,
  endpoint,
  doOnSuccess = null,
  showOnSuccess = null,
  outsideChildren,
}) => {
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const [authResponse, setAuthResponse] = useState(null);

  const clearForm = () => {
    usernameRef.current.value = "";
    passwordRef.current.value = "";
  };

  authResponse && authResponse.success === false && console.log(authResponse);

  const submitAuthForm = async (e, username, password) => {
    e.preventDefault();

    let response = await fetch(`/api/${endpoint}`, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await response.json();
  };

  return (
    <div className="auth-page">
      <form
        action=""
        className="auth-form"
        onSubmit={async (e) => {
          const response = await submitAuthForm(
            e,
            usernameRef.current.value,
            passwordRef.current.value,
          );
          setAuthResponse(response);
          if (response.success) {
            clearForm();
            doOnSuccess && doOnSuccess();
          }
        }}
      >
        <h2 className="auth-page__main-heading">{heading}</h2>
        <p className="auth-page__features-text">{subheading}</p>
        <input
          type="text"
          placeholder="Username"
          className="auth-form__input-field"
          ref={usernameRef}
        />
        <input
          type="password"
          placeholder="Password"
          className="auth-form__input-field"
          ref={passwordRef}
        />
        <button type="submit" className="auth-page__btn">
          {heading}
        </button>
        {authResponse && authResponse.success === true && showOnSuccess}
        {authResponse && authResponse.success === false && (
          <p className="error-text">{authResponse.message}</p>
        )}
      </form>
      {outsideChildren}
    </div>
  );
};

export default AuthPage;
