import Education from "./Education";
import Experiance from "./Experiance";
import Introduction from "./Introduction";
import ProfileCard from "./ProfileCard";
import Skills from "./Skills";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <iframe id="ifmcontentstoprint" className="h-0 w-0 absolute"></iframe>
      <div
        id="profileSection"
        className="h-[calc(100vh_-_95px)]  overflow-auto"
      >
        <div className="content-layout mx-auto max-w-7xl w-full h-full px-2  md:px-4">
          <div className="w-full">
            <ProfileCard />
            <div className="inline-block w-full md:w-[66%]">
              <div className="grid gap-3 grid-cols-1 md:grid-cols-2 auto-rows-min">
                <Introduction />
                <Skills />
              </div>
            </div>
            <div className="inline-block w-full md:w-[34%]">
              <div className="grid gap-3 grid-cols-1 ml-0 md:ml-3">
                <Experiance />
                <Education />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
