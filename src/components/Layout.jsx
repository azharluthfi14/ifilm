import { useLayoutEffect, useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import TopBarProgress from "react-topbar-progress-indicator";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import NavMobile from "./NavMobile";

const Layout = () => {
  const location = useLocation();
  TopBarProgress.config({
    barColors: {
      0: "#0ea5e9",
      "1.0": "#0ea5e9",
    },
    shadowBlur: 1,
  });
  const helmetContext = {};

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState("");

  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    setPrevLoc(location);
    setProgress(true);
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);

  return (
    <>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Filmstar - Watch Movies Online, Watch TV Series Online</title>
          <meta
            content="watch movies, movies online, watch TV, TV online, TV shows online, watch TV shows, stream movies, stream tv, instant streaming, watch online, movies, watch movies Indonesia, watch TV online, no download, full length movies"
            name="keywords"
          />
          <meta
            name="description"
            content="Watch movies & TV shows online or stream right to your smart TV, game console, PC, Mac, mobile, tablet and more."
          />
        </Helmet>
        {progress && <TopBarProgress />}
        <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <div className="layout">
          <Outlet />
        </div>
        <Footer />
        <NavMobile />
      </HelmetProvider>
    </>
  );
};

export default Layout;
