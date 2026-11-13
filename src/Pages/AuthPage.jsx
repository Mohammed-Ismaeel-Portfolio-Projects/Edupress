import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/BreakCrumb/BreakCrumb";
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
            { title: "Contact", path: "contact" },
            { title: "FAQs", path: "faqs" },
          ]}
        />
        <BreakCrumb
          breakLinks={[
            { title: "Homepage", href: "" },
            { title: "Login & Register", href: "auth" },
          ]}
        />
      </div>
      <div className="mt-52 w-11/12 mx-auto mb-16">
        <h1 className="sr-only">Account Authentication - Login and Registration</h1>
        <div className="flex gap-7 max-md:flex-col">
          <Login />
          <Register />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AuthPage;
