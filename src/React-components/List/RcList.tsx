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
        listItem.key = index;
        return (
          <div key={listItem.id}>
            <div> {children.props.render(listItem)}</div>
            {gridlines && <hr />}
          </div>
        );
      })}
    </>
  );
};

export default RcList;
