import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/Breakcrumb/Breakcrumb";
import FAQs from "../components/FAQs/FAQs";
import vector from "./../assets/images/FAQsVector.png";
import Footer from "../components/Footer/Footer";

const FAQsPage = () => {
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
            { title: "FAQs", href: "faqs" },
          ]}
        />
      </div>
      <FAQs />
      <div className="w-11/12 mt-12 mx-auto">
        <img src={vector} alt="" className="w-1/2 max-sm:w-full" />
      </div>
      <Footer />
    </>
  );
};

export default FAQsPage;
