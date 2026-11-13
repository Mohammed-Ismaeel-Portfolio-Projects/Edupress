import { Link } from 'react-router-dom'

const CategoryCard = ({ categoryIcon, categoryTitle, coursesNum, to = "/courses" }) => {
  return (
    <Link
      to={to}
      className="category-card w-full sm:w-60 max-w-[280px] h-60 flex flex-col justify-center items-center border border-slate-300 rounded-3xl hover:scale-105 hover:shadow-md transition-all duration-200 cursor-pointer bg-white group no-underline"
    >
      <div className="icon mb-6">
        <img src={categoryIcon} alt={categoryTitle} className="w-12 h-12 object-contain" />
      </div>
      <h3 className="font-exo text-xl font-semibold text-black group-hover:text-orange transition-colors">
        {categoryTitle}
      </h3>
      <p className="mt-3 text-sm text-gray">{coursesNum}</p>
    </Link>
  )
}

export default CategoryCard
