import { MdOutlineLightMode } from "react-icons/md";

const NavButtons = () => {
  return (
    <div className="flex items-center">
      <span className="text-gray-600">|</span>
      <MdOutlineLightMode />
      <button className="py-[6px] px-4 bg-black text-white rounded-xl">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;
