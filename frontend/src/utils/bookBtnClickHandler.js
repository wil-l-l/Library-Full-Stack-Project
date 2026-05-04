const bookBtnClickHandler = async (endpoint, user, setUser, navigate) => {
  if (!user) return navigate("/login");

  let response = await fetch(endpoint, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: user._id,
    }),
  });
  response = await response.json();
  if (response.success) setUser(response.data);
};

export default bookBtnClickHandler;
