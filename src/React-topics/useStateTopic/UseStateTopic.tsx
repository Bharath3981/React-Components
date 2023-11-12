import UseStateExample from "./UseStateExample/UseStateExample";
import PreviousValueExample from "./PreviousValueExample/PreviousValueExample";
import ArrayUpdateExample from "./ArrayUpdateExample/ArrayUpdateExample";
import ObjectUpdateExample from "./ObjectUpdateExample/ObjectUpdateExample";
import AvoidingRecreatingTheInitialState from "./AvoidingRecreatingTheInitialState/AvoidingRecreatingTheInitialState";

const UseStateTopic = () => {
  return (
    <div>
      <UseStateExample />
      <PreviousValueExample />
      <ArrayUpdateExample />
      <ObjectUpdateExample />
      <AvoidingRecreatingTheInitialState />
    </div>
  );
};

export default UseStateTopic;
