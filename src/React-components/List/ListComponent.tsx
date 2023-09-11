type Props = {
  children: JSX.Element;
};

const ListComponent = ({ children }: Props) => {
  return <div> {children}</div>;
};

export default ListComponent;
