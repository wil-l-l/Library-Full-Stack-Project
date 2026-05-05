import { useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function useUser() {
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    const getUser = async () => {
      if (!localStorage.getItem("userJWT")) return;

      const response = await fetch("/api/user/me", {
        method: "GET",
        headers: {
          "x-user-auth-token": localStorage.getItem("userJWT"),
        },
      });
      const userData = await response.json();
      setUser(userData);
    };
    getUser();
  }, [setUser]);
}

export default useUser;
