import React, { useState, useEffect, useRef } from "react";
import { VscChevronDown } from "react-icons/vsc";

const NavItem = ({ close, menuDetails, navIcon }) => {
  const { id, name, subMenus, expand = false } = menuDetails;
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
          id={id}
          onClick={(e) => setExpandedMenu((expand) => !expand)}
          className="flex cursor-pointer items-center w-full px-2 py-1 bg-transparent relative text-center place-content-between"
        >
          <span className="flex items-center">
            <span className="pr-2 inline-block">{navIcon}</span>
            <span className="">{name}</span>
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
          id={"subMenu" + id}
          className="border-l-2 relative transition-effect overflow-hidden "
        >
          <div ref={ref}>
            {subMenus.map((subMenu, index) => (
              <a
                key={index}
                className="pl-8 block bg-transparent px-2 py-1 w-full"
              >
                {subMenu.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavItem;
