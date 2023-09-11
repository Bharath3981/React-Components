type Props = {
  children: JSX.Element;
};

const ListComponent = ({ children }: Props) => {
  return <div> {console.log(children)}</div>;
};

export default ListComponent;
