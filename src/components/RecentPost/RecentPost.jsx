import React from 'react'
import './RecentPostStyle.css'
const RecentPost = ({ image, title }) => {
  return (
    <div className="recent-post flex gap-5 justify-between items-center">
      <img src={image} alt="post Image" className="w-24 h-24 rounded-xl" />
      <h4 className="font-jost text-base text-black max-w-52">{title}</h4>
    </div>
  )
}

export default RecentPost
