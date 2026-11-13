import SidebarCheckbox from "../SidebarCheckbox/SidebarCheckbox";
import courseCategories from "../CoursesCategory";

const SidebarCoursesListing = ({
  selectedCategories = [],
  selectedInstructors = [],
  selectedPrice = "all",
  selectedRating = null,
  instructors = [],
  priceCounts = { all: 0, free: 0, paid: 0 },
  ratingCounts = [],
  onCategoryChange,
  onInstructorChange,
  onPriceChange,
  onRatingChange,
}) => {
  return (
    <div className="sidebar-courses-listing max-w-72 max-lg:max-w-full max-lg:w-full">
      {/* ===== Course Categories ===== */}
      <div className="min-w-60 mb-8">
        <h2 className="text-xl font-semibold font-exo text-black mb-5">
          Course Category
        </h2>
        <div className="flex flex-col gap-2">
          {courseCategories.map((cat) => (
            <SidebarCheckbox
              key={cat.id}
              id={`cat-${cat.id}`}
              label={cat.label}
              count={cat.count}
              checked={selectedCategories.includes(cat.id)}
              onChange={() => onCategoryChange(cat.id)}
            />
          ))}
        </div>
      </div>

      {/* ===== Instructors ===== */}
      <div className="min-w-60 mb-8">
        <h2 className="text-xl font-semibold font-exo text-black mb-5">
          Instructors
        </h2>
        <div className="flex flex-col gap-2">
          {instructors.map((inst) => (
            <SidebarCheckbox
              key={inst.id}
              id={`inst-${inst.id}`}
              label={inst.name}
              count={inst.count}
              checked={selectedInstructors.includes(inst.name)}
              onChange={() => onInstructorChange(inst.name)}
            />
          ))}
        </div>
      </div>

      {/* ===== Price ===== */}
      <fieldset className="min-w-60 mb-8 border-none p-0 m-0">
        <legend className="text-xl font-semibold font-exo text-black mb-5 p-0 block float-none">
          Price
        </legend>
        <div className="flex flex-col gap-2">
          <SidebarCheckbox
            type="radio"
            name="course-price-filter"
            id="price-all"
            label="All Courses"
            count={priceCounts.all}
            checked={!selectedPrice || selectedPrice === "all"}
            onChange={() => onPriceChange("all")}
          />
          <SidebarCheckbox
            type="radio"
            name="course-price-filter"
            id="price-free"
            label="Free"
            count={priceCounts.free}
            checked={selectedPrice === "free"}
            onChange={() => onPriceChange("free")}
          />
          <SidebarCheckbox
            type="radio"
            name="course-price-filter"
            id="price-paid"
            label="Paid"
            count={priceCounts.paid}
            checked={selectedPrice === "paid"}
            onChange={() => onPriceChange("paid")}
          />
        </div>
      </fieldset>

      {/* ===== Minimum Rating ===== */}
      <div className="min-w-60 mb-8">
        <h2 className="text-xl font-semibold font-exo text-black mb-5">
          Review Rating
        </h2>
        <div className="flex flex-col gap-2">
          {ratingCounts.map((r) => (
            <SidebarCheckbox
              key={r.stars}
              id={`rating-${r.stars}`}
              label={`${r.stars} Stars & Above`}
              starsRate={r.stars}
              count={r.count}
              checked={selectedRating === r.stars}
              onChange={() => onRatingChange(r.stars)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarCoursesListing;
