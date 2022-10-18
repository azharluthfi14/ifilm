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
          <NavLink to="/" className="text-lg font-bold text-white">
            <img
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
              alt=""
              className="w-28"
            />
          </NavLink>

          <ul className="hidden md:flex flex-row items-center space-x-8">
            {navLink.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.url}
                  className={({ isActive }) =>
                    [
                      "text-gray-300",
                      isActive ? "text-violet-500 font-bold" : null,
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
