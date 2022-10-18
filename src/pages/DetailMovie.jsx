import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import moment from "moment/moment";

const DetailMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US&append_to_response=videos`
      );
      setMovie(response.data);
    };
    getData();
  }, []);

  let duration = moment
    .utc(moment.duration(movie.runtime, "minutes").asMilliseconds())
    .format("h [hr] m [min]");

  return (
    <div className="rounded-xl flex relative h-full md:h-[400px] bg-slate-800 overflow-hidden justify-between mt-5 mb-3">
      <div
        className="hidden md:flex z-10 relative flex-col justify-center  px-8 md:w-5/12 h-full 
 "
      >
        <h1 className="mb-2 text-3xl text-white font-bold">{movie?.title}</h1>
        <ul className="flex flex-row mb-5 space-x-3">
          <li>{duration}</li>
          <li>{movie?.release_date?.slice(0, 4)}</li>
          {movie?.genres?.map((home, i) => (
            <li key={i}>{home.name}</li>
          ))}
        </ul>
        <p className="w-[650px] leading-relaxed text-gray-300">
          {movie?.overview}
        </p>
        <button className="bg-sky-500 text-white w-max rounded-md flex items-center py-2 px-5">
          Watch Trailer
        </button>
      </div>
      <div className="absolute hidden md:block w-[800px] h-full bg-gradient-to-r from-slate-800 to-transparent left-[37vw]"></div>
      <div className="w-full md:w-7/12">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
          alt="banner-movie"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>
    </div>
  );
};

export default DetailMovie;
