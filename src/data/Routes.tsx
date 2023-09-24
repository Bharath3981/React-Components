import { Suspense, lazy } from "react";
import { CiHome, CiSettings } from "react-icons/ci";
import { PiShapesThin } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";

const Home = lazy(() => import("../components/Home"));
const Components = lazy(() => import("../components/Components"));
const Settings = lazy(() => import("../components/Settings"));
const AboutUs = lazy(() => import("../components/AboutUs"));

const ListContent = lazy(() => import("../components/Contents/ListContent"));
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

const TableContent = lazy(() => import("../components/Contents/TableContent"));
const BasicList = lazy(() => import("../React-components/List/BasicList"));
const BasicTable = lazy(() => import("../React-components/Table/BasicTable"));
const SortableTable = lazy(
  () => import("../React-components/Table/SortableTable")
);

export type componentPageType = {
  _id: string;
  _label: string;
  path: string;
  element: JSX.Element;
};

export const listComponentPages: Array<componentPageType> = [
  {
    _id: "componentsMenu-1",
    _label: "Basic List",
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
    path: "/components/list/gridlines",
    element: (
      <Suspense fallback="Loading...">
        <ListGridLines />
      </Suspense>
    ),
  },
  {
    _id: "componentsMenu-3",
    _label: "Single Selection",
    path: "/components/list/singleSelection",
    element: (
      <Suspense fallback="Loading...">
        <ListSingleSelection />
      </Suspense>
    ),
  },
  {
    _id: "componentsMenu-4",
    _label: "Multiple Selection",
    path: "/components/list/multipleSelection",
    element: (
      <Suspense fallback="Loading...">
        <ListMultipleSelection />
      </Suspense>
    ),
  },
  {
    _id: "componentsMenu-5",
    _label: "Selection Event",
    path: "/components/list/selectionEvent",
    element: (
      <Suspense fallback="Loading...">
        <ListSelectionEvent />
      </Suspense>
    ),
  },
];

export const tableComponentPages: any = [
  {
    _id: "tableComponent-1",
    _label: "Basic table",
    path: "/components/table/",
    element: (
      <Suspense fallback="Loading...">
        <BasicTable />
      </Suspense>
    ),
  },
  {
    _id: "tableComponent-2",
    _label: "Sortable table",
    path: "/components/table/sortableTable",
    element: (
      <Suspense fallback="Loading...">
        <SortableTable />
      </Suspense>
    ),
  },
];

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
    path: "/components/",
    element: (
      <Suspense fallback="Loading...">
        <Components />
      </Suspense>
    ),
    children: [
      {
        path: "/components/",
        element: (
          <Suspense fallback="Loading...">
            <ListContent />
          </Suspense>
        ),
        children: listComponentPages,
      },
      {
        path: "/components/table/",
        element: (
          <Suspense fallback="Loading...">
            <TableContent />
          </Suspense>
        ),
        children: tableComponentPages,
      },
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
