import FeaturedCard from "../FeaturedCard/FeaturedCard";

const RelatedCourses = ({ currentCourse, allCourses }) => {
  // Exclude current course
  const otherCourses = allCourses.filter((c) => c.id !== currentCourse.id);

  // Prioritize courses from same category (scope)
  const sameCategoryCourses = otherCourses.filter(
    (c) => c.scope === currentCourse.scope
  );

  // If fewer than 2 same-category courses, backfill with remaining courses
  let selectedCourses = [...sameCategoryCourses];
  if (selectedCourses.length < 2) {
    const fallbackCourses = otherCourses.filter(
      (c) => c.scope !== currentCourse.scope
    );
    selectedCourses = [...selectedCourses, ...fallbackCourses];
  }

  // Display at most 3 courses
  const displayCourses = selectedCourses.slice(0, 3);

  if (displayCourses.length === 0) {
    return null;
  }

  // Determine honest heading
  const isMixedCategories = displayCourses.some(
    (c) => c.scope !== currentCourse.scope
  );

  return (
    <div className="related-courses-section mt-16 pt-12 border-t border-slate-200">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-exo font-bold text-black mb-2">
          {isMixedCategories ? "You May Also Like" : "Related Courses"}
        </h2>
        <p className="text-sm text-gray-500">
          {isMixedCategories
            ? "Explore featured courses from across our educational tracks."
            : "More courses in this category to help build your skills."}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayCourses.map((course) => {
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
    </div>
  );
};

export default RelatedCourses;

