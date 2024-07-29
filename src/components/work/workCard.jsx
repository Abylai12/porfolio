import { FiExternalLink } from "react-icons/fi";

const WorkCard = ({ proImg, proTitle, proText, useApp, index }) => {
  return (
    <section
      className={`${
        index % 2 == 0 ? "sm:flex" : "sm:flex-row-reverse sm:flex"
      } rounded-xl shadow-xl mb-6`}
    >
      <div
        className={`${
          index % 2 == 0
            ? "sm:rounded-tl-xl sm:rounded-bl-xl"
            : "sm:rounded-tr-xl sm:rounded-br-xl"
        } flex-1 py-8 px-8 bg-gray-50 dark:bg-[#374151] sm:p-12 flex justify-center items-center rounded-t-xl sm:rounded-t-none`}
      >
        <img src={proImg} alt="" />
      </div>
      <div
        className={`${
          index % 2 == 0
            ? "sm:rounded-tr-xl sm:rounded-br-xl"
            : "sm:rounded-tl-xl sm:rounded-bl-xl"
        } flex-1 py-8 px-8 bg-white dark:bg-[#1F2937] sm:p-14 flex flex-col justify-between rounded-b-xl sm:rounded-b-none  `}
      >
        <h1 className="text-xl font-bold dark:text-[#F9FAFB] text-gray-900">
          {proTitle}{" "}
        </h1>
        <p className="text-base my-6 dark:text-[#D1D5DB] text-gray-600 font-normal">
          {proText}
        </p>
        <div className="flex flex-wrap gap-2">{useApp}</div>
        <button className="my-6">
          <a href="">
            <FiExternalLink />
          </a>
        </button>
      </div>
    </section>
  );
};
export default WorkCard;
