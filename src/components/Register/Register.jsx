import React from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Button from "../button/button";
import PasswordInput from "../PasswordInput/PasswordInput";

const Register = ({ isHidden, toggleIsHidden }) => {
  return (
    <div className="Register w-1/2 p-7 max-md:w-full">
      <h1 className="text-3xl font-semibold font-exo text-black mb-7">
        Register
      </h1>
      <form action="" method="post">
        <div className="w-full flex-col flex gap-5">
          <div className="input">
            <input
              type="text"
              className="w-full h-12 rounded-lg border border-grey px-4 outline-none"
              placeholder="Email*"
            />
          </div>
          <div className="input">
            <input
              type="text"
              className="w-full h-12 rounded-lg border border-grey px-4 outline-none"
              placeholder="Username*"
            />
          </div>
          <PasswordInput placeholder={"Password*"} />
          <PasswordInput placeholder={"Confirm Password*"} />
        </div>
        <Button buttonText={"Register"} className={"w-full mt-5"} />
      </form>
    </div>
  );
};

export default Register;
