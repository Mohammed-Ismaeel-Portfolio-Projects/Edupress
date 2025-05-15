import React from 'react'
import EduPressLogo from './../../assets/images/LOGO.png'
import { IoSearch } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
const NavBar = ({ navLinks }) => {
  return (
    <nav className="w-full h-20 flex justify-between items-center fixed z-50 py-0 bg-white">
      <div className="logo text-2xl font-bold">
        <img src={EduPressLogo} alt="" />
      </div>
      <ul className="flex gap-4 menu h-full max-lg:hidden">
        {navLinks?.map((ele, key) => {
          return (
            <li key={key}>
              <NavLink
                className={`
                  ${key === 0 ? 'nav-active' : ''}
                  px-5 font-exo flex justify-center items-center text-nowrap w-full h-full relative text-lg text-black font-medium hover:cursor-pointer hover:text-orange no-underline`}
                to={`/${ele.path}`}
              >
                {ele.title}
              </NavLink>
            </li>
          )
        })}
      </ul>
      <div className="flex items-center gap-4 max-lg:hidden">
        <NavLink to={`/auth`} className={'hover:text-orange'}>
          Login / Register
        </NavLink>
        <button className="rounded-full p-2 font-medium outline-none border-orange border-2">
          <IoSearch
            style={{
              color: 'rgba(255, 120, 45, 1)',
              width: '20px',
              height: '20px',
            }}
          />
        </button>
      </div>
    </nav>
  )
}

export default NavBar
