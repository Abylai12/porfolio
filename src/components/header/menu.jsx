const menuList = [
  { menuId: "Id01", label: "Home", link: "/" },
  { menuId: "Id02", label: "About", link: "/#about" },
  { menuId: "Id03", label: "Work", link: "/#work" },
  { menuId: "Id04", label: "Contact", link: "/#contact" },
];
const Menu = () => {
  return (
    <div>
      <ul className="flex gap-4">
        {menuList.map((menu) => (
          <li>
            <a href={menu.link}>{menu.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
