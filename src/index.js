import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Components from "./components/Components";
import Settings from "./components/Settings";
import AboutUs from "./components/AboutUs";
import BasicList from "./React-components/List/BasicList";
import FilteredList from "./React-components/List/FilteredList";
import TemplateList from "./React-components/List/TemplateList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/components",
        element: <Components />,
        children: [
          {
            path: "/components/",
            element: <BasicList />,
          },
          {
            path: "/components/filteredList",
            element: <FilteredList />,
          },
          {
            path: "/components/templateList",
            element: <TemplateList />,
          },
        ],
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
