import NavItem from "./NavItem";
import { componentChildRoutes } from "../data/Routes";

const NavList = () => {
  console.log("NAVLIST.JS COMPONENT RENDERED");
  return (
    <div className="py-2 active side-bar">
      {Object.keys(componentChildRoutes).map((key: string) => {
        return <NavItem key={key} menuDetails={componentChildRoutes[key]} />;
      })}

      {/* <NavItem menuDetails={navMenu} navIcon={<CiViewTable />} /> */}
    </div>
  );
};

export default NavList;
