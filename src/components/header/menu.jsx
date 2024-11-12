const menuList = [
  { menuId: "Id01", label: "Home", link: "/" },
  { menuId: "Id02", label: "About", link: "/#about" },
  { menuId: "Id04", label: "Contact", link: "/#contact" },
];
const Menu = ({ className }) => {
  return (
    <ul className={`${className} gap-4`}>
      {menuList.map((menu) => (
        <li key={menu.menuId}>
          <a
            className="text-gray-600 text-base leading-8 dark:text-gray-100"
            href={menu.link}
          >
            {menu.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
