import Tags from "../tags/tags";
import { MdForwardToInbox } from "react-icons/md";
import { FiCopy } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFigma } from "react-icons/fi";

const Contact = () => {
  return (
    <section
      id="contact"
      className="sm:px-24 sm:py-20 px-4 py-16 flex flex-col items-center"
    >
      <Tags textTag="Get in touch" />
      <span className="text-xl dark:text-[#D1D5DB] text-gray-600 font-normal max-w-[576px] text-center mt-4 mb-12">
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </span>
      <div className="sm:mb-12 ">
        <div className="flex items-center justify-center mb-4">
          <div className="sm:text-[32px] text-lg">
            <MdForwardToInbox />
          </div>
          <span className="text-lg sm:text-4xl font-bold mx-5">
            tom@pinecone.mn
          </span>
          <div className="sm:text-[32px] text-lg">
            <FiCopy />
          </div>
        </div>
        <div className="flex mb-12 items-center justify-center">
          <div className="sm:text-[32px] text-lg">
            <MdForwardToInbox />
          </div>
          <span className="text-lg sm:text-4xl font-bold mx-5">
            +976 88112233
          </span>
          <div className="sm:text-[32px] text-lg">
            <FiCopy />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-base dark:text-[#D1D5DB] text-gray-600">
            You may also find me on these platforms!
          </span>
          <div className="flex gap-2 ">
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
      </div>
    </section>
  );
};
export default Contact;
