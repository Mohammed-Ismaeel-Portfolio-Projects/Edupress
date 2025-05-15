import React from 'react'

const StatisticsCard = ({ number, title }) => {
  return (
    <div className="card w-72 h-40 flex bg-slate-100 flex-col justify-center items-center gap-4 rounded-3xl">
      <h1 className="text-orange text-3xl font-exo font-semibold">{number}</h1>
      <p className="text-lg font-medium">{title}</p>
    </div>
  )
}

export default StatisticsCard
