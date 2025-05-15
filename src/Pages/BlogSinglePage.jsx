import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/Breakcrumb/Breakcrumb";
import Footer from "../components/Footer/Footer";
import BlogSingle from "../components/BlogSingle/BlogSingle";
import articles from "../components/Articles";
import { useParams } from "react-router-dom";

const BlogSinglePage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    if (articles && articles.length > 0) {
      const foundArticle = articles.find(
        (e) => e.id.toString() === id.toString()
      );
      setArticle(foundArticle || null);
    }
  }, [id]);

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
            { title: "Blog", href: "blog" },
            { title: article?.title, href: "" },
          ]}
        />
      </div>
      <BlogSingle article={article} />
      <Footer />
    </>
  );
};

export default BlogSinglePage;
