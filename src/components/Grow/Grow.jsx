import rightSymbol from "./../../assets/images/right-symbol.png";
import growSkillsImage from "./../../assets/images/grow-skill-section-image.webp";
import Button from "../Button/Button";

const Grow = () => {
  return (
    <section className="grow-skills w-11/12 mx-auto flex justify-between items-center gap-20 my-16 max-md:flex-col-reverse max-md:justify-center">
      <div className="img w-1/2 max-md:w-11/12">
        <img src={growSkillsImage} alt="Grow your skill with EduPress" />
      </div>
      <div className="content w-1/2 pr-11 max-md:w-11/12">
        <h2 className="text-3xl pb-5 font-exo font-semibold">
          Grow Your Skills <br />
          With LearnPress LMS
        </h2>
        <p className="text-lg text-slate-600 pb-4">
          We denounce with righteous indignation and dislike men who are so
          beguiled and demoralized that cannot trouble.
        </p>
        <ul className="list-none flex flex-col gap-3 mb-5">
          <li className="flex items-center gap-2">
            <img src={rightSymbol} alt="" aria-hidden="true" className="w-5" />
            <span>Official Certification</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={rightSymbol} alt="" aria-hidden="true" className="w-5" />
            <span>Flexible Online Learning</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={rightSymbol} alt="" aria-hidden="true" className="w-5" />
            <span>Expert Instructors</span>
          </li>
          <li className="flex items-center gap-2">
            <img src={rightSymbol} alt="" aria-hidden="true" className="w-5" />
            <span>Lifetime Access</span>
          </li>
        </ul>
        <Button to="/courses" buttonText={"Explore Courses"} />
      </div>
    </section>
  );
};

export default Grow;
