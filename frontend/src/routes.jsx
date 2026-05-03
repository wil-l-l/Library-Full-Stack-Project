import { createBrowserRouter } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import BookPage from "./pages/BookPage/BookPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";

const router = createBrowserRouter([
  { element: <HomePage />, path: "/" },
  {
    element: <HomePage />,
    path: "/home",
  },
  { element: <SearchPage />, path: "/search" },
  { element: <BookPage />, path: "/book/:id" },
  { element: <SignupPage />, path: "/signup" },
  { element: <LoginPage />, path: "/login" },
  { element: <UserPage />, path: "/user" },
]);

export default router;
