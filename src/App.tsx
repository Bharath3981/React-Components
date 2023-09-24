import { Outlet } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeContext from "./context/ThemeContext";
import routes, { componentPagesType, listComponentPages } from "./data/Routes";
import MainMenu from "./components/MainMenu";
import useSessionStorage from "./hooks/useSessionStorage";
import ComponentPagesContext from "./context/ComponentPagesContext";

function App() {
  console.log("APP.JS COMPONENT RENDERED");
  const [theme, setTheme] = useSessionStorage("theme", "jet");
  const [componentPages, setComponentPages] =
    useState<componentPagesType>(listComponentPages);
  if (theme === "jet") {
    import("./Themes/jet-theme.css");
  }
  if (theme === "amazon") {
    import("./Themes/amazon-theme.css");
  }
  if (theme === "flipkart") {
    import("./Themes/flipkart-theme.css");
  }

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <div className={theme + " overflow-hidden"}>
        <ComponentPagesContext.Provider
          value={[componentPages, setComponentPages]}
        >
          <Header />

          <div className="w-full">
            <Outlet />
          </div>
        </ComponentPagesContext.Provider>
        <div className="block md:hidden fixed mt-6 bottom-0 bg-white shadow-lg w-full border">
          <div className="px-2 flex justify-around items-center h-10">
            <MainMenu mainMenu={routes} defaultClassName="bottom-menu " />
          </div>
        </div>
        {document.body.offsetWidth >= 768 && (
          <div
            id="app-footer"
            className="block w-full bg-white shadow-lg border text-center  h-8"
          >
            <Footer />
          </div>
        )}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
