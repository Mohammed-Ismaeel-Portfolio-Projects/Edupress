import { FaStar, FaUsers, FaClock, FaBookOpen } from "react-icons/fa6";

const CourseHeader = ({ course, categoryLabel }) => {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          size={16}
          className={i <= rating ? "text-[#F4BF08]" : "text-slate-300"}
          aria-hidden="true"
        />
      );
    }
    return <div className="flex gap-1 items-center" aria-label={`Rating: ${rating} out of 5 stars`}>{stars}</div>;
  };

  return (
    <div className="course-header mb-8">
      {/* Badges */}
      <div className="flex flex-wrap gap-2.5 items-center mb-4">
        <span className="py-1 px-3.5 bg-orange/10 text-orange font-semibold text-xs rounded-full uppercase tracking-wider">
          {categoryLabel}
        </span>
        <span className="py-1 px-3.5 bg-slate-100 text-slate-700 font-medium text-xs rounded-full uppercase tracking-wider">
          {course.levels}
        </span>
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-exo font-bold text-black mb-4 leading-tight">
        {course.title}
      </h1>

      {/* Meta Bar */}
      <div className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-gray-600 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Instructor:</span>
          <span className="font-semibold text-black">{course.by}</span>
        </div>

        <div className="flex items-center gap-2">
          {renderStars(course.rating)}
          <span className="font-semibold text-black">({course.rating}.0)</span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaUsers className="text-gray-400" size={14} aria-hidden="true" />
          <span>{course.students} Students</span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaClock className="text-gray-400" size={14} aria-hidden="true" />
          <span>{course.weeks} Weeks</span>
        </div>

        <div className="flex items-center gap-1.5">
          <FaBookOpen className="text-gray-400" size={14} aria-hidden="true" />
          <span>{course.lessons} Lessons</span>
        </div>
      </div>
    </div>
  );
};

export default CourseHeader;

