import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLink = [
    { url: "movie", name: "Movies" },
    { url: "tv", name: "Series" },
  ];

  return (
    <nav className="h-16 flex items-center sticky bg-slate-900 border-b border-slate-800 shadow top-0 w-full z-20">
      <div className="layout flex justify-between items-center">
        <div className="flex flex-row space-x-7 items-center">
          <NavLink to="/" className="text-2xl flex items-center font-bold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 mr-1 text-sky-500"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                clipRule="evenodd"
              />
            </svg>

            <span className="text-white tracking-wide">FilmStar</span>
          </NavLink>

          <ul className="hidden md:flex flex-row items-center space-x-8">
            {navLink.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    [
                      "text-gray-300 hover:text-sky-400",
                      isActive ? "text-sky-500 font-bold" : null,
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex md:hidden">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className=" hidden md:flex justify-between items-center space-x-3">
          <button className="py-1.5 px-5 border border-gray-300 rounded-md">
            Login
          </button>
          <button className="py-1.5 px-5 bg-sky-500 border border-sky-500 rounded-md text-white">
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
