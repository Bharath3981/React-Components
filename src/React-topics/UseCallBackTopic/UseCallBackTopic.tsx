import InfoBlock from "../../util/InfoBlock";
import SkippingRecalcualtaionUseCallback from "./SkippingRecalcualtaion/SkippingRecalcualtaionUseCallback";

const UseCallBackTopic = () => {
  return (
    <div className="pb-5">
      <h1 className="main-title">useCallback</h1>
      <p className="description">
        <code>useCallback</code> is a React Hook that lets you cache a function
        definition between re-renders.
      </p>
      <InfoBlock>
        <p className="description">
          when a component re-renders, every function inside of the component is
          recreated and therefore these functions’ references change between
          renders.
        </p>
      </InfoBlock>
      <SkippingRecalcualtaionUseCallback />
    </div>
  );
};

export default UseCallBackTopic;
