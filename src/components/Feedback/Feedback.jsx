import FeedbackCard from '../FeedbackCard/FeedbackCard'

const studentReviews = [
  {
    name: "Alex Martinez",
    role: "Frontend Developer",
    quote: "EduPress transformed my web development career. The hands-on project courses and instructor feedback made complex concepts easy to master.",
  },
  {
    name: "Sophia Chen",
    role: "UI/UX Designer",
    quote: "The design fundamentals course is unmatched. Clean lessons, practical exercises, and a passionate student community that inspires growth every day.",
  },
  {
    name: "Marcus Vance",
    role: "Full Stack Engineer",
    quote: "Comprehensive curriculum with modern, relevant technologies. It helped me land my dream role within three months of completing the track.",
  },
  {
    name: "Elena Rostova",
    role: "Digital Marketer",
    quote: "The marketing analytics course provided real-world strategies that I immediately implemented for our clients with measurable results.",
  },
]

const Feedback = () => {
  return (
    <section className="feedback w-11/12 mx-auto my-20">
      <h2 className="text-center text-3xl text-black font-semibold font-exo mb-3">
        Student Feedback
      </h2>
      <p className="text-center text-gray text-lg max-w-xl mx-auto">
        What Students Say About EduPress & Academy LMS
      </p>
      <div className="feedback-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {studentReviews.map((review, index) => (
          <FeedbackCard
            key={index}
            name={review.name}
            role={review.role}
            quote={review.quote}
          />
        ))}
      </div>
    </section>
  )
}

export default Feedback
