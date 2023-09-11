import ReactDOM from "react-dom/client";
import "./tailwind.css";
import App from "./App";
import { RouterProvider, createHashRouter } from "react-router-dom";
import routes from "./data/Routes";

console.log("INDEX.JS COMPONENT RENDERED");
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: routes,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <RouterProvider router={router}></RouterProvider>

  // </React.StrictMode>
);
