import React from "react";
import NavItem from "./NavItem";
import { CiViewTable, CiViewList } from "react-icons/ci";

const NavList = () => {
  const navMenu = {
    id: "table-menu",
    name: "Table",

    subMenus: [
      {
        name: "Basic table",
      },
      {
        name: "Filter table",
      },
      {
        name: "Sortable table",
      },
      {
        name: "Template table",
      },
    ],
  };
  const listNavMenu = {
    id: "list-menu",
    name: "List",
    expand: true,
    subMenus: [
      {
        name: "Basic list",
      },
      {
        name: "Filter list",
      },
      {
        name: "Template list",
      },
    ],
  };
  return (
    <div className="py-2 active">
      <NavItem menuDetails={listNavMenu} navIcon={<CiViewList />} />
      <NavItem menuDetails={navMenu} navIcon={<CiViewTable />} />
    </div>
  );
};

export default NavList;
