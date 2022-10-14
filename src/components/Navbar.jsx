import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center sticky bg-slate-900 border-b border-slate-800 shadow top-0 w-full z-20">
      <div className="layout flex justify-between items-center">
        <div className="flex flex-row space-x-7 items-center">
          <Link to="/" className="text-lg font-bold text-white">
            IFILM
          </Link>

          <ul className="hidden md:flex flex-row items-center space-x-8">
            <li>
              <Link to="/" className="hover:text-violet-500 text-gray-300">
                Movies
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-violet-500 text-gray-300">
                Series
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-violet-500 text-gray-300">
                Originals
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-violet-500 text-gray-300">
                Kids
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-violet-500 text-gray-300">
                Networks
              </Link>
            </li>
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
          <button className="py-1.5 px-5 bg-violet-500 border border-violet-500 rounded-md text-white">
            Create Account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
