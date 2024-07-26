import { RxCross2 } from "react-icons/rx";
import Menu from "./menu";
import NavButtons from "./nav-buttons";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const RespoNav = () => {
  const [show, setShow] = useState(false);

  return (
    <section className="sm:hidden">
      {show ? (
        <div className="bg-gray-200 absolute top-0 left-0 z-10 w-full h-screen">
          <div className="bg-white w-10/12 h-screen ml-auto">
            <div className="flex justify-between p-4 font-bold border-b border-gray-100">
              <h1 className="text-[30px]">TOM</h1>
              <RxCross2
                className="sm:hidden cursor-pointer"
                onClick={() => {
                  setShow(false);
                }}
              />
            </div>
            <div className="p-4 border-b border-gray-100">
              <Menu className="block" />
            </div>
            <div className="flex text-gray-600 p-4 text-base items-center justify-between">
              <span className="">Switch theme</span>
              <NavButtons />
            </div>
            <div className="flex justify-center">
              <button className="py-[6px] px-8 ml-4 dark:text-black text-white dark:bg-white  bg-black  rounded-xl">
                Download CV
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <FiMenu
            className="sm:hidden cursor-pointer text-4xl"
            onClick={() => {
              setShow(true);
            }}
          />
        </div>
      )}
    </section>
  );
};
export default RespoNav;
