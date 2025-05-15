import React, { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

const PasswordInput = ({ placeholder }) => {
  const [isHidden, setIsHidden] = useState(true);
  const [password, setPassword] = useState("");

  const toggleIsHidden = () => {
    setIsHidden(!isHidden);
  };

  const handleInputChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="input h-12 relative">
      <input
        type={isHidden ? "password" : "text"}
        className="w-full h-full rounded-lg border border-grey px-4 outline-none"
        placeholder={placeholder}
        require
        value={password}
        onChange={handleInputChange}
      />
      {password &&
        (isHidden ? (
          <IoMdEye
            onMouseDown={toggleIsHidden}
            style={{
              position: "absolute",
              top: "50%",
              right: "16px",
              transform: "translateY(-50%)",
              fontSize: "20px",
              color: "rgba(157, 157, 157, 1)",
            }}
          />
        ) : (
          <IoMdEyeOff
            onMouseUp={toggleIsHidden}
            style={{
              position: "absolute",
              top: "50%",
              right: "16px",
              transform: "translateY(-50%)",
              fontSize: "20px",
              color: "rgba(157, 157, 157, 1)",
            }}
          />
        ))}
    </div>
  );
};

export default PasswordInput;
