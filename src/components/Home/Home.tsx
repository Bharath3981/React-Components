import { Link, NavLink } from "react-router-dom";
import { componentsChildren } from "../../data/Routes";
import "./Home.css";
import FlipCard, {
  FrontFace,
  BackFace,
} from "../../React-components/FlipCard/FlipCard";
const Home = () => {
  console.log("HOME.JS COMPONENT RENDERED", componentsChildren);

  return (
    <div className="h-[calc(100vh_-_108px)] md:h-[calc(100vh_-_96px)]">
      <div className="content-layout w-full h-full">
        <div className="h-full">
          <div className="m-5">
            <div className="components-strip">React Components</div>
            <div className="flex justify-normal gap-5 p-5 ">
              {componentsChildren.map((component: any) => (
                <Link key={component._id} to={component.path}>
                  <FlipCard classes="h-36 w-32 cursor-default">
                    <>
                      <FrontFace classes="h-36 w-32 text-center">
                        <>
                          <div className="inline-block font-black">
                            {component._icon}
                          </div>
                          <div className="font-medium text-left px-2">
                            {component._label}
                          </div>
                        </>
                      </FrontFace>
                      <BackFace classes="h-36 w-32 p-1 overflow-auto">
                        <div className="overflow-auto h-full">
                          {component.children.map((demo: any) => (
                            <Link key={demo._id} to={demo.path}>
                              <div className=" text-sm text-blue-500 hover:underline cursor-pointer">
                                {demo._label}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </BackFace>
                    </>
                  </FlipCard>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
