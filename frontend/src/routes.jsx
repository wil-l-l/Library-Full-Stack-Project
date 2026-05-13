import { createBrowserRouter } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import BookPage from "./pages/BookPage/BookPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import UserPage from "./pages/UserPage/UserPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  { element: <HomePage />, path: "/", errorElement: <ErrorPage /> },
  {
    element: <HomePage />,
    path: "/home",
    errorElement: <ErrorPage />,
  },
  { element: <SearchPage />, path: "/search", errorElement: <ErrorPage /> },
  { element: <BookPage />, path: "/book/:id", errorElement: <ErrorPage /> },
  { element: <SignupPage />, path: "/signup", errorElement: <ErrorPage /> },
  { element: <LoginPage />, path: "/login", errorElement: <ErrorPage /> },
  { element: <UserPage />, path: "/user", errorElement: <ErrorPage /> },
]);

export default router;
