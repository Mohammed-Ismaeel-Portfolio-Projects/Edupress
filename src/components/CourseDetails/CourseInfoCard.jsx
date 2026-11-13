import { useState } from "react";
import { Link } from "react-router-dom";
import timeIcon from "../../assets/images/time-icon.png";
import lessonIcon from "../../assets/images/lesson-icon.png";
import levelIcon from "../../assets/images/levels-icon.png";
import studentIcon from "../../assets/images/student-icon.png";
import { useDemoStore } from "../../context/DemoStoreContext";
import { FaHeart, FaRegHeart, FaCheck, FaCircleInfo } from "react-icons/fa6";

const CourseInfoCard = ({ course }) => {
  const isFree = course.isFree || course.salary === "0.0" || course.salary === 0;
  const { isEnrolled, enrollInCourse, removeEnrollment, isInWishlist, toggleWishlist } = useDemoStore();

  const enrolled = isEnrolled(course.id);
  const wishlisted = isInWishlist(course.id);
  const [feedback, setFeedback] = useState("");

  const handleEnrollClick = () => {
    if (!enrolled) {
      enrollInCourse(course.id);
      setFeedback("Enrolled successfully in demo mode!");
      setTimeout(() => setFeedback(""), 4000);
    }
  };

  const handleWishlistToggle = () => {
    toggleWishlist(course.id);
  };

  return (
    <div className="course-info-card bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Course Image */}
      <div className="relative w-full aspect-video overflow-hidden bg-slate-100">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          {course.levels}
        </div>

        {/* Wishlist Button on InfoCard */}
        <button
          type="button"
          onClick={handleWishlistToggle}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute top-4 left-4 w-9 h-9 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-700 hover:text-red-500 hover:scale-110 shadow-sm transition-all cursor-pointer z-20"
        >
          {wishlisted ? <FaHeart className="text-red-500" size={17} /> : <FaRegHeart size={17} />}
        </button>
      </div>

      <div className="p-6">
        {/* Price Area */}
        <div className="flex items-baseline justify-between mb-6 pb-6 border-b border-slate-100">
          <div>
            <span className="text-xs text-gray-500 block uppercase tracking-wider font-medium mb-1">
              Course Fee
            </span>
            <div className="text-3xl font-exo font-bold">
              {isFree ? (
                <span className="text-green">Free</span>
              ) : (
                <span className="text-black">${course.salary}</span>
              )}
            </div>
          </div>
          <span className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600">
            {isFree ? "Full Access" : "One-Time Payment"}
          </span>
        </div>

        {/* Enrollment Feedback Notice */}
        {feedback && (
          <div className="mb-4 p-3 rounded-xl bg-green-50 border border-green-200 text-green-800 text-xs font-semibold flex items-center gap-2">
            <FaCheck />
            <span>{feedback}</span>
          </div>
        )}

        {/* CTA Area */}
        <div className="mb-6 space-y-3">
          {enrolled ? (
            <div className="space-y-2">
              <div className="w-full bg-green text-white py-3.5 px-6 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 shadow-xs">
                <FaCheck size={14} />
                <span>Enrolled • Continue Learning</span>
              </div>
              <div className="flex justify-between items-center px-1 text-xs">
                <Link to="/my-learning" className="text-orange font-semibold hover:underline">
                  View in My Learning →
                </Link>
                <button
                  type="button"
                  onClick={() => removeEnrollment(course.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  Unenroll (Demo)
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleEnrollClick}
              className="w-full bg-orange text-white py-3.5 px-6 rounded-2xl font-semibold text-base hover:bg-orange/90 transition-colors shadow-sm active:scale-[0.99] cursor-pointer"
            >
              {isFree ? "Enroll for Free (Demo)" : "Enroll Now (Demo)"}
            </button>
          )}

          {/* Demo Notice */}
          <div className="flex items-start gap-1.5 text-[11px] text-gray-500 leading-tight pt-1">
            <FaCircleInfo className="text-orange shrink-0 mt-0.5" size={11} />
            <span>Simulated enrollment stored locally in browser without payment processing.</span>
          </div>
        </div>

        {/* Course Details List */}
        <div className="space-y-4 pt-4 border-t border-slate-100 text-sm">
          <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
            Course Specifications
          </h2>

          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2.5 text-gray-600">
              <img src={timeIcon} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
              <span>Duration</span>
            </div>
            <span className="font-semibold text-black">{course.weeks} Weeks</span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2.5 text-gray-600">
              <img src={lessonIcon} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
              <span>Lessons</span>
            </div>
            <span className="font-semibold text-black">{course.lessons} Lessons</span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2.5 text-gray-600">
              <img src={levelIcon} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
              <span>Skill Level</span>
            </div>
            <span className="font-semibold text-black">{course.levels}</span>
          </div>

          <div className="flex items-center justify-between py-1">
            <div className="flex items-center gap-2.5 text-gray-600">
              <img src={studentIcon} alt="" className="w-4 h-4 object-contain" aria-hidden="true" />
              <span>Enrolled</span>
            </div>
            <span className="font-semibold text-black">{course.students} Students</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfoCard;
