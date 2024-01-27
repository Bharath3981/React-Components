import { Suspense, lazy } from "react";
import { CiHome, CiSettings } from "react-icons/ci";
import { PiShapesThin, PiTableThin, PiListBulletsThin } from "react-icons/pi";
import { RiContactsLine } from "react-icons/ri";
import { MdOutlineDescription } from "react-icons/md";

const Home = lazy(() => import("../components/Home/Home"));
const Components = lazy(() => import("../components/Components"));
const ReactTopics = lazy(() => import("../components/ReactTopics"));
const Settings = lazy(() => import("../components/Settings"));
const AboutUs = lazy(() => import("../components/AboutUsComp/AboutUs"));

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
const GridTable = lazy(
  () => import("../React-components/Table/GridTable/GridTable")
);
const SingleSelectionTable = lazy(
  () =>
    import(
      "../React-components/Table/SingleSelectionTable/SingleSelectionTable"
    )
);
const MultipleSelectionTable = lazy(
  () =>
    import(
      "../React-components/Table/MultipleSelectionTable/MultipleSelectionTable"
    )
);
const SelectionEvent = lazy(
  () => import("../React-components/Table/SelectionEvent/SelectionEvent")
);
const SortableTable = lazy(
  () => import("../React-components/Table/SortableTable/SortableTable")
);
const ActionTable = lazy(
  () => import("../React-components/Table/ActionTable/ActionTable")
);
const EditableTable = lazy(
  () => import("../React-components/Table/EditableTable/EditableTable")
);

const UseStateTopic = lazy(
  () => import("../React-topics/useStateTopic/UseStateTopic")
);
const UseEffectTopic = lazy(
  () => import("../React-topics/UseEffectTopic/UseEffectTopic")
);
const EscapeHatch = lazy(
  () => import("../React-topics/EscapeHatch/EscapeHatch")
);
const UseRefTopic = lazy(
  () => import("../React-topics/UseRefTopic/UseRefTopic")
);
const ForwardRefTopic = lazy(
  () => import("../React-topics/ForwardRef/ForwardRefTopic")
);
const PureComponents = lazy(
  () => import("../React-topics/PureComponents/PureComponents")
);
const UseImperativeHandleTopic = lazy(
  () => import("../React-topics/UseImperativeHandle/UseImperativeHandleTopic")
);
const UseReducerTopic = lazy(
  () => import("../React-topics/UseReducer/UseReducerTopic")
);
const BatchesStateUpdate = lazy(
  () => import("../React-topics/BatchesStateUpdate/BatchesStateUpdate")
);
const UseMemoTopic = lazy(
  () => import("../React-topics/UseMemoTopic/UseMemoTopic")
);
const UseCallBackTopic = lazy(
  () => import("../React-topics/UseCallBackTopic/UseCallBackTopic")
);
const UseContextTopic = lazy(
  () => import("../React-topics/UseContextTopic/UseContextTopic")
);

export type componentPageType = {
  _id: string;
  _label: string;
  path: string;
  element: JSX.Element;
};

export type componentPagesType = Array<componentPageType>;

export const listComponentPages: componentPagesType = [
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

export const tableComponentPages = [
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
    _label: "Grid lines",
    path: "/components/table/gridLinesTable",
    element: (
      <Suspense fallback="Loading...">
        <GridTable />
      </Suspense>
    ),
  },
  {
    _id: "tableComponent-3",
    _label: "Single Selection",
    path: "/components/table/singleSelection",
    element: (
      <Suspense fallback="Loading...">
        <SingleSelectionTable />
      </Suspense>
    ),
  },
  {
    _id: "tableComponent-4",
    _label: "Multiple Selection",
    path: "/components/table/multipleSelection",
    element: (
      <Suspense fallback="Loading...">
        <MultipleSelectionTable />
      </Suspense>
    ),
  },
  {
    _id: "tableComponent-5",
    _label: "Selection Event",
    path: "/components/table/selectionEvent",
    element: (
      <Suspense fallback="Loading...">
        <SelectionEvent />
      </Suspense>
    ),
  },
  {
    _id: "tableComponent-6",
    _label: "Sortable table",
    path: "/components/table/sortableTable",
    element: (
      <Suspense fallback="Loading...">
        <SortableTable />
      </Suspense>
    ),
  },
  {
    _id: "tableComponent-7",
    _label: "Action table",
    path: "/components/table/actionTable",
    element: (
      <Suspense fallback="Loading...">
        <ActionTable />
      </Suspense>
    ),
  },
  {
    _id: "tableComponent-8",
    _label: "Editable table",
    path: "/components/table/editableTable",
    element: (
      <Suspense fallback="Loading...">
        <EditableTable />
      </Suspense>
    ),
  },
];

export const componentsChildren = [
  {
    path: "/components/",
    _id: "component-list",
    _icon: <PiListBulletsThin />,
    _label: "List",
    element: (
      <Suspense fallback="Loading...">
        <ListContent />
      </Suspense>
    ),
    children: listComponentPages,
  },
  {
    path: "/components/table",
    _id: "component-table",
    _icon: <PiTableThin />,
    _label: "Table",
    element: (
      <Suspense fallback="Loading...">
        <TableContent />
      </Suspense>
    ),
    children: tableComponentPages,
  },
];

export const reactTopicsChildren = [
  {
    _id: "topics-1",
    _label: "UseState",
    path: "/topics/",
    element: (
      <Suspense fallback="Loading...">
        <UseStateTopic />
      </Suspense>
    ),
  },
  {
    _id: "topics-2",
    _label: "UseEffect",
    path: "/topics/useEffect",
    element: (
      <Suspense fallback="Loading...">
        <UseEffectTopic />
      </Suspense>
    ),
  },
  {
    _id: "topics-3",
    _label: "Escape Hatch",
    path: "/topics/escapeHatch",
    element: (
      <Suspense fallback="Loading...">
        <EscapeHatch />
      </Suspense>
    ),
  },
  {
    _id: "topics-4",
    _label: "UseRef",
    path: "/topics/useRef",
    element: (
      <Suspense fallback="Loading...">
        <UseRefTopic />
      </Suspense>
    ),
  },
  {
    _id: "topics-5",
    _label: "ForwardRef",
    path: "/topics/forwardRef",
    element: (
      <Suspense fallback="Loading...">
        <ForwardRefTopic />
      </Suspense>
    ),
  },
  {
    _id: "topics-6",
    _label: "PureComponents",
    path: "/topics/pureComponents",
    element: (
      <Suspense fallback="Loading...">
        <PureComponents />
      </Suspense>
    ),
  },
  {
    _id: "topics-7",
    _label: "UseImperativeHandle",
    path: "/topics/useImperativeHandle",
    element: (
      <Suspense fallback="Loading...">
        <UseImperativeHandleTopic />
      </Suspense>
    ),
  },
  {
    _id: "topics-8",
    _label: "UseReducer",
    path: "/topics/useReducer",
    element: (
      <Suspense fallback="Loading...">
        <UseReducerTopic />
      </Suspense>
    ),
  },
  {
    _id: "topics-9",
    _label: "BatchesStateUpdate",
    path: "/topics/batchesStateUpdate",
    element: (
      <Suspense fallback="Loading...">
        <BatchesStateUpdate />
      </Suspense>
    ),
  },
  {
    _id: "topics-10",
    _label: "UseMemo",
    path: "/topics/UseMemo",
    element: (
      <Suspense fallback="Loading...">
        <UseMemoTopic />
      </Suspense>
    ),
  },
  {
    _id: "topics-11",
    _label: "UseCallback",
    path: "/topics/UseCallback",
    element: (
      <Suspense fallback="Loading...">
        <UseCallBackTopic />
      </Suspense>
    ),
  },
  {
    _id: "topics-12",
    _label: "UseContext",
    path: "/topics/UseContext",
    element: (
      <Suspense fallback="Loading...">
        <UseContextTopic />
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
    path: "components",
    element: (
      <Suspense fallback="Loading...">
        <Components />
      </Suspense>
    ),
    children: componentsChildren,
  },
  {
    _id: "menu-3",
    _label: "Topics",
    _icon: <MdOutlineDescription />,
    path: "/topics/",
    _hasSubmenu: true,
    element: (
      <Suspense fallback="Loading...">
        <ReactTopics />
      </Suspense>
    ),
    _submenus: [
      {
        _id: "menu-3-submenu-1",
        _label: "Menu-1",
      },
      {
        _id: "menu-3-submenu-2",
        _label: "Menu-2",
      },
    ],
    children: reactTopicsChildren,
  },
  {
    _id: "menu-4",
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
    _id: "menu-5",
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
