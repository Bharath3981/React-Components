import React, { useState, useEffect, useRef } from "react";
import { VscChevronDown } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

const NavItem = ({ close, menuDetails }) => {
  console.log(menuDetails);
  const { menuId, label, subMenus, icon, expand = false } = menuDetails;
  const [expandedMenu, setExpandedMenu] = useState(expand);
  const [height, setHeight] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    if (expandedMenu) {
      setHeight(ref.current?.getBoundingClientRect().height);
    } else {
      setHeight(0);
    }
  }, [expandedMenu]);
  return (
    <>
      <div>
        <a
          onClick={(e) => setExpandedMenu((expand) => !expand)}
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
        </a>
        <div
          style={{ height }}
          id={"subMenu" + menuId}
          className="relative transition-effect overflow-hidden "
        >
          <div ref={ref}>
            {subMenus.map((subMenu, index) => (
              <NavLink
                to={subMenu.path}
                key={subMenu._id}
                className="nav-sub-menu"
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
