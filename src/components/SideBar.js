import React, { useState } from "react";
import { CiViewTable } from "react-icons/ci";
import { VscChevronDown } from "react-icons/vsc";

const SideBar = () => {
  const [expandedMenu, setExpandedMenu] = useState("");
  const setExpandedMenuFun = (e) => {
    console.log(e.target.id);
    setExpandedMenu(e.target.id);
  };
  return (
    <div className="py-2">
      <div>
        <button
          id="table-menu"
          onClick={(e) => setExpandedMenuFun(e)}
          className="flex items-center w-full px-2 py-1 bg-transparent relative text-center place-content-between"
        >
          <span className="flex items-center">
            <span className="pr-2 inline-block">
              <CiViewTable />
            </span>
            <span className="">Table</span>
          </span>
          <VscChevronDown />
        </button>
        <div
          className={
            "relative transition overflow-hidden " +
            (expandedMenu === "table-menu" ? "h-auto" : "h-0")
          }
        >
          <a className="pl-8 block bg-transparent px-2 py-1 w-full">
            Basic table
          </a>
          <a className="pl-8 block bg-transparent px-2 py-1 w-full">
            Filter table
          </a>
          <a className="pl-8 block bg-transparent px-2 py-1 w-full">
            Sortable table
          </a>
          <a className=" pl-8 block bg-transparent px-2 py-1 w-full">
            Template table
          </a>
        </div>
      </div>

      <div>
        <button
          id="list-menu"
          onClick={(e) => setExpandedMenuFun(e)}
          className="flex items-center w-full px-2 py-1 bg-transparent relative text-center place-content-between"
        >
          <span className="flex items-center">
            <span className="pr-2 inline-block">
              <CiViewTable />
            </span>
            <span className="">Table</span>
          </span>
          <VscChevronDown />
        </button>
        <div
          className={
            "relative transition overflow-hidden " +
            (expandedMenu === "list-menu" ? "h-auto" : "h-0")
          }
        >
          <a className="pl-8 block bg-transparent px-2 py-1 w-full">
            Basic table
          </a>
          <a className="pl-8 block bg-transparent px-2 py-1 w-full">
            Filter table
          </a>
          <a className="pl-8 block bg-transparent px-2 py-1 w-full">
            Sortable table
          </a>
          <a className=" pl-8 block bg-transparent px-2 py-1 w-full">
            Template table
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
