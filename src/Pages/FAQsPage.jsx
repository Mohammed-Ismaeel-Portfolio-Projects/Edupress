import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/BreakCrumb/BreakCrumb";
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
            { title: "Contact", path: "contact" },
            { title: "FAQs", path: "faqs" },
          ]}
        />
        <BreakCrumb
          breakLinks={[
            { title: "Homepage", href: "" },
            { title: "FAQs", href: "faqs" },
          ]}
        />
      </div>
      <div className="mt-52">
        <div className="w-11/12 mx-auto mb-8">
          <h1 className="text-3xl md:text-4xl font-exo font-bold text-black">
            Frequently Asked Questions
          </h1>
          <p className="text-gray text-base mt-2">
            Find answers to common questions about courses, enrollment, and our learning platform.
          </p>
        </div>
        <FAQs />
        <div className="w-11/12 mt-12 mx-auto">
          <img src={vector} alt="Frequently asked questions illustration" className="w-1/2 max-sm:w-full" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default FAQsPage;
