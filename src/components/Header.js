import React, { useState } from "react";
import { CiHome, CiSettings, CiPhone } from "react-icons/ci";
import { TbComponents } from "react-icons/tb";
import NavList from "./NavList";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
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
              <span className="pl-3 text-2xl uppercase">React Components</span>
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
                className="relative inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!-- Menu open: "hidden", Menu closed: "block" --> */}
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Mobile menu, show/hide based on menu state. --> */}
        <div
          className={
            "absolute md:hidden h-screen transition-effect w-[75%] " +
            (showSidebar ? "left-0" : "right-full")
          }
        >
          <aside
            id="default-sidebar"
            className={
              "z-40 h-screen transition-effect relative " +
              (showSidebar ? "-translate-x" : "-translate-x-full")
            }
            aria-label="Sidebar"
          >
            <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <NavList />
            </div>
          </aside>
        </div>
      </nav>
    </header>
  );
};

export default Header;
