import { NavLink } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";

interface mainMenuObjType {
  _id: string;
  _label: string;
  _icon: JSX.Element;
  path: string;
  element: JSX.Element;
  children?: Array<{}>;
}

interface mainMenuProps {
  mainMenu: Array<mainMenuObjType>;
  defaultClassName: string;
}
const MainMenu = ({
  mainMenu,
  defaultClassName = "main-menu ",
}: mainMenuProps) => {
  const showSubmenu = (submenuId: string) => {
    (document.getElementById(submenuId) as HTMLDivElement).style.display =
      "block";
  };

  const hideSubmenu = (submenuId: string) => {
    (document.getElementById(submenuId) as HTMLDivElement).style.display =
      "none";
  };
  return (
    <>
      {mainMenu.map((menu: any) => (
        <NavLink
          to={menu.path}
          key={menu._id}
          onMouseEnter={() => {
            if (menu._hasSubmenu) {
              showSubmenu(menu._submenuId);
            }
          }}
          onMouseLeave={() => {
            if (menu._hasSubmenu) {
              hideSubmenu(menu._submenuId);
            }
          }}
          className={
            defaultClassName +
            ((isActive: boolean) => (isActive ? "active" : ""))
          }
        >
          <span className="">{menu._icon}</span>
          <span className="pl-1 hidden md:block">{menu._label}</span>
          {menu._hasSubmenu && <MdArrowDropDown />}
          {menu._hasSubmenu && (
            <div
              id={menu._submenuId}
              className="hidden top-8 rounded-md border p-2 bg-inherit shadow-md bg-slate-200  absolute min-w-[160px] "
            >
              <a href="#" className="block">
                Link 123
              </a>
              <a href="#" className="block">
                Link 2
              </a>
              <a href="#" className="block">
                Link 3
              </a>
            </div>
          )}
        </NavLink>
      ))}
    </>
  );
};

export default MainMenu;
