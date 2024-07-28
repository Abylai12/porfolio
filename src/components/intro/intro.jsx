import { CiLocationOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";
import ImageProfile from "./image-profile";
import IntroExperience from "./introExperience";
// min-[640px]:flex max-[640px]:flex max-[640px]:flex-col-reverse

const Intro = () => {
  return (
    <section className=" justify-between flex-col-reverse flex sm:flex-row sm:py-24 sm:px-20 ">
      <div className="px-8 my-12 ">
        <div>
          <h1 className="font-bold mb-2 text-4xl  sm:text-[60px]">
            Hi, I'm Tom 👋
          </h1>
          <div className="max-w-[600px] dark:text-[#D1D5DB] text-[#4B5563]">
            <IntroExperience
              introText=" 
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs"
            />
          </div>
        </div>
        <div className="flex items-center mt-6  dark:text-[#D1D5DB]  text-[#4B5563]">
          <div className="text-2xl">
            <CiLocationOn />
          </div>
          <span>Ulaanbaatar, Mongolia</span>
        </div>
        <div className="flex items-center mb-6  dark:text-[#D1D5DB] text-[#4B5563]">
          <div className="bg-[#10B981] h-2 w-2 rounded-full m-2"></div>
          <span>Available for new projects</span>
        </div>
        <div className="flex text-4xl gap-2  dark:text-[#D1D5DB]  text-[#4B5563]">
          <a href="">
            <FiGithub />
          </a>
          <a href="">
            <FiTwitter />
          </a>
          <a href="">
            <FiFigma />
          </a>
        </div>
      </div>
      <ImageProfile imgUrl={"./images/profile.jpg"} />
    </section>
  );
};
export default Intro;
