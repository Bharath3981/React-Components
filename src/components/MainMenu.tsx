import { NavLink } from "react-router-dom";

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
          className={
            defaultClassName +
            ((isActive: boolean) => (isActive ? "active" : ""))
          }
        >
          <span className="">{menu._icon}</span>
          <span className="pl-1 hidden md:block">{menu._label}</span>
        </NavLink>
      ))}
    </>
  );
};

export default MainMenu;
