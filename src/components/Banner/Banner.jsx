import "./BannerStyle.css";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <section className="banner w-11/12 h-80 my-16 mx-auto bg-cover rounded-3xl relative max-md:w-full max-md:rounded-none">
      <div className="banner-text absolute left-12 top-1/2 -translate-y-1/2 max-w-md max-md:w-11/12 max-md:left-1/2 max-md:-translate-x-1/2 max-md:text-center">
        <p className="top-heading font-exo font-semibold text-gray uppercase pb-3">
          get more power from
        </p>
        <h2 className="text-3xl text-black font-semibold pb-3">
          Learn Press Add-Ons
        </h2>
        <p className="desc text-lg text-gray leading-7">
          The next level of LearnPress - LMS WordPress Plugin. More Powerful,
          Flexible and Magical Inside.
        </p>
        <Button to="/courses" buttonText={"Explore Courses"} />
      </div>
    </section>
  );
};

export default Banner;
