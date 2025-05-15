import React from 'react'
import FeedbackCard from '../FeedbackCard/FeedbackCard'

const Feedback = () => {
  return (
    <section className="feedback w-11/12 mx-auto">
      <h1 className="text-center text-3xl text-black font-semibold font-exo mb-3">
        Student Feedbacks
      </h1>
      <p className="text-center text-gray text-lg ">
        What Students Say About Academy LMS
      </p>
      <div className="feedback-cards flex justify-between gap-10 mt-12">
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
        <FeedbackCard />
      </div>
    </section>
  )
}

export default Feedback
