import Heading from "../Heading/Heading";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import Button from "../Button/Button";
import coursesPosts from "../Courses.js";

const showFeaturedCourses = (courses) => {
  return courses.map((course) => {
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
      />
    );
  });
};

const Featured = () => {
  return (
    <div className="featured-courses my-16">
      <Heading
        title={"Featured Courses"}
        desc={"Explore our Popular Courses"}
        buttonText={"All Courses"}
        buttonTo={"/courses"}
      />
      <div className="featured-cards flex flex-wrap justify-between mt-12 gap-9 max-lg:justify-center">
        {showFeaturedCourses(coursesPosts)}
      </div>
      <div className="w-full flex justify-center">
        <Button
          to="/courses"
          className={"sec-button mx-auto my-5"}
          buttonText={"All Courses"}
        />
      </div>
    </div>
  );
};

export default Featured;
