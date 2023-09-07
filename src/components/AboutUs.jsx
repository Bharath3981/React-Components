import React from "react";
import { CiMail } from "react-icons/ci";

const AboutUs = () => {
  console.log("ABOUTUS.JS COMPONENT RENDERED");
  function calcDate(date1, date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    var message = "";
    message += years + " yrs ";
    message += months + " mos";

    return message;
  }
  return (
    <div className="h-[calc(100vh_-_100px)]  overflow-auto">
      <div className="content-layout mx-auto max-w-7xl w-full h-full px-2  md:px-4">
        <div className="w-full">
          <div className="grid gap-3 grid-cols-1 md:grid-cols-3 auto-rows-min">
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
              <div className="grid gap-3 grid-rows-1 grid-cols-1 md:grid-cols-3 p-4">
                <div className="inline-block md:col-start-1 md:col-end-3 col-span-full pb-5">
                  <div className="text-2xl font-medium">
                    BAISETTY BHARATH KUMAR
                  </div>
                  <div className="text-lg font-normal">
                    Senior UI Developer at IBM
                  </div>
                  <div className="text-xl font-thin text-gray-500">
                    Hyderabad, India
                  </div>
                </div>
                <hr className="pb-5 md:hidden" />
                <div className="inline-block md:col-start-3 md:col-end-4 col-span-full">
                  <div className="text-gray-400">Email address</div>
                  <a
                    href="mailto:bharath.baisetty@gmail.com"
                    className="text-blue-800 hover:underline"
                  >
                    bharath.baisetty@gmail.com
                  </a>
                  <div className="font-normal text-blue-800">
                    <div className="text-gray-400">Phone number</div>
                    +91 9391431530
                  </div>
                </div>
              </div>
            </div>
            <div className="panel col-span-full md:col-start-1 md:col-end-3">
              <div className="w-full font-semibold text-xl p-3 bg-slate-100">
                Intro
              </div>
              <div className="p-3 text-justify">
                Dedicated, passionate, and accomplished Full Stack Developer
                with 9+ years of progressive experience working as an
                Independent Contractor for Google and developing and growing my
                educational social network that helps others learn programming,
                web design, game development, networking. I’ve acquired a wide
                depth of knowledge and expertise in using my technical skills in
                programming, computer science, software development, and mobile
                app development to developing solutions to help organizations
                increase productivity, and accelerate business performance.
              </div>
            </div>
            <div className="panel col-span-full md:col-start-3 md:col-end-4">
              <div className="w-full font-semibold text-xl p-3 bg-slate-100">
                Experience
              </div>
              <div className="p-3 text-justify">
                <div className="flex">
                  <a href="#!">
                    <img
                      src="inviter.jpg"
                      alt="company logo"
                      width="56"
                      className="max-w-full h-auto"
                    />
                  </a>
                  <div className="pl-4 relative flex-1">
                    <div className="text-base font-medium leading-4">
                      UI Developer
                    </div>
                    <p className="text-blue-800 hover:underline font-light text-sm">
                      <a href="https://inviter.com/">Inviter</a>
                    </p>
                    <p className="text-sm">May 2014 - May 2016 • 2 yrs 0 mos</p>
                    <p class="text-sm">Hyderabad, INDIA</p>
                    <hr className="my-3" />
                  </div>
                </div>
                <div className="flex">
                  <a href="https://www.oracle.com/">
                    <img
                      src="oracle.jpg"
                      alt="company logo"
                      width="56"
                      className="max-w-full h-auto"
                    />
                  </a>
                  <div className="pl-4 relative flex-1">
                    <div className="text-base font-medium leading-4">
                      Senior Application Developer
                    </div>
                    <p className="text-blue-800 hover:underline font-light text-sm">
                      <a href="https://www.oracle.com/">Oracle</a>
                    </p>
                    <p className="text-sm">
                      June 2016 - June 2023 • 7 yrs 1 mos
                    </p>
                    <p class="text-sm mb-2">Hyderaad, INDIA</p>
                    <hr className="my-3" />
                  </div>
                </div>
                <div className="flex">
                  <a href="https://www.ibm.com/">
                    <img
                      src="ibm.jpg"
                      alt="company logo"
                      width="56"
                      className="max-w-full h-auto"
                    />
                  </a>
                  <div className="pl-4 relative flex-1">
                    <div className="text-base font-medium leading-4">
                      Senior Application Developer
                    </div>
                    <p className="text-blue-800 hover:underline font-light text-sm">
                      <a href="https://www.ibm.com/">IBM</a>
                    </p>
                    <p className="text-sm">
                      June 2023 - Present •{" "}
                      {calcDate(new Date(), new Date(2023, 6))}
                    </p>
                    <p class="text-sm mb-2">Hyderaad, INDIA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="panel">main Card</div>
            <div className="panel">main Card</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
