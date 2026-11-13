import { useState, useEffect } from 'react'
import Button from '../Button/Button'
import { useDemoStore } from '../../context/DemoStoreContext'
import { FaCircleInfo } from 'react-icons/fa6'

const ContactUs = () => {
  const { addContactSubmission, user } = useDemoStore()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  // Pre-fill user data if available
  useEffect(() => {
    if (user?.name) {
      setName(user.name)
      setEmail(user.email || '')
    }
  }, [user])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !comment.trim()) {
      setErrorMessage('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) {
      setErrorMessage('Please provide a valid email format.')
      return
    }

    // Persist in DemoStore localStorage
    addContactSubmission({
      name: name.trim(),
      email: email.trim(),
      comment: comment.trim(),
    })

    setErrorMessage('')
    setSubmitted(true)
    setName('')
    setEmail('')
    setComment('')
  }

  return (
    <div className="w-11/12 mx-auto my-16">
      <h2 className="text-3xl font-exo font-semibold text-black">Contact Us</h2>
      <p className="mt-2 text-gray-500 text-base">
        Your email address will not be published. Required fields are marked *
      </p>

      {/* Demo Notice Banner */}
      <div className="mt-4 p-3.5 bg-slate-50 border border-slate-200 rounded-2xl flex items-center gap-3 text-xs text-slate-700 max-w-3xl">
        <FaCircleInfo className="text-orange shrink-0" size={15} />
        <p>
          <strong className="font-semibold">Local Demo Submission:</strong> Messages submitted here are saved locally in your browser storage. No network transmission is made to any external server.
        </p>
      </div>

      {submitted && (
        <div className="mt-6 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800 text-sm font-medium max-w-3xl">
          ✓ Your message has been saved locally in this demo. It has <strong>NOT</strong> been sent to EduPress or any external recipient.
        </div>
      )}

      {errorMessage && (
        <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm max-w-3xl">
          {errorMessage}
        </div>
      )}

      <div className="contact-form w-full mt-8">
        <form onSubmit={handleSubmit} className="max-w-3xl flex flex-col gap-5">
          <div className="flex justify-between w-full gap-5 max-md:flex-col">
            <div className="input w-1/2 max-md:w-full">
              <label htmlFor="contact-name" className="sr-only">Name</label>
              <input
                id="contact-name"
                type="text"
                className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
                placeholder="Name*"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                aria-label="Your Name"
              />
            </div>
            <div className="input w-1/2 max-md:w-full">
              <label htmlFor="contact-email" className="sr-only">Email</label>
              <input
                id="contact-email"
                type="email"
                className="w-full h-12 rounded-xl border border-slate-300 px-4 text-sm outline-none focus:border-orange transition-colors"
                placeholder="Email*"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-label="Your Email"
              />
            </div>
          </div>

          <div className="input w-full">
            <label htmlFor="contact-comment" className="sr-only">Comment</label>
            <textarea
              id="contact-comment"
              rows={5}
              className="w-full p-4 rounded-xl border border-slate-300 text-sm outline-none focus:border-orange transition-colors resize-y"
              placeholder="Comment*..."
              required
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>

          <div>
            <Button
              type="submit"
              className="py-3 px-8 text-sm cursor-pointer"
              buttonText="Send Message"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
