import React from 'react'

const Button = ({ buttonText, className }) => {
  return (
    <button
      className={`${className} text-white bg-orange font-medium rounded-3xl py-3 px-6`}
    >
      {buttonText}
    </button>
  )
}

export default Button
