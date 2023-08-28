import { Suspense, lazy } from "react";
import { CiHome, CiSettings } from "react-icons/ci";
import { TbComponents } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";

const Home = lazy(() => import("../components/Home"));
const Components = lazy(() => import("../components/Components"));
const Settings = lazy(() => import("../components/Settings"));
const AboutUs = lazy(() => import("../components/AboutUs"));

const FilteredList = lazy(() =>
  import("../React-components/List/FilteredList")
);
const TemplateList = lazy(() =>
  import("../React-components/List/TemplateList")
);
const BasicList = lazy(() => import("../React-components/List/BasicList"));
const BasicTable = lazy(() => import("../React-components/Table/BasicTable"));
export const componentChildRoutes = [
  {
    path: "/components/",
    element: (
      <Suspense fallback="Loading...">
        <BasicList />
      </Suspense>
    ),
  },
  {
    path: "/components/filteredList",
    element: (
      <Suspense fallback="Loading...">
        <FilteredList />
      </Suspense>
    ),
  },
  {
    path: "/components/templateList",
    element: (
      <Suspense fallback="Loading...">
        <TemplateList />
      </Suspense>
    ),
  },
  {
    path: "/components/basicTable",
    element: (
      <Suspense fallback="Loading...">
        <BasicTable />
      </Suspense>
    ),
  },
];
const routes = [
  {
    id: "menu-1",
    label: "Home",
    icon: <CiHome />,
    path: "/",
    element: (
      <Suspense fallback="Loading...">
        <Home />
      </Suspense>
    ),
  },
  {
    id: "menu-2",
    label: "Components",
    icon: <TbComponents />,
    path: "/components",
    element: (
      <Suspense fallback="Loading...">
        <Components />
      </Suspense>
    ),
    children: componentChildRoutes,
  },
  {
    id: "menu-3",
    label: "Settings",
    icon: <CiSettings />,
    path: "/settings",
    element: (
      <Suspense fallback="Loading...">
        <Settings />
      </Suspense>
    ),
  },
  {
    id: "menu-4",
    label: "About me",
    icon: <RiContactsLine />,
    path: "/aboutUs",
    element: (
      <Suspense fallback="Loading...">
        <AboutUs />
      </Suspense>
    ),
  },
];

export default routes;
