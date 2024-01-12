import UseStateExample from "./UseStateExample/UseStateExample";
import PreviousValueExample from "./PreviousValueExample/PreviousValueExample";
import ArrayUpdateExample from "./ArrayUpdateExample/ArrayUpdateExample";
import ObjectUpdateExample from "./ObjectUpdateExample/ObjectUpdateExample";
import AvoidingRecreatingTheInitialState from "./AvoidingRecreatingTheInitialState/AvoidingRecreatingTheInitialState";
import ResettingStateWithKey from "./ResettingStateWithKey/ResettingStateWithKey";
import ChoosingTheStateStructure from "./ChoosingTheStateStructure/ChoosingTheStateStructure";
import GettingPreviousState from "./GettingPreviousState/GettingPreviousState";

const UseStateTopic = () => {
  return (
    <div>
      <UseStateExample />
      <GettingPreviousState />
      <PreviousValueExample />
      <ArrayUpdateExample />
      <ObjectUpdateExample />
      <AvoidingRecreatingTheInitialState />
      <ResettingStateWithKey />
      <ChoosingTheStateStructure />
    </div>
  );
};

export default UseStateTopic;
