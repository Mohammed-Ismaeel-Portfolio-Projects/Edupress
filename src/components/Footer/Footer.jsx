import React from 'react'
import './FooterStyle.css'
import logo from './../../assets/images/LOGO.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div className="main-footer py-12 px-16 flex justify-between gap-8 max-lg:flex-wrap max-sm:flex-col">
        <div className="left max-w-md">
          <img src={logo} alt="" />
          <p className="max-w-96 mt-8 text-gray text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="get-help text-nowrap">
          <h1 className="text-xl mb-8 uppercase text-black font-exo font-semibold">
            get help
          </h1>
          <ul className="flex-col list-none gap-4 flex">
            <li className="text-gray font-medium text-lg hover:text-orange">
              <NavLink to={`/contact`}>Contact</NavLink>
            </li>
            <li className="text-gray font-medium text-lg hover:text-orange">
              <a href="#">Latest Articles</a>
            </li>
            <li className="text-gray font-medium text-lg hover:text-orange">
              <NavLink to={`/faqs`}>FAQs</NavLink>
            </li>
          </ul>
        </div>
        <div className="programs">
          <h1 className="text-xl mb-8 uppercase text-black font-exo font-semibold">
            programs
          </h1>
          <ul className="flex-col list-none gap-4 flex">
            <li className="text-gray font-medium text-lg hover:text-orange">
              <a href="#">Art & Design</a>
            </li>
            <li className="text-gray font-medium text-lg hover:text-orange">
              <a href="#">Business</a>
            </li>
            <li className="text-gray font-medium text-lg hover:text-orange">
              <a href="#">IT & Software</a>
            </li>
            <li className="text-gray font-medium text-lg hover:text-orange">
              <a href="#">Languages</a>
            </li>
            <li className="text-gray font-medium text-lg hover:text-orange">
              <a href="#">Programming</a>
            </li>
          </ul>
        </div>
        <div className="contact-us max-w-80">
          <h1 className="text-xl mb-8 uppercase text-black font-exo font-semibold">
            contact us
          </h1>
          <div className="contact-info flex flex-col gap-4">
            <p className="text-gray text-lg">
              Address: 2321 New Design Str, Lorem Ipsum 10 Hudson Yards, USA
            </p>
            <div>
              <p className="text-gray text-lg">Tel: (123) 2500-567-8988</p>
              <p className="text-gray text-lg">Mail: supportlms@gmail.com</p>
            </div>
            <ul className="list-none flex gap-3">
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-facebook-f"></i>{' '}
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray text-xl hover:text-orange">
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p className="tail-footer w-max mx-auto py-12 text-gray max-sm:w-4/5 max-sm:text-center">
        Copyright © 2024 LearnPress LMS | Powered by ThimPress
      </p>
    </footer>
  )
}

export default Footer
