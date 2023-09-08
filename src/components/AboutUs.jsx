import React from "react";
import { CiMail } from "react-icons/ci";
import Experiance from "./AboutUsComp/Experiance";
import Introduction from "./AboutUsComp/Introduction";
import ProfileCard from "./AboutUsComp/ProfileCard";

const AboutUs = () => {
  console.log("ABOUTUS.JS COMPONENT RENDERED");

  return (
    <div className="h-[calc(100vh_-_100px)]  overflow-auto">
      <div className="content-layout mx-auto max-w-7xl w-full h-full px-2  md:px-4">
        <div className="w-full">
          <div className="grid gap-3 grid-cols-1 md:grid-cols-3 auto-rows">
            <ProfileCard />
            <Introduction />
            <Experiance />
            <div className="panel">main Card</div>
            <div className="panel">main Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
