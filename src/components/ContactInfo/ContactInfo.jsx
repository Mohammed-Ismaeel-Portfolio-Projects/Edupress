import { useState } from 'react'
import { FaPhone } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

const ContactInfo = () => {
  const [isMapLoading, setIsMapLoading] = useState(true)

  return (
    <div className="mt-52 flex w-11/12 mx-auto justify-between gap-7 max-lg:flex-col max-lg:w-full max-lg:justify-center ">
      <div className="left w-4/12 max-lg:px-10 max-lg:w-3/4 max-sm:w-full">
        <h1 className="font-exo text-4xl font-semibold text-black max-sm:text-3xl">
          Need A Direct Line?
        </h1>
        <p className="text-gray text-lg leading-7 mt-6">
          Have questions regarding our courses, curriculum, or enterprise training? Reach out directly to our admissions team.
        </p>
        <div className="contact-detail flex flex-col gap-8 mt-10">
          <div className="phone flex items-center gap-4">
            <FaPhone
              style={{
                padding: '12px',
                backgroundColor: 'rgba(245, 245, 245, 1)',
                borderRadius: '8px',
                color: 'rgba(255, 120, 45, 1)',
                fontSize: '56px',
              }}
              aria-hidden="true"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 font-medium">Phone</h3>
              <a href="tel:+11234567890" className="text-lg text-black font-semibold font-exo hover:text-orange transition-colors">
                (123) 456 7890
              </a>
            </div>
          </div>
          <div className="email flex items-center gap-4">
            <MdEmail
              style={{
                padding: '12px',
                backgroundColor: 'rgba(245, 245, 245, 1)',
                borderRadius: '8px',
                color: 'rgba(255, 120, 45, 1)',
                fontSize: '56px',
              }}
              aria-hidden="true"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-sm uppercase tracking-wider text-gray-500 font-medium">Email</h3>
              <a href="mailto:support@edupress.com" className="text-lg text-black font-semibold font-exo hover:text-orange transition-colors">
                support@edupress.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="relative right w-3/5 max-lg:w-full min-h-[350px]">
        {isMapLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10 rounded-3xl max-lg:rounded-none">
            <span className="text-orange font-bold text-lg animate-pulse">
              Loading map...
            </span>
          </div>
        )}

        <iframe
          title="EduPress Office Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.49873162762!2d36.28289545!3d33.50747549999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2z2K_Zhdi02YLYjCDYs9mI2LHZitin!5e0!3m2!1sar!2snl!4v1730446656571!5m2!1sar!2snl"
          width="600"
          height="450"
          onLoad={() => setIsMapLoading(false)}
          style={{ border: '0', width: '100%' }}
          className="rounded-3xl max-lg:rounded-none shadow-sm"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}

export default ContactInfo
