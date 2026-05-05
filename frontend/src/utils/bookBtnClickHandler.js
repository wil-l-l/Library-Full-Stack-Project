const bookBtnClickHandler = async (
  endpoint,
  setUser,
  navigate,
  setResponseState = null,
) => {
  if (!localStorage.getItem("userJWT")) return navigate("/login");

  let response = await fetch(endpoint, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "x-user-auth-token": localStorage.getItem("userJWT"),
    },
  });
  response = await response.json();
  setResponseState && setResponseState(response);
  response.success && setUser(response.data);
};

export default bookBtnClickHandler;
