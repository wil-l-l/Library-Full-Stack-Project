import { createBrowserRouter } from "react-router";

import HomePage from "./pages/HomePage";

const router = createBrowserRouter([{ element: <HomePage />, path: "/" }]);

export default router;
