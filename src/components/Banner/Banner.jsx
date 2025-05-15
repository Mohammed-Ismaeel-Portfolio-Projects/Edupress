import React from "react";
import "./BannerStyle.css";
import Button from "../button/button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="banner w-11/12 h-80 my-16 mx-auto bg-cover rounded-3xl relative max-md:w-full max-md:rounded-none">
      <div className="banner-text absolute left-12 top-1/2 -translate-y-1/2 max-w-md max-md:min-w-80 max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center">
        <p className="top-heading font-exo font-semibold text-gray uppercase pb-3">
          get more power form
        </p>
        <h1 className="text-3xl text-black font-semibold pb-3">
          Learn Press Add-Ons
        </h1>
        <p className="desc text-lg text-gray leading-7">
          The next level of LearnPress - LMS WordPress Plugin. More Powerful,
          Flexible and Magical Inside.
        </p>
        <Link to='/Courses'>
          <Button buttonText={"Explore Course"} />
        </Link>
      </div>
    </section>
  );
};

export default Banner;

// .banner {
//   width: 100%;
//   height: 324px;
//   margin: 70px 0;
//   background-size: cover;
//   border-radius: 20px;
//   position: relative;
// }

// .banner .banner-text {
//   max-width: 450px;
//   position: absolute;
//   left: 50px;
//   top: 50%;
//   transform: translateY(-50%);
// }

// .banner .banner-text .top-heading {
//   font-family: 'Exo', sans-serif !important;
//   font-weight: 600;
//   color: #555;
//   text-transform: uppercase;
//   padding-bottom: 12px;
// }

// .banner .banner-text h1 {
//   font-size: 2rem;
//   font-weight: 600;
// }

// .banner .banner-text .desc {
//   font-size: 1.125rem;
//   line-height: 27px;
//   color: #555;
// }

// .banner .banner-text button {
//   margin-top: 20px;
//   background-color: #ff782d;
//   color: #fff;
// }
