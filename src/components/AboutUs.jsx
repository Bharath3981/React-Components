import React from "react";

const AboutUs = () => {
  console.log("ABOUTUS.JS COMPONENT RENDERED");
  return (
    <div>
      <div className="content-layout mx-auto max-w-7xl w-full h-full px-2  md:px-4">
        <div className="w-full">
          <div className="grid gap-3 grid-cols-2 grid-rows-3">
            <div className="panel col-span-full">
              <div className="p-3">
                <div>Header</div>
                <div>body</div>
              </div>
            </div>
            <div className="panel">main Card</div>
            <div className="panel">main Card</div>
            <div className="panel">main Card</div>
            <div className="panel">main Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
