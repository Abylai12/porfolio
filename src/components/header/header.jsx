import NavSection from "./nav-section";

import React from "react";

import RespoNav from "./respoNav";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 sm:px-20 sm:py-4">
      <h1 className="text-3xl font-bold ">TOM</h1>
      <NavSection />
      <RespoNav />
    </header>
  );
};

export default Header;
