import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/BreakCrumb/BreakCrumb";
import Footer from "../components/Footer/Footer";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import ContactUs from "../components/ContactUs/ContactUs";

const ContactPage = () => {
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
            { title: "Contact", href: "contact" },
          ]}
        />
      </div>
      <ContactInfo />
      <ContactUs />
      <Footer />
    </>
  );
};

export default ContactPage;
