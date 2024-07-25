import Menu from "./menu";
import NavButtons from "./nav-buttons";
const RespoNav = () => {
  return (
    <section>
      <div className="bg-gray-900 w-[55px]"></div>
      <div>
        <div>
          <Menu />
        </div>
        <div>
          <NavButtons />
        </div>
      </div>
    </section>
  );
};
export default RespoNav;
