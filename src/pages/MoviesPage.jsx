import React from "react";
import RowCardSlider from "../components/RowCardSlider";

const MoviesPage = () => {
  return (
    <div className="mt-5 mb-16 space-y-8">
      <RowCardSlider
        id={1}
        type="movie"
        path="movies"
        title="Popular Movies"
        url={`https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=1`}
      />
      {/* <RowCardMovie
        id={2}
        title="Newest Releases"
        url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=1`}
      /> */}
    </div>
  );
};

export default MoviesPage;
