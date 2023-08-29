import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="jet">
      <Header />
      <div className="h-screen flex  w-full">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
