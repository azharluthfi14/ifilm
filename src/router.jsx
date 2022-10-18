import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";

// Movie
import MoviesPage from "./pages/MoviesPage";
import DetailMovie from "./pages/DetailMovie";

// Series
import DetailSeries from "./pages/DetailSeries";
import SeriesPage from "./pages/SeriesPage";

// import DetailPage from "./pages/DetailPage";

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
        path: "movies",
        element: <MoviesPage />,
      },
      {
        path: "tv",
        element: <SeriesPage />,
        children: [
          {
            path: ":id",
            element: <DetailSeries />,
          },
        ],
      },
    ],
  },
  {
    path: "movie",
    element: <Layout />,
    children: [
      {
        path: ":id",
        element: <DetailMovie />,
      },
    ],
  },
]);

export default router;
