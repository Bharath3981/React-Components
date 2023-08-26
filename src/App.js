import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="amazon">
      <Header />
      <div className="h-screen  flex  w-full">
        <div className="side-bar p-1 hidden md:block w-[30%]">
          <SideBar />
        </div>
        <div className="w-full ">
          <MainContent />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
