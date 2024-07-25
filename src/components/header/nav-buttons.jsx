import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const NavButtons = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center">
      <span className="text-gray-600 mr-4">|</span>
      {theme === "light" ? (
        <MdOutlineLightMode
          className="hover:cursor-pointer"
          onClick={() => {
            setTheme("dark");
          }}
        />
      ) : (
        <MdOutlineDarkMode
          className="hover:cursor-pointer"
          onClick={() => {
            setTheme("light");
          }}
        />
      )}

      <button className="py-[6px] px-4 ml-4 dark:text-black text-white dark:bg-white  bg-black  rounded-xl">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;
