import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import ThemeContext from "./context/ThemeContext";

function App() {
  console.log("APP.JS COMPONENT RENDERED");
  const [theme, setTheme] = useState("jet");
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
        <Header />
        <div className="h-screen w-full">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
