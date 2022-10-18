import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import NavMobile from "./NavMobile";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Outlet />
      </div>
      <NavMobile />
    </>
  );
};

export default Layout;
