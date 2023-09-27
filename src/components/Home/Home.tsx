import { NavLink } from "react-router-dom";
import { componentsChildren } from "../../data/Routes";
import "./Home.css";
const Home = () => {
  console.log("HOME.JS COMPONENT RENDERED");
  return (
    <div className="h-[calc(100vh_-_108px)] md:h-[calc(100vh_-_96px)]">
      <div className="content-layout w-full h-full">
        <div className="h-full">
          <div className="m-5">
            <div className="components-strip">React Components</div>
            <div className="flex justify-normal gap-5 p-5 ">
              {componentsChildren.map((component: any) => (
                <NavLink to={component.path}>
                  <div className="component-tile" key={component.id}>
                    <div className="inline-block font-black">
                      {component._icon}
                    </div>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
