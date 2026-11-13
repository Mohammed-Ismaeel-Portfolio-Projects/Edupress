import { FaStar } from "react-icons/fa6";

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
  type = "checkbox",
  name,
}) => {
  const renderStars = () => {
    if (starsRate == null) return null;
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <FaStar
          key={i}
          size={14}
          style={{ color: i < starsRate ? "#F4BF08" : "#a2a8b4" }}
        />
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
            checked ? "font-semibold text-black" : "text-gray-700"
          } ${hidden ? "cursor-default" : ""}`}
        >
          {label}
          {renderStars()}
        </label>
        {!hidden && (
          <input
            type={type}
            id={id}
            name={name}
            className="accent-orange mt-0.5 cursor-pointer"
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
        )}
      </div>
      <span className="text-xs text-gray-500 font-medium">{count ?? number}</span>
    </div>
  );
};

export default SidebarCheckbox;
