import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/BreakCrumb/BreakCrumb";
import Footer from "../components/Footer/Footer";
import FeaturedCard from "../components/FeaturedCard/FeaturedCard";
import coursesPosts from "../components/Courses.js";
import { useDemoStore } from "../context/DemoStoreContext";
import { FaHeart, FaCircleInfo } from "react-icons/fa6";

const MyWishlistPage = () => {
  const { wishlistCourseIds, user } = useDemoStore();

  const wishlistedCourses = coursesPosts.filter((c) =>
    wishlistCourseIds.includes(c.id)
  );

  const navLinks = [
    { title: "Home", path: "" },
    { title: "Courses", path: "courses" },
    { title: "Blog", path: "blog" },
    { title: "Contact", path: "contact" },
    { title: "FAQs", path: "faqs" },
  ];

  const breakLinks = [
    { title: "Homepage", href: "" },
    { title: "My Wishlist", href: "my-wishlist" },
  ];

  return (
    <>
      <div className="header fixed top-0 w-full z-50">
        <NavBar navLinks={navLinks} />
        <BreakCrumb breakLinks={breakLinks} />
      </div>

      <div className="mt-52 mx-auto w-11/12 mb-16">
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-exo font-bold text-black flex items-center gap-3">
              <FaHeart className="text-red-500" size={30} aria-hidden="true" />
              <span>My Wishlist</span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {user ? `Saved courses for ${user.name}` : "Courses saved in your local browser"} •{" "}
              <span className="font-semibold text-black">{wishlistedCourses.length}</span> course
              {wishlistedCourses.length === 1 ? "" : "s"}
            </p>
          </div>

          <Link
            to="/courses"
            className="text-sm font-semibold text-orange hover:underline self-start md:self-auto"
          >
            Explore Catalog →
          </Link>
        </div>

        {/* Demo Persistence Notice */}
        <div className="mb-8 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3 text-xs text-slate-700 leading-relaxed">
          <FaCircleInfo className="text-orange shrink-0" size={15} aria-hidden="true" />
          <p>
            <strong className="font-semibold">Local Demo Storage:</strong> Your wishlist items are saved in this browser&apos;s localStorage and survive page refreshes. No external database or account is required.
          </p>
        </div>

        {/* Wishlist Courses Grid */}
        {wishlistedCourses.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-red-50 text-red-400 flex items-center justify-center mx-auto mb-4">
              <FaHeart size={26} aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-exo font-bold text-black mb-2">
              Your wishlist is currently empty
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              Browse our educational course catalog and tap the heart icon on any course card to bookmark it for later.
            </p>
            <Link
              to="/courses"
              className="inline-block bg-orange text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-orange/90 transition-colors shadow-sm"
            >
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistedCourses.map((course) => {
              const formattedScope = course.scope
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase());

              return (
                <FeaturedCard
                  key={course.id}
                  courseId={course.id}
                  courseImage={course.image}
                  scope={formattedScope}
                  title={course.title}
                  by={course.by}
                  weeks={course.weeks}
                  students={course.students}
                  levels={course.levels}
                  lessons={course.lessons}
                  salary={course.salary}
                  isFree={course.isFree}
                  isList={false}
                />
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MyWishlistPage;

