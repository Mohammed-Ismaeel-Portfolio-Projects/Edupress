import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/Breakcrumb/Breakcrumb";
import Footer from "../components/Footer/Footer";
import Articles from "../components/Articles/Articles";

const BlogPage = () => {
  return (
    <>
      <div className="header fixed top-0 w-full z-50">
        <NavBar
          navLinks={[
            { title: "Home", path: "" },
            { title: "Courses", path: "Courses" },
            { title: "Blog", path: "Blog" },
            { title: "Page", path: "Page" },
            { title: "Premium Theme", path: "Premium" },
          ]}
        />
        <BreakCrumb
          breakLinks={[
            { title: "Homepage", href: "home" },
            { title: "Blog", href: "blog" },
          ]}
        />
      </div>
      <Articles />
      <Footer />
    </>
  );
};

export default BlogPage;
