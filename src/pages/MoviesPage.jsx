import React from "react";
import RowCardSlider from "../components/RowCardSlider";

const MoviesPage = () => {
  return (
    <>
      <div className="mt-5 mb-16 space-y-8">
        <RowCardSlider
          id={1}
          type="movie"
          title="Popular Movies"
          url={`https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1`}
        />

        <RowCardSlider
          id={2}
          type="movie"
          title="Upcoming Movies"
          url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1`}
        />
        <RowCardSlider
          id={3}
          title="Marvel Cinematic"
          type="movie"
          url={`https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1&with_companies=420`}
        />
        <RowCardSlider
          id={4}
          title="Horror & Thriller"
          type="movie"
          url={`https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1&with_genres=27,53`}
        />
        <RowCardSlider
          id={5}
          title="Action & Adventure"
          type="movie"
          url={`https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1&with_genres=28,12`}
        />
        <RowCardSlider
          id={6}
          title="Best of Drama"
          type="movie"
          url={`https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1&with_genres=18`}
        />
        <RowCardSlider
          id={7}
          title="Sci-Fi Movies"
          type="movie"
          url={`https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1&with_genres=878`}
        />
        <RowCardSlider
          id={8}
          title="Comedy Hits"
          type="movie"
          url={`https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1&with_genres=35`}
        />
        <RowCardSlider
          id={9}
          title="History & Documentary"
          type="movie"
          url={`https://api.themoviedb.org/3/discover/movie?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&page=1&with_genres=36,99`}
        />
      </div>
    </>
  );
};

export default MoviesPage;
