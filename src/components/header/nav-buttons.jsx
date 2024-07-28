import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

const NavButtons = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex max-[640px]:block items-center">
      <span className="text-gray-600 mr-4 max-[640px]:hidden ">|</span>
      {theme === "light" ? (
        <MdOutlineLightMode
          className="hover:cursor-pointer"
          onClick={() => {
            setTheme("dark");
          }}
        />
      ) : (
        <MdOutlineDarkMode
          className="hover:cursor-pointer dark:text-gray-100 text-3xl"
          onClick={() => {
            setTheme("light");
          }}
        />
      )}

      <button className="py-[6px] px-4 ml-4 max-[640px]:hidden dark:text-black text-white dark:bg-white  bg-black  rounded-xl">
        Download CV
      </button>
    </div>
  );
};

export default NavButtons;
