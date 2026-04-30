import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import router from "./routes.jsx";
import { BooksProvider } from "./contexts/BooksContext.jsx";

import "./general.css";
import "./reset.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BooksProvider>
      <RouterProvider router={router} />
    </BooksProvider>
  </StrictMode>,
);
