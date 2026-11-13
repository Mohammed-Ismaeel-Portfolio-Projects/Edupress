import { categoryDefinitions } from "./categoryTaxonomy";
import coursesPosts from "./Courses";

/**
 * Top Categories for Homepage
 * Dynamically computes course count from actual coursesPosts dataset.
 */
const topCategories = categoryDefinitions.map((cat) => {
  const count = coursesPosts.filter((course) => course.scope === cat.slug).length;
  return {
    id: cat.id,
    slug: cat.slug,
    icon: cat.icon,
    title: cat.title,
    count,
    courses: `${count} Course${count === 1 ? "" : "s"}`,
  };
});

export default topCategories;
