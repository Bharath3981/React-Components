declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    render?: any;
  }
}
type Props = {
  children: JSX.Element;
  data: Array<Object>;
};

const RcList = ({ children, data }: Props) => {
  return (
    <>
      {data.map((listItem: any, index: number) => {
        listItem.key = index;
        return (
          <div key={listItem.id}>
            <div> {children.props.render(listItem)}</div>
            <hr />
          </div>
        );
      })}
    </>
  );
};

export default RcList;
