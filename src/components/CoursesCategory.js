import { categoryDefinitions } from "./categoryTaxonomy";
import coursesPosts from "./Courses";

/**
 * Course Categories for Catalog Sidebar Filter
 * Dynamically computes course count from actual coursesPosts dataset.
 */
const courseCategories = categoryDefinitions.map((cat) => {
  const count = coursesPosts.filter((course) => course.scope === cat.slug).length;
  return {
    id: cat.slug,
    slug: cat.slug,
    label: cat.label,
    count,
  };
});

export default courseCategories;
