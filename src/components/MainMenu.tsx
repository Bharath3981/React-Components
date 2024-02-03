import { NavLink } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface mainMenuObjType {
  _id: string;
  _label: string;
  _icon: JSX.Element;
  _render: boolean;
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
  const navigate = useNavigate();
  const showSubmenu = (submenuId: string) => {
    (document.getElementById(submenuId) as HTMLDivElement).style.display =
      "block";
  };

  const hideSubmenu = (submenuId: string) => {
    (document.getElementById(submenuId) as HTMLDivElement).style.display =
      "none";
  };
  const goTo = (path: string) => {
    console.log(path);
    navigate("/javascript");
  };
  return (
    <>
      {mainMenu.map((menu: any) => (
        <div key={menu._id}>
          {menu._render && (
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
              {menu._hasSubmenu && (
                <span className="sm:hidden md:block">
                  <MdArrowDropDown />
                </span>
              )}
              {menu._hasSubmenu && (
                <ul
                  id={menu._submenuId}
                  className="z-50 hidden top-9 rounded-md border p-2 bg-white shadow-md absolute min-w-[150px] "
                >
                  {menu._submenus.map((submenu: any) => (
                    <li key={submenu._id} className="block py-1 px-2">
                      <span onClick={() => goTo(submenu.path)}>
                        {submenu._label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </NavLink>
          )}
        </div>
      ))}
    </>
  );
};

export default MainMenu;
