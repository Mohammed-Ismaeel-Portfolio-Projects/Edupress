import React from 'react'
import './HeroStyle.css'
import Button from '../button/button'
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-text max-w-lg absolute left-16 top-1/2 -translate-y-1/2 max-md:w-11/12 max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center">
        <h1 className="font-exo font-semibold text-5xl text-black leading-snug max-sm:text-4xl">
          Build Skills With <br />
          Online Course
        </h1>
        <p className="text-gray text-lg mt-6 mb-5">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized that cannot trouble.
        </p>
        <Button buttonText={'Posts Comment'} />
      </div>
    </div>
  )
}

export default Hero
