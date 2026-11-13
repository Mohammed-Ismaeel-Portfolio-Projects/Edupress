/**
 * Course Discovery Filtering, Searching, Sorting & URL Synchronization Utilities
 */

import courseDetails from "../data/courseDetails.js";

/**
 * Valid Sort Keys
 */
export const SORT_OPTIONS = [
  { value: "popular", label: "Most Popular" },
  { value: "rating-desc", label: "Highest Rated" },
  { value: "rating-asc", label: "Lowest Rated" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "title-asc", label: "Title: A–Z" },
];

/**
 * Derives available instructors and course count dynamically from courses list
 */
export const getDynamicInstructors = (courses) => {
  const map = {};
  courses.forEach((c) => {
    if (c.by) {
      map[c.by] = (map[c.by] || 0) + 1;
    }
  });
  return Object.entries(map).map(([name, count]) => ({
    id: name.toLowerCase().replace(/\s+/g, "_"),
    name,
    count,
  }));
};

/**
 * Derives price counts (all, free, paid) dynamically
 */
export const getDynamicPriceCounts = (courses) => {
  const isFree = (c) => c.isFree || c.salary === "0.0" || c.salary === 0;
  return {
    all: courses.length,
    free: courses.filter(isFree).length,
    paid: courses.filter((c) => !isFree(c)).length,
  };
};

/**
 * Derives rating counts (courses with rating >= stars) dynamically
 */
export const getDynamicRatingCounts = (courses) => {
  return [4, 3, 2, 1].map((stars) => ({
    stars,
    count: courses.filter((c) => (c.rating ?? 0) >= stars).length,
  }));
};

/**
 * Deep search matching across all course metadata and comprehensive courseDetails content
 */
export const matchCourseSearch = (course, searchTerm) => {
  if (!searchTerm || !searchTerm.trim()) return true;

  const query = searchTerm.toLowerCase().trim();

  // 1. Basic Metadata
  if (course.title && course.title.toLowerCase().includes(query)) return true;
  if (course.by && course.by.toLowerCase().includes(query)) return true;
  if (course.scope && course.scope.toLowerCase().includes(query)) return true;
  if (course.levels && course.levels.toLowerCase().includes(query)) return true;

  // 2. Rich Course Content (courseDetails.js)
  const details = courseDetails[course.id];
  if (details) {
    if (details.shortDesc && details.shortDesc.toLowerCase().includes(query)) return true;
    if (details.overview && details.overview.toLowerCase().includes(query)) return true;
    if (details.targetAudience && details.targetAudience.toLowerCase().includes(query)) return true;
    if (details.prerequisites && details.prerequisites.toLowerCase().includes(query)) return true;

    // Objectives & Outcomes
    if (details.learningObjectives?.some((obj) => obj.toLowerCase().includes(query))) return true;
    if (details.learningOutcomes?.some((out) => out.toLowerCase().includes(query))) return true;
    if (details.skills?.some((s) => s.toLowerCase().includes(query))) return true;

    // Instructor Profile
    if (details.instructorProfile) {
      const p = details.instructorProfile;
      if (p.title && p.title.toLowerCase().includes(query)) return true;
      if (p.bio && p.bio.toLowerCase().includes(query)) return true;
      if (p.teachingFocus && p.teachingFocus.toLowerCase().includes(query)) return true;
      if (p.expertise?.some((e) => e.toLowerCase().includes(query))) return true;
    }

    // FAQs
    if (details.faqs?.some((f) => f.question.toLowerCase().includes(query) || f.answer.toLowerCase().includes(query))) {
      return true;
    }

    // Curriculum Modules & Lessons
    if (details.curriculum?.some((m) => {
      if (m.title && m.title.toLowerCase().includes(query)) return true;
      return m.lessons?.some((l) =>
        (l.title && l.title.toLowerCase().includes(query)) ||
        (l.desc && l.desc.toLowerCase().includes(query))
      );
    })) {
      return true;
    }
  }

  return false;
};

/**
 * Numerical price helper
 */
const getCoursePriceNumber = (course) => {
  if (course.isFree || course.salary === "0.0" || course.salary === 0) return 0;
  const num = parseFloat(course.salary);
  return isNaN(num) ? 0 : num;
};

/**
 * Numerical students helper
 */
const getCourseStudentsNumber = (course) => {
  if (typeof course.students === "number") return course.students;
  const num = parseInt(course.students, 10);
  return isNaN(num) ? 0 : num;
};

/**
 * Filter courses by search, categories, instructors, price, and minimum rating
 */
export const filterCourses = (courses, { search, categories = [], instructors = [], price, minRating }) => {
  return courses.filter((course) => {
    // Search
    if (!matchCourseSearch(course, search)) return false;

    // Category
    if (categories.length > 0) {
      const catMatch = categories.some((c) => c.toLowerCase() === course.scope.toLowerCase());
      if (!catMatch) return false;
    }

    // Instructor
    if (instructors.length > 0) {
      const instMatch = instructors.some((inst) => inst.toLowerCase() === course.by.toLowerCase());
      if (!instMatch) return false;
    }

    // Price
    const isFree = course.isFree || course.salary === "0.0" || course.salary === 0;
    if (price === "free" && !isFree) return false;
    if (price === "paid" && isFree) return false;

    // Rating
    if (minRating && (course.rating ?? 0) < minRating) return false;

    return true;
  });
};

/**
 * Sort courses stably according to selected option
 */
export const sortCourses = (courses, sortOption = "popular") => {
  const list = [...courses];

  switch (sortOption) {
    case "popular":
      return list.sort((a, b) => getCourseStudentsNumber(b) - getCourseStudentsNumber(a));
    case "rating-desc":
      return list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    case "rating-asc":
      return list.sort((a, b) => (a.rating ?? 0) - (b.rating ?? 0));
    case "price-asc":
      return list.sort((a, b) => getCoursePriceNumber(a) - getCoursePriceNumber(b));
    case "price-desc":
      return list.sort((a, b) => getCoursePriceNumber(b) - getCoursePriceNumber(a));
    case "title-asc":
      return list.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return list;
  }
};
