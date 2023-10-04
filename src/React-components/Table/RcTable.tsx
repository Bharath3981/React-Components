import useArray from "../../hooks/useArray";
import "./RcTable.css";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    render?: any;
  }
}

type RcTableOptions = {
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
  columns: Array<Object>;
  options: RcTableOptions;
  classes?: string;
};
const RcTable = ({ data, columns, children, classes, options }: Props) => {
  const {
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
      <div className={classes + " auto-hide-scrollbar"}>
        <table className="min-w-max  w-full bg-white mr-3">
          <thead className="overflow-hidden bg-inherit sticky top-0 ">
            <tr
              className={`row text-left bg-inherit border-b shadow-sm ${
                gridlines ? "table-row" : ""
              }`}
            >
              {columns.map((column: any) => (
                <th
                  className="font-semibold px-3 py-2 overflow-hidden"
                  key={column.field}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="overflow-hidden">
            {data.map((tableItem: any, index: number) => {
              let obj = { ...tableItem };
              obj.key = index;
              return (
                <tr
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    attachHandler(e, index, tableItem)
                  }
                  key={tableItem.id}
                  className={`row-hover ${
                    gridlines ? "table-row" : ""
                  } ${getSelectedClass(index)}`}
                >
                  {children.props.render(obj)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RcTable;
