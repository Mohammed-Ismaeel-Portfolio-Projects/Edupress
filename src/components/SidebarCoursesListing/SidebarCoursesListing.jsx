import React from "react";
import SidebarCheckbox from "../SidebarCheckbox/SidebarCheckbox";
import courseCategories from "../CoursesCategory";
import instructors from "../Instructors";
import priceFilters from "../priceFilters";

const SidebarCoursesListing = ({
  selectedCategories = [],
  selectedInstructors = [],
  selectedPrices = [],
  onCategoryChange,
  onInstructorChange,
  onPriceChange,
}) => {
  const handlePriceChange = (id) => {
    if (id === "all") {
      if (selectedPrices.includes("paid") || selectedPrices.includes("free")) {
        return;
      }
    }
    onPriceChange(id);
  };

  return (
    <div className="sidebar-courses-listing max-w-72">
      {/* ===== Course Categories ===== */}
      <div className="min-w-60 mb-8">
        <h1 className="text-xl font-semibold font-exo text-black mb-5">
          Course Category
        </h1>
        <div className="flex flex-col gap-2">
          {courseCategories.map((cat) => (
            <SidebarCheckbox
              key={cat.id}
              id={cat.id}
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
        <h1 className="text-xl font-semibold font-exo text-black mb-5">
          Instructors
        </h1>
        <div className="flex flex-col gap-2">
          {instructors.map((inst) => (
            <SidebarCheckbox
              key={inst.id}
              id={inst.id}
              label={inst.name}
              count={inst.count}
              checked={selectedInstructors.includes(inst.name)}
              onChange={() => onInstructorChange(inst.name)}
            />
          ))}
        </div>
      </div>

      {/* ===== Price ===== */}
      <div className="min-w-60 mb-8">
        <h1 className="text-xl font-semibold font-exo text-black mb-5">
          Price
        </h1>
        <div className="flex flex-col gap-2">
          {priceFilters.map((price) => (
            <SidebarCheckbox
              key={price.id}
              id={price.id}
              label={price.label}
              count={price.count}
              checked={selectedPrices.includes(price.id)}
              onChange={() => handlePriceChange(price.id)} // نستخدم دالة handlePriceChange هنا
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SidebarCoursesListing;
