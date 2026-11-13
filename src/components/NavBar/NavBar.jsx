import { useState, useRef, useEffect } from 'react'
import EduPressLogo from './../../assets/images/LOGO.png'
import { IoSearch, IoMenu, IoClose } from 'react-icons/io5'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { useDemoStore } from '../../context/DemoStoreContext'
import { FaHeart, FaGraduationCap, FaCircleUser, FaRightFromBracket } from 'react-icons/fa6'

const NavBar = ({ navLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false)
  const navigate = useNavigate()

  const profileMenuRef = useRef(null)
  const profileButtonRef = useRef(null)
  const searchRef = useRef(null)
  const searchButtonRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const mobileMenuButtonRef = useRef(null)

  const { user, isAuthenticated, logoutDemoUser, wishlistCount, enrolledCount } = useDemoStore()

  // Handle outside-click and Escape-key dismissals
  useEffect(() => {
    const handleOutsideClick = (e) => {
      // Profile menu dismissal
      if (
        isUserMenuOpen &&
        profileMenuRef.current &&
        !profileMenuRef.current.contains(e.target)
      ) {
        setIsUserMenuOpen(false)
      }

      // Search popup dismissal
      if (
        isSearchOpen &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setIsSearchOpen(false)
      }

      // Mobile drawer dismissal
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(e.target) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(e.target)
      ) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (isUserMenuOpen) {
          setIsUserMenuOpen(false)
          profileButtonRef.current?.focus()
        }
        if (isSearchOpen) {
          setIsSearchOpen(false)
          searchButtonRef.current?.focus()
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false)
          mobileMenuButtonRef.current?.focus()
        }
      }
    }

    if (isUserMenuOpen || isSearchOpen || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleOutsideClick)
      document.addEventListener('touchstart', handleOutsideClick)
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
      document.removeEventListener('touchstart', handleOutsideClick)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isUserMenuOpen, isSearchOpen, isMobileMenuOpen])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery.trim())}`)
      setIsSearchOpen(false)
      setSearchQuery('')
      setIsMobileMenuOpen(false)
    }
  }

  const handleLogout = () => {
    logoutDemoUser()
    setIsUserMenuOpen(false)
    setIsMobileMenuOpen(false)
    navigate('/auth')
  }

  return (
    <nav className="w-full h-20 flex justify-between items-center fixed top-0 left-0 z-50 px-8 lg:px-16 bg-white shadow-sm">
      {/* Brand Logo */}
      <Link to="/" className="logo text-2xl font-bold flex items-center" aria-label="EduPress Home">
        <img src={EduPressLogo} alt="EduPress Logo" className="h-9 w-auto" />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="flex gap-2 menu h-full items-center max-lg:hidden list-none">
        {navLinks?.map((ele, index) => (
          <li key={index} className="h-full flex items-center">
            <NavLink
              to={`/${ele.path}`}
              className={({ isActive }) =>
                `px-4 font-exo flex items-center h-full relative text-lg font-medium transition-colors duration-200 no-underline ${
                  isActive
                    ? 'text-orange-accessible font-semibold border-b-2 border-orange'
                    : 'text-black hover:text-orange-accessible'
                }`
              }
            >
              {ele.title}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Desktop Actions */}
      <div className="flex items-center gap-5 max-lg:hidden">
        {/* Wishlist Quick Icon */}
        <NavLink
          to="/my-wishlist"
          className="relative p-2 text-slate-700 hover:text-orange transition-colors"
          title="My Wishlist"
          aria-label={`Wishlist with ${wishlistCount} courses`}
        >
          <FaHeart size={18} />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </NavLink>

        {/* Auth / Profile Area */}
        {isAuthenticated ? (
          <div className="relative" ref={profileMenuRef}>
            <button
              type="button"
              ref={profileButtonRef}
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
              className="flex items-center gap-2 py-1.5 px-3 rounded-full border border-slate-200 hover:border-orange transition-colors cursor-pointer text-left"
              aria-expanded={isUserMenuOpen}
              aria-label="User profile menu"
            >
              <div className="w-7 h-7 rounded-full bg-orange/10 text-orange flex items-center justify-center font-bold text-xs">
                {user.name.charAt(0).toUpperCase()}
              </div>
              <span className="font-exo font-semibold text-sm text-black max-w-[120px] truncate">
                {user.name}
              </span>
            </button>

            {/* Dropdown Menu */}
            {isUserMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-slate-200 rounded-2xl shadow-lg py-2 z-50 animate-fadeIn">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-xs font-semibold text-black truncate">{user.name}</p>
                  <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
                </div>

                <Link
                  to="/my-learning"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 text-xs text-gray-700 hover:bg-slate-50 transition-colors no-underline"
                >
                  <span className="flex items-center gap-2">
                    <FaGraduationCap className="text-orange" />
                    My Learning
                  </span>
                  <span className="bg-slate-100 text-slate-600 font-bold px-1.5 py-0.5 rounded text-[10px]">
                    {enrolledCount}
                  </span>
                </Link>

                <Link
                  to="/my-wishlist"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center justify-between px-4 py-2.5 text-xs text-gray-700 hover:bg-slate-50 transition-colors no-underline"
                >
                  <span className="flex items-center gap-2">
                    <FaHeart className="text-red-500" />
                    My Wishlist
                  </span>
                  <span className="bg-slate-100 text-slate-600 font-bold px-1.5 py-0.5 rounded text-[10px]">
                    {wishlistCount}
                  </span>
                </Link>

                <Link
                  to="/my-profile"
                  onClick={() => setIsUserMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 text-xs text-gray-700 hover:bg-slate-50 transition-colors no-underline"
                >
                  <FaCircleUser className="text-slate-500" />
                  My Profile
                </Link>

                <div className="border-t border-slate-100 mt-1 pt-1">
                  <button
                    type="button"
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors cursor-pointer text-left"
                  >
                    <FaRightFromBracket size={12} />
                    Sign Out (Demo)
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              `text-sm font-semibold py-2 px-4 rounded-full border border-slate-200 transition-colors ${
                isActive ? 'border-orange text-orange' : 'text-black hover:border-black'
              }`
            }
          >
            Login / Register
          </NavLink>
        )}

        {/* Search Icon */}
        <div className="relative" ref={searchRef}>
          <button
            type="button"
            ref={searchButtonRef}
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="cursor-pointer text-xl text-black hover:text-orange transition-colors p-2"
            aria-label="Toggle Search"
          >
            <IoSearch />
          </button>

          {isSearchOpen && (
            <div className="absolute right-0 top-12 bg-white shadow-xl rounded-2xl p-3 border border-slate-200 w-80 z-50">
              <form onSubmit={handleSearchSubmit} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl px-3 py-1.5 text-sm outline-none focus:border-orange"
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-orange text-white px-4 py-1.5 rounded-xl text-sm font-semibold hover:bg-orange/90"
                >
                  Search
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden flex items-center gap-3">
        <NavLink
          to="/my-wishlist"
          className="relative p-1 text-slate-700"
          title="Wishlist"
          aria-label="Wishlist"
        >
          <FaHeart size={18} />
          {wishlistCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              {wishlistCount}
            </span>
          )}
        </NavLink>

        <button
          type="button"
          ref={mobileMenuButtonRef}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-3xl text-black cursor-pointer p-1"
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-6 px-8 flex flex-col gap-4 animate-fadeIn">
          {isAuthenticated && (
            <div className="p-3 bg-slate-50 rounded-xl mb-1">
              <p className="text-xs font-semibold text-black">{user.name}</p>
              <p className="text-[11px] text-gray-500">{user.email}</p>
            </div>
          )}

          <form onSubmit={handleSearchSubmit} className="flex gap-2 mb-2">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-slate-300 rounded-xl px-3 py-2 text-sm outline-none focus:border-orange"
            />
            <button
              type="submit"
              className="bg-orange text-white px-4 py-2 rounded-xl text-sm font-semibold"
            >
              Search
            </button>
          </form>

          <ul className="flex flex-col gap-3 list-none p-0 m-0">
            {navLinks?.map((ele, index) => (
              <li key={index}>
                <NavLink
                  to={`/${ele.path}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-exo font-medium block py-1 no-underline ${
                      isActive ? 'text-orange-accessible font-semibold' : 'text-black'
                    }`
                  }
                >
                  {ele.title}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            {isAuthenticated ? (
              <>
                <Link
                  to="/my-learning"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-1 text-sm text-gray-700 font-medium no-underline"
                >
                  <span className="flex items-center gap-2">
                    <FaGraduationCap className="text-orange" />
                    My Learning
                  </span>
                  <span className="bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded text-xs">
                    {enrolledCount}
                  </span>
                </Link>

                <Link
                  to="/my-wishlist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between py-1 text-sm text-gray-700 font-medium no-underline"
                >
                  <span className="flex items-center gap-2">
                    <FaHeart className="text-red-500" />
                    My Wishlist
                  </span>
                  <span className="bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded text-xs">
                    {wishlistCount}
                  </span>
                </Link>

                <Link
                  to="/my-profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2 py-1 text-sm text-gray-700 font-medium no-underline"
                >
                  <FaCircleUser className="text-slate-500" />
                  My Profile
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="text-left text-sm text-red-600 font-medium py-1 cursor-pointer flex items-center gap-2"
                >
                  <FaRightFromBracket size={14} />
                  Sign Out (Demo)
                </button>
              </>
            ) : (
              <NavLink
                to="/auth"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-semibold text-orange-accessible block py-1 no-underline"
              >
                Login / Register
              </NavLink>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavBar
