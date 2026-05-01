import { createBrowserRouter } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MediaPage from "./pages/MediaPage/MediaPage";
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
  { element: <ProfilePage />, path: "/profile" },
  { element: <MediaPage />, path: "/book/:id" },
  { element: <SignupPage />, path: "/signup" },
  { element: <LoginPage />, path: "/login" },
  { element: <UserPage />, path: "/user" },
]);

export default router;
