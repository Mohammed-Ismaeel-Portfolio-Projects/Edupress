import React from "react";
import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/Breakcrumb/Breakcrumb";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Footer from "../components/Footer/Footer";

const AuthPage = () => {
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
            { title: "Login & Register", href: "auth" },
          ]}
        />
      </div>
      <div className="mt-52 w-11/12 mx-auto flex gap-7 mb-16 max-md:flex-col">
        <Login />
        <Register />
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
