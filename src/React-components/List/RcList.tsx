import useArray from "../../hooks/useArray";
import "./List.css";

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
  onSelected?: (
    event: React.MouseEvent<HTMLElement>,
    row: any,
    selectedRows: Array<number | string>
  ) => void;
};
type Props = {
  children: JSX.Element;
  data: Array<Object>;
  options: RcListOptions;
};

const RcList = ({ children, data, options }: Props) => {
  let {
    gridlines = false,
    selectionMode = undefined,
    selected = [],
    onSelected = function () {},
  } = options;
  const { array, addUniqueItem, updateItem, clearArray } = useArray(selected);

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
    index: number | string,
    listItem: any
  ) => {
    if (
      (selectionMode === "single" || selectionMode === "multiple") &&
      !e.ctrlKey
    ) {
      clearArray();
      updateItem(0, index);
      let currentSelection = [...array];
      currentSelection = [index];
      onSelected(e, listItem, currentSelection);
    } else if (selectionMode === "multiple" && e.ctrlKey) {
      addUniqueItem(index);
      let currentSelection = [...array];
      currentSelection.push(index);
      onSelected(e, listItem, currentSelection);
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
              attachHandler(e, index, listItem)
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
