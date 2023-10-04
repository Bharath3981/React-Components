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
};

type Props = {
  children: JSX.Element;
  data: Array<Object>;
  columns: Array<Object>;
  options: RcTableOptions;
  classes?: string;
};
const RcTable = ({ data, columns, children, classes, options }: Props) => {
  const { gridlines } = options;
  return (
    <>
      <div className={classes + " auto-hide-scrollbar"}>
        <table className="min-w-max  w-full bg-white mr-3">
          <thead className="overflow-hidden bg-inherit sticky top-0 ">
            <tr
              className={`text-left bg-inherit border-b shadow-sm ${
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
                  key={tableItem.id}
                  className={`${gridlines ? "table-row" : ""}`}
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
