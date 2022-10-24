import React from "react";
import { Link } from "react-router-dom";
import { slugWithId } from "../utils/generateSlug";

const Banner = ({ movie }) => {
  return (
    <Link
      to={`/${movie.media_type}/${slugWithId(movie.title || movie.name, movie.id)}`}
      className="rounded-xl flex overflow-hidden relative h-full md:h-[400px] bg-[#030b17] justify-between"
    >
      <div
        className="hidden md:flex z-10 relative flex-col justify-center px-12 md:w-5/12 h-full 
   "
      >
        <h1 className="mb-2 text-3xl text-white font-bold">
          {movie?.title} {movie?.name}
        </h1>
        <ul className="flex items-center flex-row mb-5 space-x-3">
          {movie?.adult ? <li>18+</li> : <li>PG-13</li>}
          <li>
            {movie?.release_date?.slice(0, 4)} {movie?.first_air_date?.slice(0, 4)}
          </li>
          {/* <li className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 mr-1 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-lg">{movie?.vote_average}</span>
          </li> */}
        </ul>

        {movie?.overview.length > 350 ? (
          <p className="w-[550px] font-base leading-relaxed text-gray-300">
            {movie?.overview.slice(0, 250)}..
          </p>
        ) : (
          <p className="w-[550px] font-base leading-relaxed text-gray-300">{movie?.overview}</p>
        )}
      </div>
      <div
        className="absolute md:block w-[800px] h-full bg-gradient-to-t md:bg-gradient-to-r 
      from-[#030b17] to-transparent md:left-[37vw]"
      ></div>
      <div className="w-full md:w-7/12">
        {movie?.backdrop_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w780/${movie?.backdrop_path}`}
            alt="banner-movie"
            loading="lazy"
            width="1100"
            height="616"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src={`https://via.placeholder.com/150/1e293b/FFF?text=No+Data`}
            alt="banner-movie"
            loading="lazy"
            className="w-full h-full object-contain md:object-cover"
          />
        )}
      </div>
      <div className="md:hidden absolute bottom-1 p-3.5">
        <h4 className="text-slate-200 mb-1 text-sm">
          {movie?.name} {movie.title}
        </h4>
        {movie?.overview.length > 150 ? (
          <p className="text-xs font-base text-slate-300">{movie?.overview.slice(0, 100)}...</p>
        ) : (
          <p className="font-base text-xs text-slate-300">{movie?.overview}</p>
        )}
      </div>
    </Link>
  );
};

export default Banner;
