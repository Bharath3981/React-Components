import React from "react";
import SideBar from "./SideBar";
import MainContent from "./MainContent";
import { Outlet } from "react-router-dom";

const Components = () => {
  return (
    <>
      <div className="side-bar p-1 hidden md:block w-[30%]">
        <SideBar />
      </div>
      <div className="w-full ">
        <Outlet />
      </div>
    </>
  );
};

export default Components;
