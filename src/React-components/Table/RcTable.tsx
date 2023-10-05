import { useState } from "react";
import {
  LiaSortSolid,
  LiaSortUpSolid,
  LiaSortDownSolid,
} from "react-icons/lia";
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
let dummyArray: any = [];
const RcTable = ({ data, columns, children, classes, options }: Props) => {
  const {
    keyAttribute,
    gridlines = false,
    selectionMode = undefined,
    selected = [],
    onSelected = function () {},
  } = options;
  //const { array, addUniqueItem, updateItem, clearArray } = useArray(selected);

  const [[], setSelectedRows] = useState(selected);

  const getSelectedClass = (index: number | string) => {
    let rowSelectedClass = "";
    if (selectionMode === "single" || selectionMode === "multiple") {
      if (dummyArray.some((item: any) => item === index)) {
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
      //clearArray();
      dummyArray = new Array();
      dummyArray = [listItem[keyAttribute]];
      setSelectedRows(dummyArray);
      //updateItem(0, listItem[keyAttribute]);

      let currentSelection = [...dummyArray];
      currentSelection = [listItem[keyAttribute]];
      onSelected(e, listItem, currentSelection);
    } else if (selectionMode === "multiple" && e.ctrlKey) {
      let tempIndex = 0;
      if (
        dummyArray.some((value: any, index: number) => {
          tempIndex = index;
          return value === listItem[keyAttribute];
        })
      ) {
        dummyArray.splice(tempIndex, 1);
      } else {
        dummyArray.push(listItem[keyAttribute]);
      }
      setSelectedRows((prevState) => [...prevState, ...dummyArray]);
      console.log(dummyArray);
      onSelected(e, listItem, dummyArray);
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
                  className="font-semibold px-3  overflow-hidden"
                  key={column.field}
                >
                  <div className="flex">
                    <div className="py-2">{column.label}</div>
                    <div className="flex flex-col px-3 py-2 cursor-pointer items-start">
                      <div className="h-[7px]">
                        <LiaSortUpSolid />
                      </div>
                      <div className="h-[7px]">
                        <LiaSortDownSolid />
                      </div>
                    </div>
                  </div>
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
