import CodeSnippet from "../../../util/CodeSnippet";

const CustomCompareFunction = () => {
  return (
    <div className="pb-5">
      <h1 className="sub-title">Specifying a custom comparison function</h1>
      <p className="description">
        In rare cases it may be infeasible to minimize the props changes of a
        memoized component. In that case, you can provide a custom comparison
        function, which React will use to compare the old and new props instead
        of using shallow equality. This function is passed as a second argument
        to memo. It should return true only if the new props would result in the
        same output as the old props; otherwise it should return false.
      </p>
      <CodeSnippet>{`const Chart = memo(function Chart({ dataPoints }) {
  // ...
}, arePropsEqual);

function arePropsEqual(oldProps, newProps) {
  return (
    oldProps.dataPoints.length === newProps.dataPoints.length &&
    oldProps.dataPoints.every((oldPoint, index) => {
      const newPoint = newProps.dataPoints[index];
      return oldPoint.x === newPoint.x && oldPoint.y === newPoint.y;
    })
  );
}`}</CodeSnippet>
    </div>
  );
};

export default CustomCompareFunction;
