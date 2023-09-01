import React from "react";
import { NavLink } from "react-router-dom";

const MainMenu = ({ mainMenu, defaultClassName = "main-menu " }) => {
  return (
    <>
      {mainMenu.map((menu) => (
        <NavLink
          to={menu.path}
          key={menu._id}
          className={
            defaultClassName + ((isActive) => (isActive ? "active" : ""))
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
