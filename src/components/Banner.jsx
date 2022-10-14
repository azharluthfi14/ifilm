import React from "react";

const Banner = ({ movie }) => {
  return (
    <div className="w-full bg-slate-800 flex justify-between rounded-lg overflow-hidden h-96">
      <div className="flex flex-col justify-center p-5">
        <h1>{movie?.title}</h1>
        <p>{movie?.overview}</p>
      </div>
      <div className="">
        <img
          className="object-cover w-full h-full"
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt="banner-bg"
        />
      </div>
    </div>
  );
};

export default Banner;
