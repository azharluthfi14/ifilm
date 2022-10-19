import React from "react";
import RowCardSlider from "../components/RowCardSlider";

const SeriesPage = () => {
  return (
    <div className="mt-5 mb-16 space-y-8">
      <RowCardSlider
        id={1}
        type="series"
        title="Popular Series"
        url={`https://api.themoviedb.org/3/tv/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=1`}
      />
      <RowCardSlider
        id={2}
        type="series"
        title="Top Rated Series"
        url={`https://api.themoviedb.org/3/tv/top_rated?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&page=1`}
      />

      <RowCardSlider
        id={3}
        type="series"
        title="K-Series"
        url={`https://api.themoviedb.org/3/discover/tv?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&sort_by=popularity.desc&page=1&primary_release_year=2022&with_original_language=ko`}
      />

      <RowCardSlider
        id={4}
        type="series"
        title="Animated Series"
        url={`https://api.themoviedb.org/3/discover/tv?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&with_genres=16`}
      />

      <RowCardSlider
        id={5}
        type="series"
        title="Action & Adventure"
        url={`https://api.themoviedb.org/3/discover/tv?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&with_genres=10759&page=3`}
      />

      <RowCardSlider
        id={6}
        type="series"
        title="Mystery"
        url={`https://api.themoviedb.org/3/discover/tv?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&with_genres=9648`}
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

export default SeriesPage;
