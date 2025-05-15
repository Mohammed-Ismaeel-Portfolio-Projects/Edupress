import React from "react";

import rightSymbol from "./../../assets/images/right-symbol.png";
import growSkillsImage from "./../../assets/images/grow-skill-section-image.png";
import Button from "../button/button";
import { Link } from "react-router-dom";

const Grow = () => {
  return (
    <section className="grow-skills w-11/12 mx-auto flex justify-between items-center gap-20 my-16 max-md:flex-col-reverse max-md:justify-center">
      <div className="img w-1/2 max-md:w-11/12">
        <img src={growSkillsImage} alt="" />
      </div>
      <div className="content w-1/2 pr-11 max-md:w-11/12">
        <h1 className="text-3xl pb-5 font-exo font-semibold">
          Grow Us Your skill <br />
          With LearnPress LMS
        </h1>
        <p className="text-lg text-slate-600 pb-4">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized that cannot trouble.
        </p>
        <ul className="list-none flex flex-col gap-3 mb-5">
          <li className="flex items-center gap-1">
            <img src={rightSymbol} alt="right-symbol" className="w-5" />
            <span>Certification</span>
          </li>
          <li className="flex items-center gap-1">
            <img src={rightSymbol} alt="right-symbol" className="w-5" />
            <span>Certification</span>
          </li>
          <li className="flex items-center gap-1">
            <img src={rightSymbol} alt="right-symbol" className="w-5" />
            <span>Certification</span>
          </li>
          <li className="flex items-center gap-1">
            <img src={rightSymbol} alt="right-symbol" className="w-5" />
            <span>Certification</span>
          </li>
        </ul>
        <Link to="/courses">
          <Button buttonText={"Explorer Courses"} />
        </Link>
      </div>
    </section>
  );
};

export default Grow;

// .grow-skills {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   gap: 120px;
//   margin-top: 70px;
// }

// .grow-skills div {
//   max-width: 50%;
// }

// .grow-skills .img img {
//   width: 100%;
// }

// .grow-skills .content {
//   padding-right: 45px;
// }

// .grow-skills .content h1 {
//   font-size: 2rem;
//   padding-bottom: 20px;
// }

// .grow-skills .content p {
//   font-size: 1.125rem;
//   color: #555;
//   padding-bottom: 16px;
// }

// .grow-skills .content ul {
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   gap: 10px;
//   margin-bottom: 20px;
// }

// .grow-skills .content ul li {
//   display: flex;
//   align-items: center;
//   gap: 5px;
// }

// .grow-skills .content button {
//   background-color: #ff782d;
//   color: #fff;
// }
