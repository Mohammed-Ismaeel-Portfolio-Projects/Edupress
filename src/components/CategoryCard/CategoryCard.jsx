import React from 'react'
import './CategoryCardStyle.css'
const CategoryCard = ({ categoryIcon, categoryTitle, coursesNum }) => {
  return (
    <div className="category-card min-w-60 h-60 flex flex-col justify-center items-center border border-slate-300 rounded-3xl hover:scale-110 cursor-pointer ">
      <div className="icon mb-6">
        <img src={categoryIcon} alt="" />
      </div>
      <h1 className="font-exo text-xl font-semibold text-black">
        {categoryTitle}
      </h1>
      <p className="mt-3 text-lg text-gray">{coursesNum}</p>
    </div>
  )
}

export default CategoryCard
