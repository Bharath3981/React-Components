import PureComponentsExample from "./PureComponentsExample/PureComponentsExample";
import SkippingUnnecessaryReRenders from "./SkippingUnnecessaryReRenders/SkippingUnnecessaryReRenders";

const PureComponents = () => {
  return (
    <div className="pb-5">
      <PureComponentsExample />
      <SkippingUnnecessaryReRenders />
    </div>
  );
};

export default PureComponents;
