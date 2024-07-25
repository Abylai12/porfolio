import Tags from "../tags/tags";
import ContentAbout from "./contentAbout";

const About = () => {
  return (
    <section id="about" className="py-24 px-20  bg-[#F9FAFB] dark:bg-[#111827]">
      <div className="mb-12">
        <Tags textTag="About me" />
      </div>
      <div className="flex px-8 ">
        <div className="flex-1">
          <img
            className="w-100 h-120 shadow-[-40px_40px_#E5E7EB] dark:shadow-[-40px_40px_#374151] "
            src="./images/Pic.png"
            alt="img"
          />
        </div>
        <div className="flex-1">
          <ContentAbout />
        </div>
      </div>
    </section>
  );
};
export default About;
