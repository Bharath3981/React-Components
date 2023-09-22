import { Suspense, lazy } from "react";
import { CiHome, CiSettings, CiViewList, CiViewTable } from "react-icons/ci";
import { PiShapesThin } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";

const Home = lazy(() => import("../components/Home"));
const Components = lazy(() => import("../components/Components"));
const Settings = lazy(() => import("../components/Settings"));
const AboutUs = lazy(() => import("../components/AboutUs"));

const ListSingleSelection = lazy(
  () => import("../React-components/List/ListSingleSelection")
);
const ListMultipleSelection = lazy(
  () => import("../React-components/List/ListMultipleSelection")
);
const ListGridLines = lazy(
  () => import("../React-components/List/ListGridLines")
);
const ListSelectionEvent = lazy(
  () => import("../React-components/List/ListSelectionEvent")
);
const BasicList = lazy(() => import("../React-components/List/BasicList"));
const BasicTable = lazy(() => import("../React-components/Table/BasicTable"));
const SortableTable = lazy(
  () => import("../React-components/Table/SortableTable")
);
export const componentChildRoutes: any = {
  listComponents: {
    label: "List Components",
    expand: true,
    menuId: "listComponents",
    icon: <CiViewList />,
    subMenus: [
      {
        _id: "componentsMenu-1",
        _label: "Basic List",
        _type: "List Component",
        path: "/components/",
        element: (
          <Suspense fallback="Loading...">
            <BasicList />
          </Suspense>
        ),
      },
      {
        _id: "componentsMenu-2",
        _label: "Grid Lines",
        _type: "List Component",
        path: "/components/ListGridLines",
        element: (
          <Suspense fallback="Loading...">
            <ListGridLines />
          </Suspense>
        ),
      },
      {
        _id: "componentsMenu-3",
        _label: "Single Selection",
        _type: "List Component",
        path: "/components/ListSingleSelection",
        element: (
          <Suspense fallback="Loading...">
            <ListSingleSelection />
          </Suspense>
        ),
      },
      {
        _id: "componentsMenu-4",
        _label: "Multiple Selection",
        _type: "List Component",
        path: "/components/ListMultipleSelection",
        element: (
          <Suspense fallback="Loading...">
            <ListMultipleSelection />
          </Suspense>
        ),
      },
      {
        _id: "componentsMenu-5",
        _label: "Selection Event",
        _type: "List Component",
        path: "/components/ListSelectionEvent",
        element: (
          <Suspense fallback="Loading...">
            <ListSelectionEvent />
          </Suspense>
        ),
      },
    ],
  },

  tableComponents: {
    label: "Table Components",
    expand: false,
    menuId: "tableComponents",
    icon: <CiViewTable />,
    subMenus: [
      {
        _id: "componentsMenu-4",
        _label: "Basic table",
        _type: "Table Component",
        path: "/components/basicTable",
        element: (
          <Suspense fallback="Loading...">
            <BasicTable />
          </Suspense>
        ),
      },
      {
        _id: "componentsMenu-5",
        _label: "Sortable table",
        _type: "Table Component",
        path: "/components/sortableTable",
        element: (
          <Suspense fallback="Loading...">
            <SortableTable />
          </Suspense>
        ),
      },
    ],
  },
};
const routes = [
  {
    _id: "menu-1",
    _label: "Home",
    _icon: <CiHome />,
    path: "/",
    element: (
      <Suspense fallback="Loading...">
        <Home />
      </Suspense>
    ),
  },
  {
    _id: "menu-2",
    _label: "Components",
    _icon: <PiShapesThin />,
    path: "/components",
    element: (
      <Suspense fallback="Loading...">
        <Components />
      </Suspense>
    ),
    children: [
      ...componentChildRoutes.listComponents.subMenus,
      ...componentChildRoutes.tableComponents.subMenus,
    ],
  },
  {
    _id: "menu-3",
    _label: "Settings",
    _icon: <CiSettings />,
    path: "/settings",
    element: (
      <Suspense fallback="Loading...">
        <Settings />
      </Suspense>
    ),
  },
  {
    _id: "menu-4",
    _label: "About Me",
    _icon: <RiContactsLine />,
    path: "/aboutUs",
    element: (
      <Suspense fallback="Loading...">
        <AboutUs />
      </Suspense>
    ),
  },
];

export default routes;
