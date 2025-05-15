import React from "react";
import BreakCrumb from "../components/Breakcrumb/Breakcrumb";
import NavBar from "../components/NavBar/NavBar";
import background from "../assets/images/Frame.png";
import Footer from "../components/Footer/Footer";
const NotFound = () => {
  return (
    <>
      <div className="header fixed top-0 w-full z-50">
        <NavBar
          navLinks={[
            { title: "Home", path: "" },
            { title: "Courses", path: "courses" },
            { title: "Blog", path: "blog" },
            { title: "Page", path: "page" },
            { title: "Premium Theme", path: "premium" },
          ]}
        />
        <BreakCrumb breakLinks={[{ title: "ErrorPage", href: "home" }]} />
      </div>
      <div className=" mt-52 mx-auto w-4/5">
        <h1 className="text-4xl font-exo">Error</h1>
        <img src={background} alt="" className="w-2/3" />
          </div>
          <Footer />
    </>
  );
};

export default NotFound;
