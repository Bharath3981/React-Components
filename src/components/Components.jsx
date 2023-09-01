import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Components = () => {
  console.log("COMPONENTS.JS COMPONENT RENDERED");
  return (
    <>
      <div className="flex w-full">
        <div className="side-bar p-1 hidden md:block w-[30%]">
          <SideBar />
        </div>
        <div className="w-full">
          <div className="content-layout w-full">
            <div className="panel h-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;
