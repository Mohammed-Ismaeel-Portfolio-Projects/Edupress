import React from 'react'
import feedIcon from './../../assets/images/feedback-icon.png'
const FeedbackCard = () => {
  return (
    <div className="feedback-card px-8 py-10 border border-grey rounded-2xl">
      <div className="mb-5">
        <img src={feedIcon} alt="" />
      </div>
      <p className="text-black text-lg leading-normal">
        I must explain to you how all this mistaken . Tdea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system and expound
      </p>
      <div className="mt-8">
        <h1 className="text-black text-xl leading-5 font-semibold font-exo">
          Roe Smith
        </h1>
        <p className="text-lg text-gray mt-2">Designer</p>
      </div>
    </div>
  )
}

export default FeedbackCard
