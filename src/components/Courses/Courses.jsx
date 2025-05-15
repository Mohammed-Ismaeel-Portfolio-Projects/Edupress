import React, { useState } from "react";
import SectionHeading from "../SectionHeading/SectionHeading";
import FeaturedCard from "./../FeaturedCard/FeaturedCard";
import Pagination from "../PaginationComponent/PaginationComponent";
import SidebarCoursesListing from "../SidebarCoursesListing/SidebarCoursesListing";
import coursesPosts from "../Courses";

const Courses = () => {
  const [isList, setIsList] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedInstructors, setSelectedInstructors] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  const postsPerPage = 6;

  const toggleFilter = (id, stateSetter, stateArray) => {
    if (stateArray.includes(id)) {
      stateSetter(stateArray.filter((item) => item !== id));
    } else {
      stateSetter([...stateArray, id]);
    }
    setCurrentPage(1);
  };

  const filteredCourses = coursesPosts.filter((course) => {
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.scope.toLowerCase());

    const matchInstructor =
      selectedInstructors.length === 0 ||
      selectedInstructors.includes(course.by);

    const matchPrice =
      selectedPrices.length === 0 ||
      (selectedPrices.includes("all")) ||
      (selectedPrices.includes("free") && course.isFree) ||
      (selectedPrices.includes("paid") && !course.isFree);

    return matchSearch && matchCategory && matchInstructor && matchPrice;
  });

  const totalPages = Math.ceil(filteredCourses.length / postsPerPage);
  const indexOfLastCourse = currentPage * postsPerPage;
  const indexOfFirstCourse = indexOfLastCourse - postsPerPage;
  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const toggleSidebarIsList = () => {
    setIsList(!isList);
  };

  const showCourses = (courses) => {
    return courses.map((course, key) => {
      const formattedScope = course.scope
        .replace(/_/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
      return (
        <FeaturedCard
          key={key}
          courseImage={course.image}
          scope={formattedScope}
          title={course.title}
          by={course.by}
          weeks={course.weeks}
          students={course.students}
          levels={course.levels}
          lessons={course.lessons}
          salary={course.salary}
          isList={isList}
        />
      );
    });
  };

  return (
    <div className="courses-section mt-52 mx-auto w-11/12 mb-10 flex gap-8 relative">
      <div className="w-10/12">
        <SectionHeading
          title={"All Courses"}
          toggleSidebar={toggleSidebarIsList}
          isList={isList}
          searchTerm={searchTerm}
          setSearchTerm={(val) => {
            setSearchTerm(val);
            setCurrentPage(1);
          }}
        />
        <div
          className={`courses-cards flex flex-wrap justify-center my-14 gap-20 max-xl:justify-center w-full ${
            isList && "flex-col"
          }`}
        >
          {showCourses(currentCourses)}
        </div>
        <div className="flex w-full">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
      <SidebarCoursesListing
        selectedCategories={selectedCategories}
        selectedInstructors={selectedInstructors}
        selectedPrices={selectedPrices}
        onCategoryChange={(id) =>
          toggleFilter(id, setSelectedCategories, selectedCategories)
        }
        onInstructorChange={(id) =>
          toggleFilter(id, setSelectedInstructors, selectedInstructors)
        }
        onPriceChange={(id) =>
          toggleFilter(id, setSelectedPrices, selectedPrices)
        }
      />
    </div>
  );
};

export default Courses;
