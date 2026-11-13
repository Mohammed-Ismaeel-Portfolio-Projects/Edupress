import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/BreakCrumb/BreakCrumb";
import Footer from "../components/Footer/Footer";
import BlogSingle from "../components/BlogSingle/BlogSingle";
import articles from "../components/Articles.js";
import { useParams, Link } from "react-router-dom";

const BlogSinglePage = () => {
  const { id } = useParams();
  const article = articles?.find((e) => e.id.toString() === id?.toString()) || null;

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
            { title: "Blog", href: "blog" },
            { title: article?.title || "Article Details", href: "" },
          ]}
        />
      </div>
      {!article ? (
        <div className="mt-52 mx-auto w-11/12 text-center py-20">
          <h2 className="text-3xl font-exo font-bold text-black mb-4">Article Not Found</h2>
          <p className="text-gray text-lg mb-6">The article you are looking for does not exist or has been removed.</p>
          <Link to="/blog" className="inline-block bg-orange text-white font-medium rounded-3xl py-3 px-8 hover:opacity-90">
            Back to Articles
          </Link>
        </div>
      ) : (
        <BlogSingle article={article} />
      )}
      <Footer />
    </>
  );
};

export default BlogSinglePage;
