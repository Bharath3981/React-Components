declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    render?: any;
  }
}
type Props = {
  children: JSX.Element;
};

const ListComponent = ({ children }: Props) => {
  console.log(children);
  return <div> {children.props.render("Special string")}</div>;
};

export default ListComponent;
