import { Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/BreakCrumb/BreakCrumb";
import Footer from "../components/Footer/Footer";
import FeaturedCard from "../components/FeaturedCard/FeaturedCard";
import coursesPosts from "../components/Courses.js";
import { useDemoStore } from "../context/DemoStoreContext";
import { FaGraduationCap, FaCircleInfo } from "react-icons/fa6";

const MyLearningPage = () => {
  const { enrolledCourseIds, user } = useDemoStore();

  const enrolledCourses = coursesPosts.filter((c) =>
    enrolledCourseIds.includes(c.id)
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
    { title: "My Learning", href: "my-learning" },
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
              <FaGraduationCap className="text-orange" size={32} aria-hidden="true" />
              <span>My Learning</span>
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {user ? `Enrolled courses for ${user.name}` : "Courses enrolled in this demo session"} •{" "}
              <span className="font-semibold text-black">{enrolledCourses.length}</span> course
              {enrolledCourses.length === 1 ? "" : "s"}
            </p>
          </div>

          <Link
            to="/courses"
            className="text-sm font-semibold text-orange hover:underline self-start md:self-auto"
          >
            Browse More Courses →
          </Link>
        </div>

        {/* Demo Enrollment Disclosure */}
        <div className="mb-8 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3 text-xs text-slate-700 leading-relaxed">
          <FaCircleInfo className="text-orange shrink-0" size={15} aria-hidden="true" />
          <p>
            <strong className="font-semibold">Simulated Enrollment Notice:</strong> Course enrollment is simulated locally in your browser for demonstration purposes. It demonstrates LMS student dashboard integration without payment or server registration.
          </p>
        </div>

        {/* Enrolled Courses Grid */}
        {enrolledCourses.length === 0 ? (
          <div className="text-center py-20 bg-slate-50 border border-slate-200 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-orange/10 text-orange flex items-center justify-center mx-auto mb-4">
              <FaGraduationCap size={28} aria-hidden="true" />
            </div>
            <h2 className="text-2xl font-exo font-bold text-black mb-2">
              You haven&apos;t enrolled in any courses yet
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
              Explore our verified courses and tap &ldquo;Enroll Now&rdquo; on any course details page to add it to your learning dashboard.
            </p>
            <Link
              to="/courses"
              className="inline-block bg-orange text-white text-sm font-semibold py-3 px-8 rounded-full hover:bg-orange/90 transition-colors shadow-sm"
            >
              Explore Course Catalog
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrolledCourses.map((course) => {
              const formattedScope = course.scope
                .replace(/_/g, " ")
                .replace(/\b\w/g, (char) => char.toUpperCase());

              return (
                <div key={course.id} className="relative group">
                  <FeaturedCard
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
                </div>
              );
            })}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default MyLearningPage;

