import React from "react";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Settings = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  console.log("SETTINGS.JS COMPONENT RENDERED");
  return (
    <>
      <div className="content-layout w-full h-full">
        <div className="panel h-full">
          <div className="p-10">
            <div className="grid grid-cols-1">
              <div className="">
                <label className="text-gray-900 text-md">Theme:</label>
                <div>
                  <input
                    type="radio"
                    id="redwood"
                    name="theme"
                    value="jet"
                    checked={theme === "jet"}
                    onChange={(e) => setTheme(e.target.value)}
                    className="radio-button"
                  />
                  <label
                    htmlFor="redwood"
                    className="text-gray-900 text-sm px-2"
                  >
                    Redwood
                  </label>
                </div>

                <div>
                  <input
                    type="radio"
                    id="amazon"
                    name="theme"
                    value="amazon"
                    checked={theme === "amazon"}
                    onChange={(e) => setTheme(e.target.value)}
                    className="radio-button"
                  ></input>
                  <label
                    htmlFor="amazon"
                    className="text-gray-900 text-sm px-2"
                  >
                    Amazon
                  </label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="flipkart"
                    name="theme"
                    value="flipkart"
                    checked={theme === "flipkart"}
                    onChange={(e) => setTheme(e.target.value)}
                    className="radio-button"
                  />
                  <label
                    htmlFor="flipkart"
                    className="text-gray-900 text-sm px-2"
                  >
                    Flipkart
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
