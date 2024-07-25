import Menu from "./menu";
import NavButtons from "./nav-buttons";

const NavSection = () => {
  return (
    <div className="flex gap-6 items-center max-[640px]:hidden ">
      <Menu />
      <NavButtons />
    </div>
  );
};

export default NavSection;
