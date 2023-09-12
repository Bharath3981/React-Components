import Experiance from "./AboutUsComp/Experiance";
import Introduction from "./AboutUsComp/Introduction";
import ProfileCard from "./AboutUsComp/ProfileCard";

const AboutUs = () => {
  console.log("ABOUTUS.JS COMPONENT RENDERED");

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
                <div className="panel">main Card</div>
              </div>
            </div>
            <div className="inline-block w-full md:w-[34%]">
              <div className="grid gap-3 grid-cols-1 ml-0 md:ml-3">
                <Experiance />
                <div className="panel">main Card1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
