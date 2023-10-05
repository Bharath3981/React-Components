import useArray from "../../hooks/useArray";
import "./RcTable.css";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    render?: any;
  }
}

type RcTableOptions = {
  keyAttribute: string;
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
    keyAttribute,
    gridlines = false,
    selectionMode = undefined,
    selected = [],
    onSelected = function () {},
  } = options;
  const { array, addUniqueItem, updateItem, clearArray } = useArray(selected);
  const getSelectedClass = (index: number | string) => {
    let rowSelectedClass = "";
    if (selectionMode === "single" || selectionMode === "multiple") {
      //console.log(array);
      if (array.some((item) => item === index)) {
        rowSelectedClass = " row-selected ";
      }
    }
    return rowSelectedClass;
  };

  const attachHandler = (e: React.MouseEvent<HTMLElement>, listItem: any) => {
    if (
      (selectionMode === "single" || selectionMode === "multiple") &&
      !e.ctrlKey
    ) {
      clearArray();
      updateItem(0, listItem[keyAttribute]);
      setTimeout(() => {
        console.log(array, listItem[keyAttribute]);
      }, 1000);

      let currentSelection = [...array];
      currentSelection = [listItem[keyAttribute]];
      onSelected(e, listItem, currentSelection);
    } else if (selectionMode === "multiple" && e.ctrlKey) {
      addUniqueItem(listItem[keyAttribute]);
      let currentSelection = [...array];
      currentSelection.push(listItem[keyAttribute]);
      onSelected(e, listItem, currentSelection);
    }
  };
  return (
    <>
      <div className={classes + " auto-hide-scrollbar"}>
        <table className="min-w-max  w-full bg-white mr-3">
          <thead className="overflow-hidden bg-inherit sticky top-0 mt-2">
            <tr className={`head-row ${gridlines ? "table-row" : ""}`}>
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
                    attachHandler(e, tableItem)
                  }
                  key={tableItem[keyAttribute]}
                  className={`row-hover ${
                    gridlines ? "body-row" : ""
                  } ${getSelectedClass(tableItem[keyAttribute])}`}
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
