import React from "react";
import Heading from "../Heading/Heading";
import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../button/button";
import topCategories from "../topCategories";

const Categories = () => {
  return (
    <div className="categories my-20">
      <Heading
        title={"Top Categories"}
        desc={"Explore our Popular Categories"}
        buttonText={"All Categories"}
      />
      <div className="categories-cards flex flex-wrap gap-8 justify-between py-4 px-24 my-12 max-lg:justify-center">
        {topCategories.map((cat) => {
          return (
            <CategoryCard
              categoryIcon={cat.icon}
              categoryTitle={cat.title}
              coursesNum={cat.courses}
            />
          );
        })}
      </div>
      <Button
        className={"sec-button mx-auto my-5"}
        buttonText={"All Categories"}
      />
    </div>
  );
};

export default Categories;
