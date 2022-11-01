import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { supabase } from "../supabase";
import { useAuth } from "../context/AuthContext";
import Search from "./Search";

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <nav className="py-2 lg:py-4 flex items-center sticky bg-gray-900 border-b border-gray-800 shadow top-0 w-full z-20">
      <div className="layout flex justify-between items-center">
        <div className="flex flex-row space-x-2 lg:space-x-7 items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            aria-expanded={sidebarOpen}
            className="flex md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <NavLink
            to="/"
            className="flex text-base  lg:text-2xl flex-row text-center items-center "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 lg:w-6 lg:h-6 mr-1 text-sky-500"
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
            <li>
              <NavLink
                to="/movie"
                className={({ isActive }) =>
                  [
                    "text-gray-300 hover:text-sky-500 flex items-center",
                    isActive ? "text-sky-500 font-bold" : null,
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mr-1"
                >
                  <path d="M20 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm.001 6c-.001 0-.001 0 0 0h-.465l-2.667-4H20l.001 4zM9.536 9 6.869 5h2.596l2.667 4H9.536zm5 0-2.667-4h2.596l2.667 4h-2.596zM4 5h.465l2.667 4H4V5zm0 14v-8h16l.002 8H4z"></path>
                  <path d="m10 18 5.5-3-5.5-3z"></path>
                </svg>
                Movie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tv"
                className={({ isActive }) =>
                  [
                    "text-gray-300 hover:text-sky-500 flex items-center",
                    isActive ? "text-sky-500 font-bold" : null,
                  ]
                    .filter(Boolean)
                    .join(" ")
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 mr-1"
                >
                  <path d="M20 6h-5.586l2.293-2.293-1.414-1.414L12 5.586 8.707 2.293 7.293 3.707 9.586 6H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM4 19V8h16l.002 11H4z"></path>
                </svg>
                Series
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="flex justify-between items-center space-x-3">
          <Search />
          <div className="hidden md:flex justify-between items-center space-x-3">
            {user ? (
              <>
                <button className="py-1.5 px-5 border border-gray-300 rounded-md">
                  {user?.email}
                </button>

                <button
                  onClick={handleLogout}
                  className="py-1.5 px-5 bg-sky-500 border border-sky-500 rounded-md text-white"
                >
                  Log out
                </button>
              </>
            ) : (
              <>
                <Link to="login">
                  <button className="py-1.5 px-5 border border-gray-300 rounded-md">Login</button>
                </Link>
                <Link to="register">
                  <button className="py-1.5 px-5 bg-sky-500 border border-sky-500 rounded-md text-white">
                    Create Account
                  </button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
