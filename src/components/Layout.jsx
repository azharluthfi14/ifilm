import { useLayoutEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import NavMobile from "./NavMobile";

const Layout = () => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);

  const helmetContext = {};

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
        <Navbar />
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
