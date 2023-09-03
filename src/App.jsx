import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import routes from "./data/Routes";
import MainMenu from "./components/MainMenu";
import useSessionStorage from "./hooks/useSessionStorage";

function App() {
  console.log("APP.JS COMPONENT RENDERED");
  const [theme, setTheme] = useSessionStorage("theme", "jet");
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
      <div className={theme}>
        <div>
          <Header />
          <div className="w-full">
            <Outlet />
          </div>
          {/* <Footer /> */}
        </div>
        <div className="block md:hidden fixed mt-6 bottom-0 bg-white shadow-lg w-full border">
          <div className="px-2 flex justify-around items-center h-10">
            <MainMenu mainMenu={routes} defaultClassName="bottom-menu " />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
