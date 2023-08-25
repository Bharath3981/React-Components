import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="amazon">
      <Header />
      <div className="h-screen p-2 sm:px-4 lg:px-6 flex gap-3  w-full">
        <div className="hidden md:block w-[30%]">
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
