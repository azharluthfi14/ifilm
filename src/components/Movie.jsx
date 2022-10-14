import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ item }) => {
  return (
    <Link
      to={`${item?.id}`}
      className="rounded-lg h-36 lg:h-52 w-full relative 
    inline-block mt-5 overflow-hidden cursor-pointer"
    >
      <img
        className="w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
        alt={item?.title}
      />
      <div
        className="absolute hidden md:flex flex-col justify-end top-0 p-2.5 left-0 w-full h-full hover:bg-gradient-to-t from-gray-800 overflow-hidden 
      opacity-0 hover:opacity-100 text-white"
      >
        <p className="white-space-normal text-xs font-bold">{item?.title}</p>
        <p className="text-xs font-light">{item?.overview.slice(0, 50)}...</p>

        {/* <div className="absolute top-2 right-2 text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </div> */}

        <div className="mt-1">
          <button className="font-bold flex items-center whitespace-nowrap text-xs py-1.5 px-2.5 w-full rounded-md hover:bg-black/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
            Save to watchlist
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Movie;
