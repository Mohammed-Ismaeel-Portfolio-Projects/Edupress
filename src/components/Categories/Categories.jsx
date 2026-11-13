import Heading from "../Heading/Heading";
import CategoryCard from "../CategoryCard/CategoryCard";
import Button from "../Button/Button";
import topCategories from "../topCategories";

const Categories = () => {
  return (
    <div className="categories my-20">
      <Heading
        title={"Top Categories"}
        desc={"Explore our Popular Categories"}
        buttonText={"All Categories"}
        buttonTo={"/courses"}
      />
      <div className="categories-cards flex flex-wrap gap-6 sm:gap-8 justify-between py-4 px-0 sm:px-6 lg:px-12 xl:px-24 my-12 max-lg:justify-center">
        {topCategories.map((cat) => {
          return (
            <CategoryCard
              key={cat.id || cat.title}
              to={`/courses?category=${cat.slug || cat.id}`}
              categoryIcon={cat.icon}
              categoryTitle={cat.title}
              coursesNum={cat.courses}
            />
          );
        })}
      </div>
      <div className="flex justify-center">
        <Button
          to="/courses"
          className={"sec-button mx-auto my-5"}
          buttonText={"All Categories"}
        />
      </div>
    </div>
  );
};

export default Categories;
