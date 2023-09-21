declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    render?: any;
  }
}
type RcListOptions = {
  gridlines?: boolean;
};
type Props = {
  children: JSX.Element;
  data: Array<Object>;
  options: RcListOptions;
};

const RcList = ({ children, data, options }: Props) => {
  const { gridlines = false } = options;
  return (
    <>
      {data.map((listItem: any, index: number) => {
        let obj = { ...listItem };
        obj.key = index;
        return (
          <div className="row-hover row-selected" key={listItem.id}>
            <div> {children.props.render(obj)}</div>
            {gridlines && <hr />}
          </div>
        );
      })}
    </>
  );
};

export default RcList;
