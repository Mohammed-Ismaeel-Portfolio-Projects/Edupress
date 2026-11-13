import { useMemo, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import SectionHeading from "../SectionHeading/SectionHeading";
import FeaturedCard from "../FeaturedCard/FeaturedCard";
import Pagination from "../PaginationComponent/PaginationComponent";
import SidebarCoursesListing from "../SidebarCoursesListing/SidebarCoursesListing";
import CoursesFilterChips from "../CoursesFilterChips/CoursesFilterChips";
import coursesPosts from "../Courses.js";
import { categoryDefinitions } from "../categoryTaxonomy";
import {
  filterCourses,
  sortCourses,
  getDynamicInstructors,
  getDynamicPriceCounts,
  getDynamicRatingCounts,
} from "../../utils/courseFilterUtils";

const POSTS_PER_PAGE = 3; // Allows 2 full pages with 6 demo courses

const Courses = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // --- Parse State from URL Query Params ---
  const searchTerm = searchParams.get("search") || "";
  const selectedCategories = useMemo(() => {
    const raw = searchParams.get("category");
    return raw ? raw.split(",").map((s) => s.trim().toLowerCase()).filter(Boolean) : [];
  }, [searchParams]);

  const selectedInstructors = useMemo(() => {
    const raw = searchParams.get("instructor");
    return raw ? raw.split(",").map((s) => s.trim()).filter(Boolean) : [];
  }, [searchParams]);

  const selectedPrice = searchParams.get("price") || "all";
  const selectedRating = searchParams.get("rating") ? parseInt(searchParams.get("rating"), 10) : null;
  const sortBy = searchParams.get("sort") || "popular";
  const viewMode = searchParams.get("view") || "list";
  const isList = viewMode !== "grid";

  const rawPage = parseInt(searchParams.get("page"), 10);
  const currentPage = isNaN(rawPage) || rawPage < 1 ? 1 : rawPage;

  // --- Helper to update URL searchParams cleanly ---
  const updateQuery = useCallback(
    (newParams, replace = false) => {
      setSearchParams(
        (prev) => {
          const updated = new URLSearchParams(prev);

          Object.entries(newParams).forEach(([key, value]) => {
            if (value === null || value === undefined || value === "" || value === "all") {
              updated.delete(key);
            } else if (Array.isArray(value)) {
              if (value.length === 0) {
                updated.delete(key);
              } else {
                updated.set(key, value.join(","));
              }
            } else {
              updated.set(key, String(value));
            }
          });

          // Always omit default page = 1
          if (updated.get("page") === "1") {
            updated.delete("page");
          }

          // Always omit default sort = popular
          if (updated.get("sort") === "popular") {
            updated.delete("sort");
          }

          // Always omit default view = list
          if (updated.get("view") === "list") {
            updated.delete("view");
          }

          return updated;
        },
        { replace }
      );
    },
    [setSearchParams]
  );

  // --- Discovery Filter & Sort Handlers ---
  const handleSearchChange = (val) => {
    updateQuery({ search: val, page: 1 }, true);
  };

  const handleCategoryToggle = (slug) => {
    const exists = selectedCategories.includes(slug.toLowerCase());
    const next = exists
      ? selectedCategories.filter((c) => c !== slug.toLowerCase())
      : [...selectedCategories, slug.toLowerCase()];
    updateQuery({ category: next, page: 1 });
  };

  const handleInstructorToggle = (name) => {
    const exists = selectedInstructors.some((i) => i.toLowerCase() === name.toLowerCase());
    const next = exists
      ? selectedInstructors.filter((i) => i.toLowerCase() !== name.toLowerCase())
      : [...selectedInstructors, name];
    updateQuery({ instructor: next, page: 1 });
  };

  const handlePriceChange = (price) => {
    updateQuery({ price: price === "all" ? null : price, page: 1 });
  };

  const handleRatingChange = (stars) => {
    // Toggle if same rating clicked
    const next = selectedRating === stars ? null : stars;
    updateQuery({ rating: next, page: 1 });
  };

  const handleSortChange = (newSort) => {
    updateQuery({ sort: newSort, page: 1 });
  };

  const handleToggleView = () => {
    updateQuery({ view: isList ? "grid" : "list" });
  };

  const handlePageChange = (newPage) => {
    updateQuery({ page: newPage });
  };

  const handleClearAll = () => {
    setSearchParams({}, { replace: true });
  };

  // --- Dynamic Option Derivations ---
  const dynamicInstructors = useMemo(() => getDynamicInstructors(coursesPosts), []);
  const dynamicPriceCounts = useMemo(() => getDynamicPriceCounts(coursesPosts), []);
  const dynamicRatingCounts = useMemo(() => getDynamicRatingCounts(coursesPosts), []);

  // --- Filtered and Sorted Course Pipeline ---
  const filteredCourses = useMemo(() => {
    return filterCourses(coursesPosts, {
      search: searchTerm,
      categories: selectedCategories,
      instructors: selectedInstructors,
      price: selectedPrice,
      minRating: selectedRating,
    });
  }, [searchTerm, selectedCategories, selectedInstructors, selectedPrice, selectedRating]);

  const sortedCourses = useMemo(() => {
    return sortCourses(filteredCourses, sortBy);
  }, [filteredCourses, sortBy]);

  // --- Real Pagination Slicing ---
  const totalPages = Math.ceil(sortedCourses.length / POSTS_PER_PAGE) || 1;
  const safePage = Math.min(Math.max(currentPage, 1), totalPages);

  const paginatedCourses = useMemo(() => {
    const startIdx = (safePage - 1) * POSTS_PER_PAGE;
    return sortedCourses.slice(startIdx, startIdx + POSTS_PER_PAGE);
  }, [sortedCourses, safePage]);

  return (
    <div className="courses-section mt-52 mx-auto w-11/12 mb-10 flex max-lg:flex-col-reverse gap-8 relative">
      {/* Main Course Discovery Content */}
      <div className="w-9/12 max-lg:w-full">
        {/* Section Heading & Discovery Controls */}
        <SectionHeading
          title="All Courses"
          toggleSidebar={handleToggleView}
          isList={isList}
          searchTerm={searchTerm}
          setSearchTerm={handleSearchChange}
          totalResults={sortedCourses.length}
          totalCourses={coursesPosts.length}
          sortBy={sortBy}
          setSortBy={handleSortChange}
        />

        {/* Active Filter Chips */}
        <CoursesFilterChips
          search={searchTerm}
          categories={selectedCategories}
          instructors={selectedInstructors}
          price={selectedPrice}
          rating={selectedRating}
          categoryDefinitions={categoryDefinitions}
          onRemoveSearch={() => handleSearchChange("")}
          onRemoveCategory={(slug) => handleCategoryToggle(slug)}
          onRemoveInstructor={(name) => handleInstructorToggle(name)}
          onRemovePrice={() => handlePriceChange("all")}
          onRemoveRating={() => handleRatingChange(selectedRating)}
          onClearAll={handleClearAll}
        />

        {/* Course Cards Grid/List */}
        <div
          className={`courses-cards flex flex-wrap justify-start my-8 gap-8 w-full ${
            isList ? "flex-col" : ""
          }`}
        >
          {sortedCourses.length === 0 ? (
            <div className="w-full text-center py-20 bg-slate-50 border border-slate-200 rounded-3xl p-8">
              <h3 className="text-2xl font-exo font-bold text-black mb-3">
                No courses found
              </h3>
              <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
                No courses match your active search terms or filter criteria. Try adjusting your selections or clear all filters.
              </p>
              <button
                type="button"
                onClick={handleClearAll}
                className="inline-block bg-orange text-white text-sm font-semibold py-2.5 px-6 rounded-full hover:bg-orange/90 transition-colors cursor-pointer"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            paginatedCourses.map((course) => {
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
                  isList={isList}
                />
              );
            })
          )}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center w-full mt-10">
            <Pagination
              currentPage={safePage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </div>

      {/* Dynamic Filter Sidebar */}
      <aside className="w-3/12 max-lg:w-full">
        <SidebarCoursesListing
          selectedCategories={selectedCategories}
          selectedInstructors={selectedInstructors}
          selectedPrice={selectedPrice}
          selectedRating={selectedRating}
          instructors={dynamicInstructors}
          priceCounts={dynamicPriceCounts}
          ratingCounts={dynamicRatingCounts}
          onCategoryChange={handleCategoryToggle}
          onInstructorChange={handleInstructorToggle}
          onPriceChange={handlePriceChange}
          onRatingChange={handleRatingChange}
        />
      </aside>
    </div>
  );
};

export default Courses;
