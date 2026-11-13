import studentIcon from './../../assets/images/student-icon.png'
import timeIcon from './../../assets/images/time-icon.png'
import levelIcon from './../../assets/images/levels-icon.png'
import lessonIcon from './../../assets/images/lesson-icon.png'
import { Link } from 'react-router-dom'
import { useDemoStore } from '../../context/DemoStoreContext'
import { FaHeart, FaRegHeart, FaCheck } from 'react-icons/fa6'

const FeaturedCard = ({
  courseId,
  courseImage,
  scope,
  title,
  by,
  weeks,
  students,
  levels,
  lessons,
  salary,
  isFree,
  isList,
}) => {
  const isCourseFree = isFree || salary === "0.0" || salary === 0
  const courseLink = courseId ? `/courses/${courseId}` : '/courses'

  const { isInWishlist, toggleWishlist, isEnrolled } = useDemoStore()
  const wishlisted = courseId ? isInWishlist(courseId) : false
  const enrolled = courseId ? isEnrolled(courseId) : false

  const handleWishlistClick = (e) => {
    e.preventDefault()
    e.stopPropagation()
    if (courseId) {
      toggleWishlist(courseId)
    }
  }

  return (
    <div
      className={`featured-card max-w-lg border border-slate-300 rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-200 bg-white relative
        ${isList ? 'flex rounded-tr-none rounded-br-none max-lg:flex-col' : ''}
      `}
      style={{
        maxWidth: isList ? '100%' : undefined
      }}
    >
      <div className={`course-image relative ${isList ? 'lg:w-2/5' : 'w-full'}`}>
        <Link to={courseLink} className="block w-full h-full">
          <img
            src={courseImage}
            alt={title || "Course thumbnail"}
            className={`w-full h-full object-cover
              ${!isList ? 'rounded-tr-2xl rounded-tl-2xl' : ''}
              ${isList ? 'rounded-bl-2xl rounded-tl-2xl max-lg:rounded-none' : ''}`}
          />
        </Link>

        {/* Scope Badge */}
        <span className="absolute top-4 left-4 py-1.5 px-3 bg-black/80 backdrop-blur-sm text-white font-medium text-xs rounded-lg uppercase tracking-wider pointer-events-none">
          {scope}
        </span>

        {/* Wishlist Heart Action Button */}
        {courseId && (
          <button
            type="button"
            onClick={handleWishlistClick}
            aria-label={wishlisted ? `Remove ${title} from wishlist` : `Add ${title} to wishlist`}
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-700 hover:text-red-500 hover:scale-110 shadow-sm transition-all cursor-pointer z-20"
          >
            {wishlisted ? (
              <FaHeart className="text-red-500" size={15} />
            ) : (
              <FaRegHeart size={15} />
            )}
          </button>
        )}

        {/* Enrolled Badge Indicator */}
        {enrolled && (
          <span className="absolute bottom-3 left-3 py-1 px-2.5 bg-green/90 backdrop-blur-xs text-white text-[11px] font-semibold rounded-md flex items-center gap-1 shadow-xs pointer-events-none">
            <FaCheck size={10} />
            <span>Enrolled</span>
          </span>
        )}
      </div>

      <div className={`card-info p-5 flex flex-col justify-between ${isList ? 'lg:w-3/5' : 'w-full'}`}>
        <div>
          <p className="by text-sm text-gray-500 mb-2">By <span className="font-medium text-black">{by}</span></p>
          <Link to={courseLink} className="no-underline text-inherit group">
            <h2 className="text-xl font-semibold font-exo line-clamp-2 text-black hover:text-orange transition-colors">
              {title}
            </h2>
          </Link>
          <div className="date-students flex flex-wrap justify-between my-4 gap-4 text-sm text-gray-600">
            <div className="group-icon flex gap-1.5 items-center">
              <div className="icon w-4 h-4">
                <img src={timeIcon} alt="" className="w-full" aria-hidden="true" />
              </div>
              <p>{weeks} Weeks</p>
            </div>
            <div className="group-icon flex gap-1.5 items-center">
              <div className="icon w-4 h-4">
                <img src={studentIcon} alt="" className="w-full" aria-hidden="true" />
              </div>
              <p>{students} Students</p>
            </div>
            {isList && (
              <div className="flex gap-4">
                <div className="group-icon flex gap-1.5 items-center">
                  <div className="icon w-4 h-4">
                    <img src={levelIcon} alt="" className="w-full" aria-hidden="true" />
                  </div>
                  <p>{levels}</p>
                </div>
                <div className="group-icon flex gap-1.5 items-center">
                  <div className="icon w-4 h-4">
                    <img src={lessonIcon} alt="" className="w-full" aria-hidden="true" />
                  </div>
                  <p>{lessons} Lessons</p>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="tail-card flex justify-between items-center border-t border-slate-200 pt-4 mt-2">
          <div className="price flex gap-2 items-center">
            {isCourseFree ? (
              <span className="text-green text-lg font-bold">Free</span>
            ) : (
              <span className="text-black text-lg font-bold">${salary}</span>
            )}
          </div>
          <Link to={courseLink} className="text-base font-semibold text-black hover:text-orange transition-colors">
            View More
          </Link>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
