import { useState, useEffect } from "react";
import Row from "../components/Row";
import axios from "axios";

const HomePage = () => {
  return (
    <div className="mt-5 mb-16 space-y-8">
      {/* <Banner movie={movie} /> */}
      <Row
        id={1}
        title="Upcoming Movies"
        url={`https://api.themoviedb.org/3/movie/upcoming?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`}
      />
      <Row
        id={2}
        title="Popular Movies"
        url={`https://api.themoviedb.org/3/movie/popular?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1`}
      />
      <Row
        id={3}
        title="Top Rated Movies"
        url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&page=1&include_adult=false`}
      />
    </div>
  );
};

export default HomePage;
