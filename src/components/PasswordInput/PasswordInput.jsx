import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";

const PasswordInput = ({
  placeholder = "Password*",
  value: controlledValue,
  onChange: controlledOnChange,
  required = false,
  id,
}) => {
  const [isHidden, setIsHidden] = useState(true);
  const [localPassword, setLocalPassword] = useState("");

  const isControlled = controlledValue !== undefined;
  const password = isControlled ? controlledValue : localPassword;

  const toggleIsHidden = () => {
    setIsHidden((prev) => !prev);
  };

  const handleInputChange = (e) => {
    if (isControlled) {
      if (controlledOnChange) controlledOnChange(e.target.value);
    } else {
      setLocalPassword(e.target.value);
    }
  };

  return (
    <div className="input h-12 relative">
      <input
        id={id}
        type={isHidden ? "password" : "text"}
        className="w-full h-full rounded-lg border border-grey px-4 pr-12 outline-none focus:border-orange transition-colors"
        placeholder={placeholder}
        required={required}
        value={password}
        onChange={handleInputChange}
        aria-label={placeholder.replace("*", "")}
      />
      {password ? (
        <button
          type="button"
          onClick={toggleIsHidden}
          className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-black p-1"
          aria-label={isHidden ? "Show password" : "Hide password"}
        >
          {isHidden ? (
            <IoMdEye style={{ fontSize: "20px", color: "rgba(157, 157, 157, 1)" }} />
          ) : (
            <IoMdEyeOff style={{ fontSize: "20px", color: "rgba(157, 157, 157, 1)" }} />
          )}
        </button>
      ) : null}
    </div>
  );
};

export default PasswordInput;
