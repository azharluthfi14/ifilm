import { Link } from "react-router-dom";

const CardMovie = ({ item }) => {
  return (
    <Link
      to={`/movie/${item.id}`}
      className="rounded-lg mt-3.5 max-w-lg max-h-2xl w-full h-full sm:h-48 lg:h-52 relative 
        inline-block overflow-hidden cursor-pointer"
    >
      {item.poster_path && item.poster_path ? (
        <img
          className="w-full h-full max-w-[300px] max-h-[450px] object-cover overflow-hidden"
          src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
          alt={item.name}
          loading="lazy"
          width="300"
          height="450"
        />
      ) : (
        <div className="flex items-center justify-center h-full border border-slate-500 border-dashed overflow-hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-slate-500"
          >
            <path
              fillRule="evenodd"
              d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
      <div
        className="absolute hidden md:flex flex-col justify-end top-0 p-2.5 left-0 w-full h-full hover:bg-gradient-to-t from-gray-800 overflow-hidden 
          opacity-0 hover:opacity-100 text-white"
      >
        <p className="white-space-normal text-xs font-bold">{item.name}</p>
        <p className="text-xs font-light">{item.overview.slice(0, 50) ?? "no data"}...</p>
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

export default CardMovie;
