import Button from "../Button/Button";
import "./HeadingStyle.css";

const Heading = ({ title, desc, buttonText, buttonTo }) => {
  return (
    <div className="heading h-20 w-full flex justify-between items-center max-md:justify-center max-md:text-center">
      <div className="flex flex-col justify-between gap-3">
        <h2 className="font-exo text-3xl font-semibold text-black">{title}</h2>
        <p className="text-gray text-lg">{desc}</p>
      </div>
      {buttonText && (
        <Button buttonText={buttonText} to={buttonTo} />
      )}
    </div>
  );
};

export default Heading;
