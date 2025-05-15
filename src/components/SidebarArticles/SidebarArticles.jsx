import React from 'react'
import SidebarCheckbox from '../SidebarCheckbox/SidebarCheckbox'
import recentPostImage1 from './../../assets/images/recent-post-1.png'
import recentPostImage2 from './../../assets/images/recent-post-2.png'
import recentPostImage3 from './../../assets/images/recent-post-3.png'
import RecentPost from '../recentPost/recentPost'
import courseCategories from '../CoursesCategory';
import { tags } from '../Articles'
const SidebarArticles = ({
  BlogSingle = false,
  selectedCategories = [],
  onCategoryChange = () => { },
  selectedTags = [],
  onTagChange = () => {},
}) => {
  const recentPosts = [
    {
      image: recentPostImage1,
      title: 'Best LearnPress WordPress Theme Collection for 2023',
    },
    {
      image: recentPostImage2,
      title: 'Best LearnPress WordPress Theme Collection for 2023',
    },
    {
      image: recentPostImage3,
      title: 'Best LearnPress WordPress Theme Collection for 2023',
    },
  ]

  return (
    <div className="sidebar-courses-listing max-w-72">
      <div className="min-w-60 mb-8">
        <h1 className="text-xl font-semibold font-exo text-black mb-5">
          Category
        </h1>
        <div className="flex flex-col gap-2">
        {courseCategories.map((cat) => (
            <SidebarCheckbox
              key={cat.id}
              id={cat.id}
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
        <h1 className="text-xl font-semibold font-exo text-black mb-5">
          Recent Posts
        </h1>
        <div className="flex flex-col gap-4">
          {recentPosts?.map((ele, key) => {
            return <RecentPost key={key} image={ele.image} title={ele.title} />
          })}
        </div>
      </div>

      <div className="min-w-60 mb-8">
        <h1 className="text-xl font-semibold font-exo text-black mb-5">Tags</h1>
        <div className="flex gap-x-2 gap-y-5 flex-wrap justify-between">
        {tags.map((tag, key) => {
            const isSelected = selectedTags.includes(tag)
            return (
              <button
                key={key}
                onClick={() => onTagChange(tag)}
                className={`text-lg px-2 rounded border border-solid ${
                  isSelected
                    ? 'bg-black text-white border-black'
                    : 'text-gray border-whiteGrey'
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
