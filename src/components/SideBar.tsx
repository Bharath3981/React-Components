import { NavLink } from "react-router-dom";
import { componentPageType } from "../data/Routes";

type Props = {
  pages: Array<componentPageType>;
};
const SideBar = ({ pages }: Props) => {
  console.log("SIDEBAR.JS COMPONENT RENDERED");
  return (
    <>
      <div
        id={"subMenu"}
        className="relative transition-effect overflow-hidden "
      >
        <div>
          {pages.map((page) => (
            <NavLink to={page.path} key={page._id} className={`nav-sub-menu`}>
              {page._label}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
