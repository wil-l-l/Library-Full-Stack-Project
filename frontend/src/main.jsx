import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./routes.jsx";
import { BooksProvider } from "./contexts/BooksContext.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";

import "./general.css";
import "./reset.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <BooksProvider>
        <RouterProvider router={router} />
      </BooksProvider>
    </UserProvider>
  </StrictMode>,
);
