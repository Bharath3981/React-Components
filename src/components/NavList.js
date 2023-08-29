import React from "react";
import NavItem from "./NavItem";
import { CiViewTable, CiViewList } from "react-icons/ci";
import { componentChildRoutes } from "../data/Routes";

const NavList = () => {
  console.log(componentChildRoutes);
  let resultObj = {};
  // componentChildRoutes.forEach((menu) => {
  //   if (resultObj[menu._type]) {
  //     resultObj[menu._type].push(menu);
  //   } else {
  //     resultObj[menu._type] = [menu];
  //   }
  // });
  const navMenu = {
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
    <div className="py-2 active side-bar">
      {Object.keys(componentChildRoutes).map((key) => {
        return <NavItem key={key} menuDetails={componentChildRoutes[key]} />;
      })}

      {/* <NavItem menuDetails={navMenu} navIcon={<CiViewTable />} /> */}
    </div>
  );
};

export default NavList;
