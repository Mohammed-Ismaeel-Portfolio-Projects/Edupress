import './RecentPostStyle.css'
import { Link } from 'react-router-dom'

const RecentPost = ({ id = 0, image, title }) => {
  return (
    <Link to={`/blog/${id}`} className="recent-post flex gap-4 items-center group">
      <img src={image} alt={title || 'Recent article thumbnail'} className="w-20 h-20 rounded-xl object-cover flex-shrink-0" />
      <h4 className="font-jost text-base text-black group-hover:text-orange transition-colors line-clamp-2">
        {title}
      </h4>
    </Link>
  )
}

export default RecentPost
