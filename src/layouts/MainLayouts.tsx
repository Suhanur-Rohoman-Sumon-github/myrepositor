import { Outlet } from "react-router-dom";
import Navbar from "../pages/sharedPages/Navbar/Navbar";
import Footer from "../pages/sharedPages/Footer/Footer";
import ScrollToTop from "../components/ScrollToTop";

const MainLayouts = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <div className="min-h-[calc(100vh-100px)]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayouts;
