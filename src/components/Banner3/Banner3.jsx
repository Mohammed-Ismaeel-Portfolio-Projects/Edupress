import React from 'react'
import studentAvatar from './../../assets/images/student-avatar.png'
import './Banner3Style.css'
import Button from '../button/button'
const Banner3 = () => {
  return (
    <section className="banner-three w-11/12 mx-auto h-64 my-16 bg-cover rounded-xl flex justify-between items-center px-5 max-lg:flex-col max-lg:justify-center max-lg:h-auto max-lg:py-16 max-md:w-full max-md:rounded-none gap-6">
      <div className="left-banner flex justify-between items-center gap-8 max-lg:flex-col">
        <div className="image">
          <img src={studentAvatar} alt="" />
        </div>
        <h1 className="text-2xl text-black font-semibold">
          Let’s Start With Academy LMS
        </h1>
      </div>
      <div className="right-banner flex gap-5 max-lg:flex-col">
        <button className="border-2 border-orange text-orange rounded-full px-6 py-2 text-lg font-medium">
          I'm A Student
        </button>
        <Button buttonText={'Become An Instructor'} />
      </div>
    </section>
  )
}

export default Banner3
