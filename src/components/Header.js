import React, { useState } from "react";
import { CiHome, CiSettings, CiPhone } from "react-icons/ci";
import { TbComponents } from "react-icons/tb";
import NavList from "./NavList";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className="header min-h-full">
        <nav className="shadow-md border-b-1">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center h-16">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8"
                    src="React-components.png"
                    alt="Your Company"
                  />
                </div>
                <span className="pl-3 text-2xl uppercase">
                  React Components
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 h-16 items-end flex md:ml-6">
                  <a className="main-menu ">
                    <CiHome />
                    &nbsp; <span>Home</span>
                  </a>
                  <a className="main-menu active">
                    <TbComponents />
                    &nbsp;<span>Components</span>
                  </a>
                  <a className="main-menu">
                    <CiSettings />
                    &nbsp;<span>Settings</span>
                  </a>
                  <a className="main-menu">
                    <CiPhone />
                    &nbsp;<span>Contact Us</span>
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* <!-- Mobile menu button --> */}
                <button
                  type="button"
                  onClick={() => setShowSidebar((show) => !show)}
                  className={"toogle-button " + (showSidebar ? "expanded" : "")}
                >
                  <span className="icon-bar transition-effect top-bar"></span>
                  <span className="icon-bar transition-effect middle-bar"></span>
                  <span className="icon-bar transition-effect bottom-bar"></span>
                </button>
              </div>
            </div>
          </div>

          {/* <!-- Mobile menu, show/hide based on menu state. --> */}
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
              <div className="h-screen px-3 py-4 overflow-y-auto dark:bg-gray-800">
                <NavList />
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
        </nav>
      </header>
    </>
  );
};

export default Header;
