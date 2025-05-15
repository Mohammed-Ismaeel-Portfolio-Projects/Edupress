import React from 'react'

import studentIcon from './../../assets/images/student-icon.png'
import timeIcon from './../../assets/images/time-icon.png'
import levelIcon from './../../assets/images/levels-icon.png'
import lessonIcon from './../../assets/images/lesson-icon.png'
const FeaturedCard = ({
  courseImage,
  scope,
  title,
  by,
  weeks,
  students,
  levels,
  lessons,
  salary,
  isList,
}) => {
  return (
    <div
      className={`featured-card max-w-lg border border-slate-300 rounded-3xl 
        ${isList && 'flex rounded-tr-none rounded-br-none '}
      `
      }
      style={{
        maxWidth: isList ? '100%' : undefined
      }}
    >
      <div className="course-image relative">
        <img
          src={courseImage}
          alt=""
          className={`w-full 
            ${!isList && 'rounded-tr-2xl rounded-tl-2xl'}
           ${isList && ' rounded-bl-2xl rounded-tl-2xl'}`}
        />
        <span className="absolute top-5 left-5 py-2 px-3 bg-black text-white font-medium rounded-lg">
          {scope}
        </span>
      </div>
      <div className="card-info p-5">
        <p className="by mb-3">{by}</p>
        <h1 className="text-xl font-semibold font-exo">{title} </h1>
        <div className="date-students flex justify-between my-4 gap-5">
          <div className="group-icon flex gap-1 items-center">
            <div className="icon w-4 h-4">
              <img src={timeIcon} alt="time-icon" className="w-full" />
            </div>
            <p>{weeks}Weeks</p>
          </div>
          <div className="group-icon flex gap-1 items-center">
            <div className="icon w-4 h-4">
              <img src={studentIcon} alt="student-icon" className="w-full" />
            </div>
            <p>{students} Students</p>
          </div>
          {isList ? (
            <div className="flex gap-5">
              <div className="group-icon flex gap-1 items-center">
                <div className="icon w-4 h-4">
                  <img src={levelIcon} alt="student-icon" className="w-full" />
                </div>
                <p>{levels} </p>
              </div>
              <div className="group-icon flex gap-1 items-center">
                <div className="icon w-4 h-4">
                  <img src={lessonIcon} alt="student-icon" className="w-full" />
                </div>
                <p>{lessons} Lessons</p>
              </div>
            </div>
          ) : (
            ' '
          )}
        </div>
        <div className="tail-card flex justify-between border-t border-slate-300 pt-4">
          <p className="price flex gap-1 items-center">
            <del className="text-gray text-lg">${salary}</del>
            <span className="text-green text-lg font-medium">Free</span>
          </p>
          <a className="text-lg font-medium cursor-pointer hover:text-orange">
            View More
          </a>
        </div>
      </div>
    </div>
  )
}

export default FeaturedCard
