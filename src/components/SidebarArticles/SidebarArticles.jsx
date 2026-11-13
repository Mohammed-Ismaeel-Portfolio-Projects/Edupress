import SidebarCheckbox from '../SidebarCheckbox/SidebarCheckbox'
import recentPostImage1 from './../../assets/images/recent-post-1.png'
import recentPostImage2 from './../../assets/images/recent-post-2.png'
import recentPostImage3 from './../../assets/images/recent-post-3.png'
import RecentPost from '../RecentPost/RecentPost'
import { tags, articleCategories } from '../Articles.js'

const SidebarArticles = ({
  BlogSingle = false,
  selectedCategories = [],
  onCategoryChange = () => { },
  selectedTags = [],
  onTagChange = () => {},
}) => {
  const recentPosts = [
    {
      id: 0,
      image: recentPostImage1,
      title: 'Top WordPress Themes for LearnPress in 2025',
    },
    {
      id: 1,
      image: recentPostImage2,
      title: 'Free LMS Tools You Can Use in 2025',
    },
    {
      id: 2,
      image: recentPostImage3,
      title: 'Marketing Strategies for Online Instructors',
    },
  ]

  return (
    <div className="sidebar-courses-listing max-w-72 max-lg:max-w-full max-lg:w-full">
      <div className="min-w-60 mb-8">
        <h2 className="text-xl font-semibold font-exo text-black mb-5">
          Category
        </h2>
        <div className="flex flex-col gap-2">
          {articleCategories.map((cat) => (
            <SidebarCheckbox
              key={cat.id}
              id={`blog-cat-${cat.id}`}
              label={cat.label}
              count={cat.count}
              checked={selectedCategories.includes(cat.id)}
              onChange={() => onCategoryChange(cat.id)}
              hidden={BlogSingle}
            />
          ))}
        </div>
      </div>
      <div className="min-w-60 mb-8">
        <h2 className="text-xl font-semibold font-exo text-black mb-5">
          Recent Posts
        </h2>
        <div className="flex flex-col gap-4">
          {recentPosts?.map((ele) => {
            return (
              <RecentPost
                key={ele.id}
                id={ele.id}
                image={ele.image}
                title={ele.title}
              />
            )
          })}
        </div>
      </div>

      <div className="min-w-60 mb-8">
        <h2 className="text-xl font-semibold font-exo text-black mb-5">Tags</h2>
        <div className="flex gap-x-2 gap-y-5 flex-wrap">
        {tags.map((tag, key) => {
            const isSelected = selectedTags.includes(tag)
            return (
              <button
                key={key}
                type="button"
                onClick={() => onTagChange(tag)}
                className={`text-lg px-3 py-1 rounded border border-solid transition-colors ${
                  isSelected
                    ? 'bg-black text-white border-black'
                    : 'text-gray border-whiteGrey hover:border-black'
                }`}
              >
                {tag}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SidebarArticles
