import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="amazon">
      <Header />
      <div className="h-screen flex  w-full">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
