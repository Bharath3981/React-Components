import { Suspense } from "react";

export default const listComponentPages: componentPagesType = [
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