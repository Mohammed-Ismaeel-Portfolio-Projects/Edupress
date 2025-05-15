import React from "react";

import "./Banner2Style.css";
import Button from "../button/button";
import { Link } from "react-router-dom";

const Banner2 = () => {
  return (
    <section className="banner-two w-11/12 mx-auto h-64 my-16 bg-cover rounded-xl flex justify-center items-center px-5 gap-6">
      <div className="banner-content text-center">
        <p className="uppercase text-base text-black font-exo font-semibold">
          providing amazing
        </p>
        <h1 className="text-3xl text-black font-semibold font-exo mt-3 mb-6">
          Let’s Start With Academy LMS
        </h1>
        <p className="text-gray text-lg mb-5">
          The next level of LMS WordPress Theme. Learn anytime and anywhere.
        </p>
        <Link to="/Courses">
          <Button buttonText={"Explorer Course"} />
        </Link>
      </div>
    </section>
  );
};

export default Banner2;
