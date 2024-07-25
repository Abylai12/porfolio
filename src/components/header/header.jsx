import NavSection from "./nav-section";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import React, { useState } from "react";

const Header = () => {
  const [badge, setBadge] = useState(true);
  return (
    <header className="flex items-center justify-between px-20 py-4">
      <h1 className="text-3xl font-bold ">Abilll</h1>
      <NavSection />
      {badge ? (
        <FiMenu
          className="sm:hidden cursor-pointer"
          onClick={() => {
            setBadge(false);
          }}
        />
      ) : (
        <RxCross2
          className="sm:hidden cursor-pointer"
          onClick={() => {
            setBadge(true);
          }}
        />
      )}
    </header>
  );
};

export default Header;
