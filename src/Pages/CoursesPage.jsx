import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/Breakcrumb/Breakcrumb";
import Courses from "../components/Courses/Courses";
import Footer from "../components/Footer/Footer";

const CoursesPage = () => {
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
        <BreakCrumb
          breakLinks={[
            { title: "Homepage", href: "home" },
            { title: "Courses", href: "courses" },
          ]}
        />
      </div>
      <Courses />
      <Footer />
    </>
  );
};

export default CoursesPage;
