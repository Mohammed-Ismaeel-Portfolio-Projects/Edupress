// import React, { useState } from "react";

// const SidebarCheckbox = ({
//   checkboxId,
//   checkboxTitle,
//   number,
//   starsRate,
//   checkboxHidden,
//   checked,
//   onChange,
//   hidden = false,
//   disabled = false,
// }) => {
//   const [isChecked, setIsChecked] = useState(false);

//   const forId = checkboxTitle
//     ?.toLowerCase()
//     .split(" ")
//     .map((word, index) =>
//       index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
//     )
//     .join("");

//   const renderStars = () => {
//     if (starsRate == null) return null;
//     const stars = [];
//     for (let i = 0; i < 5; i++) {
//       stars.push(
//         <i
//           key={i}
//           className="fa-solid fa-star"
//           style={{ color: i < starsRate ? "#F4BF08" : "#a2a8b4" }}
//         ></i>
//       );
//     }
//     return <div className="stars flex gap-1 mt-1">{stars}</div>;
//   };

//   // const handleCheckboxChange = () => {
//   //   setIsChecked(!isChecked);
//   // };

//   return (
//     <div className="cat flex justify-between">
//       <div className="inp-checkbox flex flex-row-reverse justify-end gap-1 items-center">
//         <label
//           htmlFor={forId}
//           className={`cursor-pointer ${isChecked ? "font-semibold" : ""} ${
//             checkboxHidden ? "cursor-default" : ""
//           }`}
//         >
//           {checkboxTitle}
//           <div className="stars flex gap-1">{renderStars()}</div>
//         </label>
//         <input
//           type="checkbox"
//           name=""
//           id={forId}
//           className={`accent-gray ${checkboxHidden ? "hidden" : ""}`}
//           checked={isChecked}
//           onChange={handleCheckboxChange}
//           disabled={`${checkboxHidden ? "hidden" : ""}`}
//         />
//       </div>
//       <p>{number}</p>
//     </div>
//   );
// };

// export default SidebarCheckbox;


// =================================
import React from "react";

const SidebarCheckbox = ({
  id,
  label,
  count,
  number,
  starsRate = null,
  checked,
  onChange,
  hidden = false,
  disabled = false,
}) => {
  const renderStars = () => {
    if (starsRate == null) return null;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <i
          key={i}
          className="fa-solid fa-star"
          style={{ color: i < starsRate ? "#F4BF08" : "#a2a8b4" }}
        ></i>
      );
    }
    return <div className="stars flex gap-1 mt-1">{stars}</div>;
  };

  return (
    <div className="cat flex justify-between items-start my-2">
      <div className="inp-checkbox flex flex-row-reverse justify-end gap-2 items-start">
        <label
          htmlFor={id}
          className={`cursor-pointer text-sm leading-tight ${
            checked ? "font-semibold" : ""
          } ${hidden ? "cursor-default" : ""}`}
        >
          {label}
          {renderStars()}
        </label>
        {!hidden && (
          <input
            type="checkbox"
            id={id}
            className="accent-gray mt-1"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
        )}
      </div>
      <span className="text-sm text-gray-500">{count || number}</span>
    </div>
  );
};

export default SidebarCheckbox;
