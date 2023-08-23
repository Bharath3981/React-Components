import React, { useState } from "react";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="min-h-full">
      <nav className="shadow-md border-b-1">
        <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
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
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="relative rounded-full  p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5"></span>
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
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
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                {/* <!-- Menu open: "block", Menu closed: "hidden" --> */}
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
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
            "absolute md:hidden h-screen transition w-[75%] " +
            (showSidebar ? "left-0" : "right-full")
          }
        >
          <aside
            id="default-sidebar"
            className={
              "z-40 h-screen transition-transform relative " +
              (showSidebar ? "-translate-x" : "-translate-x-full")
            }
            aria-label="Sidebar"
          >
            <div className="h-screen px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
              <ul className="md:flex  ml-auto mr-8 items-center">
                <li>test</li>
              </ul>
            </div>
          </aside>
        </div>
      </nav>
    </div>
  );
};

export default Header;
