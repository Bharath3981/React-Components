import ListComponent from "./ListComponent";

const BasicList = () => {
  return (
    <div>
      <div className="text-2xl font-semibold">List Component</div>
      <div className="text-gray-400 text-sm">RcList</div>
      <span>A list view displays data items as a list or a grid.</span>
      <span>This demo shows as list</span>
      <div className="p-3 my-2 border">
        <ListComponent>
          <span>Test</span>
        </ListComponent>
      </div>
    </div>
  );
};

export default BasicList;
