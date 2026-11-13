import BreakCrumb from "../components/BreakCrumb/BreakCrumb";
import NavBar from "../components/NavBar/NavBar";
import background from "../assets/images/Frame.webp";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
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
        <BreakCrumb breakLinks={[{ title: "Homepage", href: "" }, { title: "404 Not Found", href: "" }]} />
      </div>
      <div className="mt-52 mx-auto w-11/12 max-w-4xl text-center py-12">
        <h1 className="text-5xl font-exo font-bold text-black mb-4">404 - Page Not Found</h1>
        <p className="text-gray text-lg mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="mb-8 flex justify-center">
          <img src={background} alt="Page not found illustration" className="max-w-md w-full rounded-2xl" />
        </div>
        <Link
          to="/"
          className="inline-block bg-orange text-white font-medium rounded-3xl py-3 px-8 text-lg hover:opacity-90 transition-opacity"
        >
          Back to Homepage
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
