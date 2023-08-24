import React, { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";

const NavItem = ({ menuDetails, navIcon }) => {
  const [expandedMenu, setExpandedMenu] = useState(false);
  const { id, name, subMenus } = menuDetails;
  return (
    <>
      <div>
        <button
          id={id}
          onClick={(e) => setExpandedMenu((expand) => !expand)}
          className="flex items-center w-full px-2 py-1 bg-transparent relative text-center place-content-between"
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
        </button>
        <div
          className={
            "relative transition-all ease-in duration-300 overflow-hidden " +
            (expandedMenu ? "h-32" : "h-0")
          }
        >
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
    </>
  );
};

export default NavItem;
