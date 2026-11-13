import feedIcon from './../../assets/images/feedback-icon.png'

const FeedbackCard = ({
  quote = "The courses on EduPress helped me build production-ready skills faster than any other platform. The instructors are exceptional!",
  name = "Roe Smith",
  role = "Product Designer",
}) => {
  return (
    <div className="feedback-card p-6 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div>
        <div className="mb-4">
          <img src={feedIcon} alt="Feedback quotation mark" className="w-8 h-8 opacity-70" />
        </div>
        <p className="text-gray-700 text-base leading-relaxed line-clamp-4">
          {quote}
        </p>
      </div>
      <div className="mt-6 pt-4 border-t border-slate-100">
        <h3 className="text-black text-lg font-semibold font-exo">
          {name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{role}</p>
      </div>
    </div>
  )
}

export default FeedbackCard
