import { Suspense, lazy } from "react";
import { CiHome, CiSettings } from "react-icons/ci";
import { PiShapesThin, PiTableThin, PiListBulletsThin } from "react-icons/pi";
import { RiContactsLine, RiJavascriptLine } from "react-icons/ri";
import { MdOutlineDescription } from "react-icons/md";
import JavaScriptTopics from "../components/JavaScriptTopics";
import {
  InterviewTopics,
  InterviewTopicsChildren,
} from "../components/InterviewTopics";
import RomanNumber from "../Interview-topics/JSInterview/RomanNumber/RomanNumber";
const CallApplyBind = lazy(
  () => import("../Interview-topics/JSInterview/CallApplyBind/callApplyBind")
);
const SumOfArguments = lazy(
  () => import("../Interview-topics/JSInterview/SumOfArguments/SumOfArguments")
);
const BinaryRepresentation = lazy(
  () =>
    import(
      "../Interview-topics/JSInterview/BinaryRepresentation/BinaryRepresentation"
    )
);
const ComplexStateManipulation = lazy(
  () =>
    import(
      "../Interview-topics/ReactInterview/ComplexStateManipulation/ComplexStateManipulation"
    )
);
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
const ErrorBoundaryTopic = lazy(
  () => import("../React-topics/ErrorBoundaryTopic/ErrorBoundaryTopic")
);
const HigherComponentsTopic = lazy(
  () => import("../React-topics/HigherComponentsTopic/HigherComponentsTopic")
);

const ArrayMethodsTopic = lazy(
  () => import("../JS-topics/ArrayMethods/ArrayMethodsTopic")
);
const HigherOrderFunctions = lazy(
  () => import("../JS-topics/HigherOrderFunctions/HigherOrderFunctions")
);
const DebouncingTopic = lazy(
  () => import("../JS-topics/DebouncingTopic/DebouncingTopic")
);
const ThrottlingTopic = lazy(
  () => import("../JS-topics/ThrottlingTopic/ThrottlingTopic")
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
  {
    _id: "topics-13",
    _label: "Error Boundary",
    path: "/topics/errorBoundary",
    element: (
      <Suspense fallback="Loading...">
        <ErrorBoundaryTopic />
      </Suspense>
    ),
  },
  {
    _id: "topics-14",
    _label: "HO Components",
    path: "/topics/higherOrderComponents",
    element: (
      <Suspense fallback="Loading...">
        <HigherComponentsTopic />
      </Suspense>
    ),
  },
];

export const javaScriptTopicsChildren = [
  {
    _id: "JS-topics-1",
    _label: "Array methods",
    path: "/javascript/",
    element: (
      <Suspense fallback="Loading...">
        <ArrayMethodsTopic />
      </Suspense>
    ),
  },
  {
    _id: "JS-topics-2",
    _label: "Higher Order fun",
    path: "/javascript/higherOrderFunctions",
    element: (
      <Suspense fallback="Loading...">
        <HigherOrderFunctions />
      </Suspense>
    ),
  },
  {
    _id: "JS-topics-3",
    _label: "Debouncing",
    path: "/javascript/debouncing",
    element: (
      <Suspense fallback="Loading...">
        <DebouncingTopic />
      </Suspense>
    ),
  },
  {
    _id: "JS-topics-4",
    _label: "Throttling",
    path: "/javascript/throttling",
    element: (
      <Suspense fallback="Loading...">
        <ThrottlingTopic />
      </Suspense>
    ),
  },
];
export const JSInterviewQuestions = [
  {
    id: "jsInterview1",
    title: "sum(a)(b)...(n)",
    description: "The sum method should return the some of all parameters.",
    path: "/interview/jsInterview1",
    element: (
      <Suspense fallback="Loading...">
        <SumOfArguments />
      </Suspense>
    ),
  },
  {
    id: "jsInterview2",
    title: "Binary Representation",
    description: "How many 1 bits are in it's binary representation. ",
    path: "/interview/jsInterview2",
    element: (
      <Suspense fallback="Loading...">
        <BinaryRepresentation />
      </Suspense>
    ),
  },
  {
    id: "jsInterview3",
    title: "Roman Number",
    description: "Convert number to roman number ",
    path: "/interview/jsInterview3",
    element: (
      <Suspense fallback="Loading...">
        <RomanNumber />
      </Suspense>
    ),
  },
  {
    id: "jsInterview4",
    title: "Call Apply Bind Example",
    description: "Implement call, apply and bind methods.",
    path: "/interview/callApplyBindExample",
    element: (
      <Suspense fallback="Loading...">
        <CallApplyBind />
      </Suspense>
    ),
  },
];

export const ReactInterviewQuestions = [
  {
    id: "reactInterview1",
    title: "Complex State",
    description: "The satate has array of objects, binding form with object.",
    path: "/interview/reactInterview1",
    element: (
      <Suspense fallback="Loading...">
        <ComplexStateManipulation />
      </Suspense>
    ),
  },
];

export const interviewTopicsChildren = [
  {
    _id: "interview-topics-1",
    _label: "Interview-1",
    path: "/interview",
    element: (
      <Suspense fallback="Loading...">
        <InterviewTopicsChildren />
      </Suspense>
    ),
  },
  ...JSInterviewQuestions,
  ...ReactInterviewQuestions,
];

export const reduxTopicsChildren = [
  {
    _id: "topics-1",
    _label: "Array methods",
    path: "/redux/",
    element: (
      <Suspense fallback="Loading...">
        <ArrayMethodsTopic />
      </Suspense>
    ),
  },
];

const routes = [
  {
    _id: "menu-1",
    _label: "Home",
    _icon: <CiHome />,
    _render: true,
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
    _render: true,
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
    _render: true,
    _icon: <MdOutlineDescription />,
    path: "topics",
    _hasSubmenu: true,
    _submenuId: "topicsSubmentu",
    element: (
      <Suspense fallback="Loading...">
        <ReactTopics />
      </Suspense>
    ),
    _submenus: [
      {
        _id: "menu-3-submenu-1",
        _label: "React",
        path: "javascript",
      },
      {
        _id: "menu-3-submenu-2",
        _label: "Redux",
        path: "javascript",
      },
      {
        _id: "menu-3-submenu-3",
        _label: "JavaScript",
        path: "/javascript",
      },
      {
        _id: "menu-3-submenu-4",
        _label: "Interview",
        path: "/interview",
      },
    ],
    children: reactTopicsChildren,
  },
  {
    _id: "menu-5",
    _label: "Javascript",
    _render: false,
    _icon: <RiJavascriptLine />,
    path: "javascript",
    element: (
      <Suspense fallback="Loading...">
        <JavaScriptTopics />
      </Suspense>
    ),
    children: javaScriptTopicsChildren,
  },
  {
    _id: "menu-6",
    _label: "Settings",
    _render: true,
    _icon: <CiSettings />,
    path: "/settings",
    element: (
      <Suspense fallback="Loading...">
        <Settings />
      </Suspense>
    ),
  },
  {
    _id: "menu-7",
    _label: "About Me",
    _render: true,
    _icon: <RiContactsLine />,
    path: "/aboutUs",
    element: (
      <Suspense fallback="Loading...">
        <AboutUs />
      </Suspense>
    ),
  },
  {
    _id: "menu-8",
    _label: "Interview",
    _render: false,
    _icon: <RiJavascriptLine />,
    path: "/interview",
    element: (
      <Suspense fallback="Loading...">
        <InterviewTopics />
      </Suspense>
    ),
    children: interviewTopicsChildren,
  },
];

export default routes;
