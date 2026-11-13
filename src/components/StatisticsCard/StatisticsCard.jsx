const StatisticsCard = ({ number, title }) => {
  return (
    <div className="card w-72 h-40 flex bg-slate-100 flex-col justify-center items-center gap-4 rounded-3xl border border-slate-200">
      <h2 className="text-orange text-4xl font-exo font-bold">{number}</h2>
      <p className="text-base font-medium text-gray-700">{title}</p>
    </div>
  )
}

export default StatisticsCard
