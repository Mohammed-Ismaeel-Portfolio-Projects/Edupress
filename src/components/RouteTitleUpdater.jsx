import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import coursesPosts from "./Courses";
import articles from "./Articles.js";

/**
 * RouteTitleUpdater
 * Updates the browser's document.title synchronously with route navigation,
 * resolving dynamic titles for courses, articles, and specialized user pages.
 */
const RouteTitleUpdater = () => {
  const location = useLocation();
  const params = useParams();

  useEffect(() => {
    const pathname = location.pathname;

    // 1. Homepage
    if (pathname === "/" || pathname === "/home") {
      document.title = "EduPress — Modern LMS & Online Learning Platform";
      return;
    }

    // 2. Courses Catalog
    if (pathname === "/courses") {
      const searchParams = new URLSearchParams(location.search);
      const cat = searchParams.get("category");
      const search = searchParams.get("search");

      if (search) {
        document.title = `Search: "${search}" | Courses — EduPress`;
      } else if (cat) {
        const formattedCat = cat.charAt(0).toUpperCase() + cat.slice(1);
        document.title = `${formattedCat} Courses — EduPress`;
      } else {
        document.title = "Explore Courses Catalog — EduPress";
      }
      return;
    }

    // 3. Course Details (/courses/:id)
    if (pathname.startsWith("/courses/")) {
      const courseId = pathname.replace("/courses/", "").split("/")[0];
      const course = coursesPosts.find((c) => c.id === courseId);
      if (course) {
        document.title = `${course.title} — EduPress`;
      } else {
        document.title = "Course Not Found — EduPress";
      }
      return;
    }

    // 4. Articles / Blog Catalog (/blog)
    if (pathname === "/blog") {
      const searchParams = new URLSearchParams(location.search);
      const search = searchParams.get("search");
      const cat = searchParams.get("category");

      if (search) {
        document.title = `Search: "${search}" | Blog — EduPress`;
      } else if (cat) {
        const formattedCat = cat.charAt(0).toUpperCase() + cat.slice(1);
        document.title = `${formattedCat} Articles — EduPress`;
      } else {
        document.title = "Insights & Latest Articles — EduPress";
      }
      return;
    }

    // 5. Blog Single Article (/blog/:id)
    if (pathname.startsWith("/blog/")) {
      const articleId = pathname.replace("/blog/", "").split("/")[0];
      const article = articles.find((a) => String(a.id) === String(articleId));
      if (article) {
        document.title = `${article.title} — EduPress`;
      } else {
        document.title = "Article Not Found — EduPress";
      }
      return;
    }

    // 6. Contact Us
    if (pathname === "/contact") {
      document.title = "Contact Admissions & Support — EduPress";
      return;
    }

    // 7. Frequently Asked Questions
    if (pathname === "/faqs") {
      document.title = "Frequently Asked Questions — EduPress";
      return;
    }

    // 8. Auth (Login & Register)
    if (pathname === "/auth") {
      document.title = "Login & Register — EduPress";
      return;
    }

    // 9. My Wishlist
    if (pathname === "/my-wishlist") {
      document.title = "My Wishlist — EduPress";
      return;
    }

    // 10. My Learning
    if (pathname === "/my-learning") {
      document.title = "My Learning & Enrolled Courses — EduPress";
      return;
    }

    // 11. My Profile
    if (pathname === "/my-profile") {
      document.title = "My Demo Profile — EduPress";
      return;
    }

    // 12. Fallback / 404
    document.title = "Page Not Found (404) — EduPress";
  }, [location.pathname, location.search, params]);

  return null;
};

export default RouteTitleUpdater;
