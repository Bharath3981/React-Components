import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Components = () => {
  console.log("COMPONENTS.JS COMPONENT RENDERED");
  return (
    <>
      <div className="flex w-full h-full overflow-auto">
        <div className="side-bar p-1 h-screen overflow-y-scroll hidden md:block w-[30%]">
          <SideBar />
        </div>
        <div className="w-full  overflow-auto pb-24 md:pb-13">
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
