import { createBrowserRouter } from "react-router";

import HomePage from "./pages/HomePage/HomePage";
import SearchPage from "./pages/SearchPage/SearchPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import MediaPage from "./pages/MediaPage/MediaPage";

const router = createBrowserRouter([
  { element: <HomePage />, path: "/" },
  {
    element: <HomePage />,
    path: "/home",
  },
  { element: <SearchPage />, path: "/search" },
  { element: <ProfilePage />, path: "/profile" },
  { element: <MediaPage />, path: "/book/:id" },
]);

export default router;
