import { IoClose } from "react-icons/io5";

const CoursesFilterChips = ({
  search,
  categories = [],
  instructors = [],
  price,
  rating,
  categoryDefinitions = [],
  onRemoveSearch,
  onRemoveCategory,
  onRemoveInstructor,
  onRemovePrice,
  onRemoveRating,
  onClearAll,
}) => {
  const hasActiveFilters =
    Boolean(search && search.trim()) ||
    categories.length > 0 ||
    instructors.length > 0 ||
    (price && price !== "all") ||
    Boolean(rating);

  if (!hasActiveFilters) {
    return null;
  }

  const getCategoryLabel = (slug) => {
    const found = categoryDefinitions.find((c) => c.slug === slug);
    return found ? found.label : slug;
  };

  return (
    <div className="courses-filter-chips flex flex-wrap items-center gap-2 mb-6 pt-2 pb-1">
      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 mr-1">
        Active Filters:
      </span>

      {/* Search Chip */}
      {search && search.trim() && (
        <span className="inline-flex items-center gap-1.5 py-1 px-3 bg-orange/10 text-orange rounded-full text-xs font-medium border border-orange/20">
          <span>Search: &ldquo;{search}&rdquo;</span>
          <button
            type="button"
            onClick={onRemoveSearch}
            className="hover:text-black transition-colors cursor-pointer"
            aria-label="Remove search filter"
          >
            <IoClose size={14} />
          </button>
        </span>
      )}

      {/* Category Chips */}
      {categories.map((catSlug) => (
        <span
          key={catSlug}
          className="inline-flex items-center gap-1.5 py-1 px-3 bg-slate-100 text-slate-800 rounded-full text-xs font-medium border border-slate-200"
        >
          <span>Category: {getCategoryLabel(catSlug)}</span>
          <button
            type="button"
            onClick={() => onRemoveCategory(catSlug)}
            className="hover:text-orange transition-colors cursor-pointer"
            aria-label={`Remove ${getCategoryLabel(catSlug)} category filter`}
          >
            <IoClose size={14} />
          </button>
        </span>
      ))}

      {/* Instructor Chips */}
      {instructors.map((instName) => (
        <span
          key={instName}
          className="inline-flex items-center gap-1.5 py-1 px-3 bg-slate-100 text-slate-800 rounded-full text-xs font-medium border border-slate-200"
        >
          <span>Instructor: {instName}</span>
          <button
            type="button"
            onClick={() => onRemoveInstructor(instName)}
            className="hover:text-orange transition-colors cursor-pointer"
            aria-label={`Remove ${instName} instructor filter`}
          >
            <IoClose size={14} />
          </button>
        </span>
      ))}

      {/* Price Chip */}
      {price && price !== "all" && (
        <span className="inline-flex items-center gap-1.5 py-1 px-3 bg-slate-100 text-slate-800 rounded-full text-xs font-medium border border-slate-200">
          <span>Price: {price.charAt(0).toUpperCase() + price.slice(1)}</span>
          <button
            type="button"
            onClick={onRemovePrice}
            className="hover:text-orange transition-colors cursor-pointer"
            aria-label="Remove price filter"
          >
            <IoClose size={14} />
          </button>
        </span>
      )}

      {/* Rating Chip */}
      {rating && (
        <span className="inline-flex items-center gap-1.5 py-1 px-3 bg-slate-100 text-slate-800 rounded-full text-xs font-medium border border-slate-200">
          <span>Rating: {rating}+ Stars</span>
          <button
            type="button"
            onClick={onRemoveRating}
            className="hover:text-orange transition-colors cursor-pointer"
            aria-label="Remove rating filter"
          >
            <IoClose size={14} />
          </button>
        </span>
      )}

      {/* Clear All Button */}
      <button
        type="button"
        onClick={onClearAll}
        className="text-xs font-semibold text-orange hover:underline ml-2 cursor-pointer"
      >
        Clear All
      </button>
    </div>
  );
};

export default CoursesFilterChips;

