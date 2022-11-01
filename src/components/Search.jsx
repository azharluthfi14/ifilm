import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim().length !== 0) {
      navigate(`/search?q=${query}`);
    }
    setQuery("");
  };

  return (
    <form autoComplete="off" onSubmit={handleSearch} className="relative md:block">
      <div className="flex absolute inset-y-0 left-0 items-center group pl-3 pointer-events-none">
        <svg
          className="w-4 h-4 lg:w-5 lg:h-5 text-gray-100"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="search"
        value={query || ""}
        onChange={(event) => setQuery(event.target.value)}
        id="search-navbar"
        className="block p-3 pl-8 w-10 focus:w-[55vw] lg:p-2 lg:pl-10 lg:w-52 lg:focus:w-[30vw] duration-300 ease-in-out placeholder:text-gray-100 text-gray-100
         bg-transparent lg:bg-gray-800 focus:bg-gray-900 rounded-lg border border-transparent lg:border-gray-800 focus:ring-blue-500 
         focus:border-blue-500 placeholder:text-xs placeholder:lg:text-base text-xs lg:text-base"
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
