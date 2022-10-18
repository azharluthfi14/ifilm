import React from "react";

const Banner = ({ movie }) => {
  return (
    <div className="rounded-xl flex relative h-full md:h-[400px] bg-slate-800 overflow-hidden justify-between mt-5 mb-3">
      <div
        className="hidden md:flex z-10 relative flex-col justify-center  px-12 md:w-5/12 h-full 
   "
      >
        <h1 className="mb-2 text-3xl text-white font-bold">{movie?.title}</h1>
        <ul className="flex items-center flex-row mb-5 space-x-3">
          {movie?.adult ? <li>18+</li> : <li>PG-13</li>}
          <li>{movie?.release_date.slice(0, 4)}</li>
          <li className="flex items-center">
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
          </li>
        </ul>

        {movie?.overview.length > 350 ? (
          <p className="w-[550px] font-base leading-relaxed text-gray-300">
            {movie?.overview.slice(0, 300)}...
          </p>
        ) : (
          <p className="w-[550px] font-base leading-relaxed text-gray-300">
            {movie?.overview}
          </p>
        )}
      </div>
      <div className="absolute hidden md:block w-[800px] h-full bg-gradient-to-r from-slate-800 to-transparent left-[37vw]"></div>
      <div className="w-full md:w-7/12">
        <img
          src={`https://image.tmdb.org/t/p/w1280/${movie?.backdrop_path}`}
          alt="banner-movie"
          loading="lazy"
          className="w-full h-full object-contain md:object-cover"
        />
      </div>
    </div>
  );
};

export default Banner;
