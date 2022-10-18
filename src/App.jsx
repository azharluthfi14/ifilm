import { BrowserRouter, Routes, Route } from "react-router-dom";
// import router from "./router";

import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import DetailMovie from "./pages/DetailMovie";
import SeriesPage from "./pages/SeriesPage";
import DetailSeries from "./pages/DetailSeries";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie" element={<MoviesPage />} />
          <Route path="/movie/:id" element={<DetailMovie />} />
          <Route path="/tv" element={<SeriesPage />} />
          <Route path="tv/:id" element={<DetailSeries />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
