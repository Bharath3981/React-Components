import { useState, useContext } from "react";
import routes, { componentPagesType } from "../data/Routes";
import { useLocation } from "react-router-dom";
import MainMenu from "./MainMenu";
import SideBar from "./SideBar";
import ComponentPagesContext from "../context/ComponentPagesContext";

const Header = () => {
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [componentPages] = useContext<Array<componentPagesType>>(
    ComponentPagesContext
  );
  return (
    <>
      <header id="app-header" className="header sticky top-0">
        <nav className="shadow-md border-b-1">
          <div className="mx-auto max-w-7xl px-2 md:px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center h-16">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="/React-components.png"
                    alt="Your Company"
                  />
                </div>
                <span className="pl-3 text-2xl uppercase">
                  React Components
                </span>
                <span className="pl-2 text-xs font-thin">
                  Last Updated on: 21-Jan-2025
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 h-16 items-end flex md:ml-6 ">
                  <MainMenu
                    mainMenu={routes}
                    defaultClassName="main-menu relative inline-block"
                  />
                </div>
              </div>
              {(location.pathname.includes("components") ||
                location.pathname.includes("topics")) && (
                <div className="-mr-2 flex md:hidden">
                  {/* <!-- Mobile menu button --> */}
                  <button
                    type="button"
                    onClick={() => setShowSidebar((show) => !show)}
                    className={
                      "toogle-button " + (showSidebar ? "expanded" : "")
                    }
                  >
                    <span className="icon-bar transition-effect top-bar"></span>
                    <span className="icon-bar transition-effect middle-bar"></span>
                    <span className="icon-bar transition-effect bottom-bar"></span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
          {document.body.offsetWidth < 768 &&
            (location.pathname.includes("components") ||
              location.pathname.includes("topics")) && (
              <div className="block md:hidden">
                <div
                  className={
                    "offcanvas absolute md:hidden h-screen transition-effect w-[75%] " +
                    (showSidebar ? "-translate-x" : "-translate-x-full")
                  }
                >
                  <aside
                    id="default-sidebar"
                    className={"z-40 h-screen transition-effect relative "}
                    aria-label="Sidebar"
                  >
                    <div className="side-bar h-screen px-3 py-4 overflow-y-auto">
                      <SideBar pages={componentPages} />
                    </div>
                  </aside>
                </div>
                <div
                  className={
                    "transition-effect " +
                    (showSidebar ? "backdrop-filter" : "absolute h-screen w-0")
                  }
                  onClick={() => setShowSidebar((show) => !show)}
                ></div>
              </div>
            )}
        </nav>
      </header>
    </>
  );
};

export default Header;
