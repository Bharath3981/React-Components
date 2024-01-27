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
  return (
    <>
      {mainMenu.map((menu: any) => (
        <NavLink
          to={menu.path}
          key={menu._id}
          onMouseEnter={() => {
            (
              document.getElementById(menu._submenuId) as HTMLDivElement
            ).style.display = "block";
          }}
          onMouseLeave={() => {
            (
              document.getElementById(menu._submenuId) as HTMLDivElement
            ).style.display = "none";
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
