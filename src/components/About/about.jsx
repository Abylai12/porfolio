import Tags from "../tags/tags";
import ContentAbout from "./contentAbout";

const About = () => {
  return (
    <section id="about" className="py-20 px-24 bg-[#F9FAFB]">
      <Tags textTag="About me" />
      <div className="flex">
        <img
          className="w-100 h-120 shadow-[-40px_40px_#E5E7EB]  "
          src="./images/Pic.png"
          alt="img"
        />
        <ContentAbout />
      </div>
    </section>
  );
};
export default About;
