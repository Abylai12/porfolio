import { FiExternalLink } from "react-icons/fi";
import Tags from "../tags/tags";

const WorkCard = ({ proImg, proTitle, proText, useApp, index }) => {
  console.log(index);
  return (
    <section
      className={`${
        index % 2 == 0 ? "flex" : "flex-row-reverse flex"
      } shadow-xl py-8 px-8 rounded-x`}
    >
      <div className="flex-1 bg-gray-50 p-12 flex justify-center items-center">
        <img src={proImg} alt="" />
      </div>
      <div className="flex-1 bg-white p-14 flex flex-col justify-between">
        <h1 className="text-xl font-bold text-gray-900">{proTitle} </h1>
        <p className="text-base text-gray-600 font-normal">{proText}</p>
        <div className="flex flex-wrap gap-2">{useApp}</div>
        <button>
          <a href="">
            <FiExternalLink />
          </a>
        </button>
      </div>
    </section>
  );
};
export default WorkCard;
