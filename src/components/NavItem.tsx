import { useState, useEffect, useRef } from "react";
import { VscChevronDown } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

interface childRouteMenuType {
  _id: string;
  _label: string;
  _type: string;
  path: string;
  element: JSX.Element;
}
interface childRouteType {
  label: string;
  expand: boolean;
  menuId: string;
  icon: JSX.Element;
  subMenus: Array<childRouteMenuType>;
}
interface NavItemProps {
  menuDetails: childRouteType;
}
const NavItem = ({ menuDetails }: NavItemProps) => {
  console.log("NAVITEM.JS COMPONENT RENDERED");
  const { menuId, label, subMenus, icon, expand = false } = menuDetails;
  const [expandedMenu, setExpandedMenu] = useState<boolean>(expand);
  const [height, setHeight] = useState<number>(0);

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (expandedMenu) {
      setHeight(ref.current?.getBoundingClientRect().height || 0);
    } else {
      setHeight(0);
    }
  }, [expandedMenu]);
  return (
    <>
      <div>
        <button
          onClick={() => setExpandedMenu((expand) => !expand)}
          className="nav-menu"
        >
          <span className="flex items-center">
            <span className="pr-2 inline-block">{icon}</span>
            <span className="">{label}</span>
          </span>
          <span
            className={
              "ease-in duration-300 " +
              (expandedMenu ? "-rotate-180" : "rotate-0")
            }
          >
            <VscChevronDown />
          </span>
        </button>
        <div
          style={{ height }}
          id={"subMenu" + menuId}
          className="relative transition-effect overflow-hidden "
        >
          <div ref={ref}>
            {subMenus.map((subMenu) => (
              <NavLink
                to={subMenu.path}
                key={subMenu._id}
                className={`nav-sub-menu`}
              >
                {subMenu._label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavItem;
