declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    render?: any;
  }
}

type RcTableOptions = {};

type Props = {
  children: JSX.Element;
  data: Array<Object>;
  columns: Array<Object>;
  options: RcTableOptions;
  classes?: string;
};
const RcTable = ({ data, columns, children, classes }: Props) => {
  return (
    <>
      <div className={classes + " pl-1"}>
        <table className="min-w-max  w-full box-border bg-white">
          <thead className="overflow-hidden bg-inherit sticky top-0">
            <tr className="text-left  bg-inherit border">
              {columns.map((column: any) => (
                <th
                  className="font-semibold px-3 py-1 overflow-hidden"
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
              return <tr key={tableItem.id}> {children.props.render(obj)}</tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RcTable;
