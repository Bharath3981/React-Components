import { useState } from "react";
import useArray from "../../hooks/useArray";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    render?: any;
  }
}

export type RcListOptions = {
  gridlines?: boolean;
  selectionMode?: "single" | "multiple" | undefined;
  selected?: Array<string | number>;
};
type Props = {
  children: JSX.Element;
  data: Array<Object>;
  options: RcListOptions;
};

const RcList = ({ children, data, options }: Props) => {
  const {
    gridlines = false,
    selectionMode = undefined,
    selected = [],
  } = options;
  const { array, addUniqueItem, updateItem, clearArray } = useArray(selected);
  console.log(array);
  const getSelectedClass = (index: number | string) => {
    let rowSelectedClass = "";
    if (selectionMode === "single" || selectionMode === "multiple") {
      if (array.some((item) => item === index)) {
        rowSelectedClass = " row-selected ";
      }
    }
    return rowSelectedClass;
  };

  const attachHandler = (
    e: React.MouseEvent<HTMLElement>,
    item: number | string
  ) => {
    if (
      (selectionMode === "single" || selectionMode === "multiple") &&
      !e.ctrlKey
    ) {
      clearArray();
      updateItem(0, item);
    } else if (selectionMode === "multiple" && e.ctrlKey) {
      addUniqueItem(item);
    }
  };
  return (
    <>
      {data.map((listItem: any, index: number) => {
        let obj = { ...listItem };
        obj.key = index;
        return (
          <div
            onClick={(e: React.MouseEvent<HTMLElement>) =>
              attachHandler(e, index)
            }
            className={`list-row row-hover ${getSelectedClass(index)}`}
            key={listItem.id}
          >
            <div> {children.props.render(obj)}</div>
            {gridlines && <hr />}
          </div>
        );
      })}
    </>
  );
};

export default RcList;
