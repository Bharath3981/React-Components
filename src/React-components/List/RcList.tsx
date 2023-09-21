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
  const getSelectedClass = (index: number | string) => {
    let rowSelectedClass = "";
    if (selectionMode === "single" || selectionMode === "multiple") {
      if (selected.find((item) => item === index)) {
        rowSelectedClass = " row-selected ";
      }
    }
    return rowSelectedClass;
  };
  return (
    <>
      {data.map((listItem: any, index: number) => {
        let obj = { ...listItem };
        obj.key = index;
        return (
          <div
            className={`row-hover ${getSelectedClass(index)}`}
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
