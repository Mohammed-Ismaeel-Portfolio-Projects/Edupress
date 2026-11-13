import { IoSearch, IoClose } from 'react-icons/io5'
import { MdWindow } from 'react-icons/md'
import { FaList } from 'react-icons/fa'
import { SORT_OPTIONS } from '../../utils/courseFilterUtils'

const SectionHeading = ({
  title,
  toggleSidebar,
  isList,
  searchTerm,
  setSearchTerm,
  totalResults = 0,
  totalCourses = 0,
  sortBy = 'popular',
  setSortBy,
}) => {
  return (
    <div className="flex justify-between items-center flex-wrap gap-4 relative z-10 pb-4 border-b border-slate-100 mb-6">
      <div>
        <h1 className="font-exo text-2xl md:text-3xl font-bold text-black">{title}</h1>
        <p className="text-xs md:text-sm text-gray-500 mt-1">
          Showing <span className="font-semibold text-black">{totalResults}</span> of{' '}
          <span className="font-semibold text-black">{totalCourses}</span> courses
        </p>
      </div>

      <div className="right flex items-center flex-wrap gap-3">
        {/* Search Bar with Clear Icon */}
        <div className="search relative">
          <input
            type="text"
            className="border-b border-black w-44 sm:w-60 h-9 pr-7 pl-1 outline-none focus:border-orange transition-colors text-sm"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            aria-label={`Search ${title}`}
          />
          {searchTerm ? (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-black transition-colors p-1"
              aria-label="Clear search text"
            >
              <IoClose size={18} />
            </button>
          ) : (
            <IoSearch
              className="absolute right-0 top-1/2 -translate-y-1/2 text-black pointer-events-none"
              size={18}
              aria-hidden="true"
            />
          )}
        </div>

        {/* Sorting Dropdown */}
        <div className="sort-control flex items-center gap-1.5 text-xs md:text-sm">
          <label htmlFor="course-sort-select" className="text-gray-500 hidden sm:inline">
            Sort:
          </label>
          <select
            id="course-sort-select"
            value={sortBy}
            onChange={(e) => setSortBy && setSortBy(e.target.value)}
            className="bg-white border border-slate-200 rounded-lg py-1.5 px-2.5 text-xs md:text-sm font-medium text-slate-800 outline-none focus:border-orange transition-colors cursor-pointer"
            aria-label="Sort courses by"
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 border border-slate-200 rounded-lg p-1 bg-white">
          <button
            type="button"
            onClick={isList ? toggleSidebar : undefined}
            aria-label="Grid view"
            title="Grid view"
            className={`p-1.5 rounded transition-colors ${
              !isList ? 'bg-orange/10 text-orange' : 'text-gray-600 hover:text-black'
            }`}
          >
            <MdWindow size={18} />
          </button>
          <button
            type="button"
            onClick={!isList ? toggleSidebar : undefined}
            aria-label="List view"
            title="List view"
            className={`p-1.5 rounded transition-colors ${
              isList ? 'bg-orange/10 text-orange' : 'text-gray-600 hover:text-black'
            }`}
          >
            <FaList size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SectionHeading
