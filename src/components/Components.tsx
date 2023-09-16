import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Components = () => {
  console.log("COMPONENTS.JS COMPONENT RENDERED 12");
  return (
    <>
      <div className="flex w-full  h-full overflow-auto">
        <div className="side-bar p-1 h-screen overflow-y-scroll hidden md:block w-[30%]">
          <SideBar />
        </div>
        <div className="w-full h-[calc(100vh_-_108px)] md:h-[calc(100vh_-_66px)]  overflow-auto">
          <div className="content-layout w-full">
            <div className="panel h-auto p-3">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Components;
