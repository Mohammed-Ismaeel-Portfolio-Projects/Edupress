import './FooterStyle.css'
import logo from './../../assets/images/LOGO.png'
import { NavLink, Link } from 'react-router-dom'
import {
  FaFacebookF,
  FaPinterestP,
  FaXTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa6'

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="main-footer py-12 px-8 lg:px-16 flex justify-between gap-8 max-lg:flex-wrap max-sm:flex-col">
        <div className="left max-w-md">
          <Link to="/" aria-label="EduPress Home">
            <img src={logo} alt="EduPress Logo" className="h-9 w-auto" />
          </Link>
          <p className="max-w-96 mt-6 text-gray text-base leading-relaxed">
            EduPress is the premier LMS platform delivering high quality online learning experiences, accredited certifications, and expert-led curriculum.
          </p>
        </div>
        <div className="get-help text-nowrap">
          <h2 className="text-xl mb-6 uppercase text-black font-exo font-semibold">
            get help
          </h2>
          <ul className="flex-col list-none gap-3 flex">
            <li className="text-gray font-medium text-base hover:text-orange transition-colors">
              <NavLink to={`/contact`}>Contact</NavLink>
            </li>
            <li className="text-gray font-medium text-base hover:text-orange transition-colors">
              <NavLink to={`/blog`}>Latest Articles</NavLink>
            </li>
            <li className="text-gray font-medium text-base hover:text-orange transition-colors">
              <NavLink to={`/faqs`}>FAQs</NavLink>
            </li>
            <li className="text-gray font-medium text-base hover:text-orange transition-colors">
              <NavLink to={`/courses`}>All Courses</NavLink>
            </li>
          </ul>
        </div>
        <div className="programs">
          <h2 className="text-xl mb-6 uppercase text-black font-exo font-semibold">
            programs
          </h2>
          <ul className="flex-col list-none gap-3 flex">
            <li className="text-gray font-medium text-base hover:text-orange transition-colors">
              <Link to="/courses?category=design">Art & Design</Link>
            </li>
            <li className="text-gray font-medium text-base hover:text-orange transition-colors">
              <Link to="/courses?category=business">Business & Finance</Link>
            </li>
            <li className="text-gray font-medium text-base hover:text-orange transition-colors">
              <Link to="/courses?category=development">Development</Link>
            </li>
            <li className="text-gray font-medium text-base hover:text-orange transition-colors">
              <Link to="/courses?category=marketing">Marketing</Link>
            </li>
            <li className="text-gray font-medium text-base hover:text-orange transition-colors">
              <Link to="/courses?category=content">Content Writing</Link>
            </li>
          </ul>
        </div>
        <div className="contact-us max-w-80">
          <h2 className="text-xl mb-6 uppercase text-black font-exo font-semibold">
            contact us
          </h2>
          <div className="contact-info flex flex-col gap-3">
            <p className="text-gray text-base leading-relaxed">
              Address: 2321 New Design Str, Education District, New York, USA
            </p>
            <div>
              <p className="text-gray text-base">Tel: (123) 2500-567-8988</p>
              <p className="text-gray text-base">Mail: support@edupress.com</p>
            </div>
            <ul className="list-none flex gap-4 mt-2">
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EduPress on Facebook"
                  className="text-gray text-lg hover:text-orange transition-colors inline-flex"
                >
                  <FaFacebookF size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EduPress on Pinterest"
                  className="text-gray text-lg hover:text-orange transition-colors inline-flex"
                >
                  <FaPinterestP size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EduPress on X"
                  className="text-gray text-lg hover:text-orange transition-colors inline-flex"
                >
                  <FaXTwitter size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EduPress on Instagram"
                  className="text-gray text-lg hover:text-orange transition-colors inline-flex"
                >
                  <FaInstagram size={18} />
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EduPress on YouTube"
                  className="text-gray text-lg hover:text-orange transition-colors inline-flex"
                >
                  <FaYoutube size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="tail-footer border-t border-slate-100 py-6 text-center text-sm text-gray-500">
        Copyright © 2026 EduPress LMS. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
