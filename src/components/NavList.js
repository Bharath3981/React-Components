import React from "react";
import NavItem from "./NavItem";
import { componentChildRoutes } from "../data/Routes";

const NavList = () => {
  console.log(componentChildRoutes);
  return (
    <div className="py-2 active side-bar">
      {Object.keys(componentChildRoutes).map((key) => {
        return <NavItem key={key} menuDetails={componentChildRoutes[key]} />;
      })}

      {/* <NavItem menuDetails={navMenu} navIcon={<CiViewTable />} /> */}
    </div>
  );
};

export default NavList;
