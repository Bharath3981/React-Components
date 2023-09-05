import React from "react";
import { CiMail } from "react-icons/ci";

const AboutUs = () => {
  console.log("ABOUTUS.JS COMPONENT RENDERED");
  return (
    <div>
      <div className="content-layout mx-auto max-w-7xl w-full h-full px-2  md:px-4">
        <div className="w-full">
          <div className="grid gap-3 grid-cols-2 grid-rows-3">
            <div className="panel col-span-full">
              <div className="relative h-28 p-4  mb-20">
                <div className="absolute w-full h-full top-0 left-0 will-change-transform backfacevisibility overflow-hidden bg-cover bg-center bg-no-repeat z-0 bg-[url('https://prium.github.io/falcon/v3.14.0/assets/img/generic/4.jpg')]"></div>
                <div className="absolute bottom-0 h-40 w-40 translate-y-1/2 inline-block">
                  <img
                    className="w-full h-full object-cover overflow-hidden rounded-full p-1 block bg-white border border-spacing-1"
                    width={600}
                    height={600}
                    src="profile2.png"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex p-4">
                <div className="inline-block w-full md:w-[70%]">
                  <div className="text-2xl font-medium">
                    BAISETTY BHARATH KUMAR
                  </div>
                  <div className="text-lg font-normal">
                    Senior Software Engineer at IBM
                  </div>
                  <div className="text-xl font-thin text-gray-500">
                    Hyderabad, India
                  </div>
                </div>
                <div className="inline-block  w-full md:w-[40%]">
                  <a
                    href="mailto:bharath.baisetty@gmail.com"
                    className="text-blue-800 hover:underline"
                  >
                    <CiMail className="inline-block" />:
                    bharath.baisetty@gmail.com
                  </a>
                  <div className="font-normal text-blue-800">
                    +91 9391431530
                  </div>
                </div>
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
