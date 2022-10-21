import { useState, useEffect } from "react";
import RowCardSlider from "../components/RowCardSlider";
import BannerSlider from "../components/BannerSlider";

const HomePage = () => {
  return (
    <>
      <div className="mt-5 mb-3 md:mb-8">
        {/* <Banner movie={movie} /> */}
        {/* <BannerSlider
          url={`https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&region=ID&primary_release_year=2022&year=2022`}
        /> */}
        <BannerSlider
          url={`https://api.themoviedb.org/3/trending/all/week?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`}
        />
      </div>
      <div className="mb-16 space-y-5">
        <RowCardSlider
          id={1}
          type="movie"
          title="Trending Movies"
          url={`https://api.themoviedb.org/3/trending/movie/day?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`}
        />

        <RowCardSlider
          id={2}
          title="Indonesia Movies"
          type="movie"
          url={`https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&release_date.gte=2022-09-01&release_date.lte=2022-10-25&region=ID&page=1`}
        />

        <RowCardSlider
          id={3}
          type="series"
          title="Trending Series"
          url={`https://api.themoviedb.org/3/trending/tv/day?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`}
        />

        <RowCardSlider
          id={4}
          type="movie"
          title="Top Rated Movies"
          url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1`}
        />
      </div>
    </>
  );
};

export default HomePage;
