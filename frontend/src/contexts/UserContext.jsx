import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};

export { UserContext, UserProvider };
