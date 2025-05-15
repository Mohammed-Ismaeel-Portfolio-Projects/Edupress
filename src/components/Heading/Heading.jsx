import React from "react";
import Button from "../button/button";
import "./HeadingStyle.css";
import { Link } from "react-router-dom";
const Heading = ({ title, desc, buttonText, buttonTo }) => {
  return (
    <div className="heading h-20 w-full flex justify-between items-center max-md:justify-center max-md:text-center">
      <div className="flex flex-col justify-between gap-3">
        <h1 className="font-exo text-3xl font-semibold text-black">{title}</h1>
        <p className="text-gray text-lg">{desc}</p>
      </div>
      <Link to={buttonTo}>
        <Button buttonText={buttonText} />
      </Link>
    </div>
  );
};

export default Heading;
