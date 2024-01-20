import SkippingRecalcualtaionUseCallback from "./SkippingRecalcualtaion/SkippingRecalcualtaionUseCallback";

const UseCallBackTopic = () => {
  return (
    <div className="pb-5">
      <h1 className="main-title">useCallback</h1>
      <p className="description">
        <code>useCallback</code> is a React Hook that lets you cache a function
        definition between re-renders.
      </p>
      <SkippingRecalcualtaionUseCallback />
    </div>
  );
};

export default UseCallBackTopic;
