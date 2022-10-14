import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/:id",
        element: <DetailPage />,
      },
    ],
  },
]);

export default router;
