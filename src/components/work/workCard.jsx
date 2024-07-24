import { FiExternalLink } from "react-icons/fi";

const WorkCard = ({ proImg, proTitle, proText, usedApp }) => {
  return (
    <section className="flex rounded-xl">
      <div className="flex-1 bg-gray-50 p-12">
        <img src={proImg} alt="" />
      </div>
      <div className="flex-1 bg-white p-12 ">
        <h1 className="text-xl font-bold text-gray-900">{proTitle} </h1>
        <p className="text-base text-gray-600 font-normal">{proText}</p>
        <div className="flex flex-wrap ">{usedApp}</div>
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
