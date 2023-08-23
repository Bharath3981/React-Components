import React from "react";
import { CiViewTable } from "react-icons/ci";
import { VscChevronDown } from "react-icons/vsc";

const SideBar = () => {
  return (
    <div className="py-2">
      <a className="flex items-center w-full px-2 py-1 bg-transparent relative text-center place-content-between">
        <span className="flex items-center">
          <span className="pr-2 inline-block">
            <CiViewTable />
          </span>
          <span className="">Table</span>
        </span>
        <VscChevronDown />
      </a>
    </div>
  );
};

export default SideBar;
