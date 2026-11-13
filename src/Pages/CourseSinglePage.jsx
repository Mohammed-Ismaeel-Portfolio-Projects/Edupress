import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import BreakCrumb from "../components/BreakCrumb/BreakCrumb";
import Footer from "../components/Footer/Footer";
import CourseHeader from "../components/CourseDetails/CourseHeader";
import CourseInfoCard from "../components/CourseDetails/CourseInfoCard";
import CourseTabs from "../components/CourseDetails/CourseTabs";
import RelatedCourses from "../components/CourseDetails/RelatedCourses";
import coursesPosts from "../components/Courses";
import { categoryDefinitions } from "../components/categoryTaxonomy";
import courseDetails from "../data/courseDetails";

const CourseSinglePage = () => {
  const { id } = useParams();
  const course = coursesPosts.find((c) => c.id === id) || null;
  const details = course ? courseDetails[course.id] || null : null;

  const categoryMeta = course
    ? categoryDefinitions.find((cat) => cat.slug === course.scope)
    : null;
  const categoryLabel = categoryMeta ? categoryMeta.label : "Courses";

  const navLinks = [
    { title: "Home", path: "" },
    { title: "Courses", path: "courses" },
    { title: "Blog", path: "blog" },
    { title: "Contact", path: "contact" },
    { title: "FAQs", path: "faqs" },
  ];

  const breakLinks = [
    { title: "Homepage", href: "" },
    { title: "Courses", href: "courses" },
    ...(course
      ? [
          {
            title: categoryLabel,
            href: categoryMeta ? `courses?category=${categoryMeta.slug}` : "courses",
          },
          { title: course.title, href: "" },
        ]
      : [{ title: "Course Details", href: "" }]),
  ];

  return (
    <>
      <div className="header fixed top-0 w-full z-50">
        <NavBar navLinks={navLinks} />
        <BreakCrumb breakLinks={breakLinks} />
      </div>

      {!course ? (
        <div className="mt-52 mx-auto w-11/12 text-center py-20 min-h-[60vh] flex flex-col items-center justify-center">
          <span className="text-orange text-sm uppercase tracking-widest font-semibold mb-2">
            404 Error
          </span>
          <h1 className="text-3xl md:text-4xl font-exo font-bold text-black mb-4">
            Course Not Found
          </h1>
          <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto mb-8">
            The course you are looking for does not exist, has been removed, or the link may be outdated.
          </p>
          <Link
            to="/courses"
            className="inline-block bg-orange text-white font-medium rounded-3xl py-3.5 px-8 hover:bg-orange/90 transition-colors shadow-sm"
          >
            Back to Courses
          </Link>
        </div>
      ) : (
        <div className="mt-52 mx-auto w-11/12 mb-16">
          {/* Responsive CSS Grid: 1 column on mobile, 3 columns on desktop. Single CourseInfoCard instance. */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            {/* 1. Course Header (spans 2 columns on desktop) */}
            <div className="lg:col-span-2">
              <CourseHeader course={course} categoryLabel={categoryLabel} />
            </div>

            {/* 2. Course Info Card (in-flow below header on mobile, sticky sidebar on desktop) */}
            <aside className="lg:col-span-1 lg:row-span-2 lg:sticky lg:top-32 self-start w-full">
              <CourseInfoCard course={course} />
            </aside>

            {/* 3. Interactive Rich Tabs & Content (spans 2 columns on desktop, below info card on mobile) */}
            <div className="lg:col-span-2">
              <CourseTabs
                course={course}
                categoryLabel={categoryLabel}
                details={details}
              />
            </div>
          </div>

          {/* Related Courses Section */}
          <RelatedCourses currentCourse={course} allCourses={coursesPosts} />
        </div>
      )}

      <Footer />
    </>
  );
};

export default CourseSinglePage;
