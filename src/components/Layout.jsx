import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavMobile from "./NavMobile";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
      <NavMobile />
    </>
  );
};

export default Layout;
