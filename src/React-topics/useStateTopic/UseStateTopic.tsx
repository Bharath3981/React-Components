import { useEffect } from "react";
import UseStateExample from "./UseStateExample/UseStateExample";
import PreviousValueExample from "./PreviousValueExample/PreviousValueExample";
import ArrayUpdateExample from "./ArrayUpdateExample/ArrayUpdateExample";
import ObjectUpdateExample from "./ObjectUpdateExample/ObjectUpdateExample";
import AvoidingRecreatingTheInitialState from "./AvoidingRecreatingTheInitialState/AvoidingRecreatingTheInitialState";
import ResettingStateWithKey from "./ResettingStateWithKey/ResettingStateWithKey";
import ChoosingTheStateStructure from "./ChoosingTheStateStructure/ChoosingTheStateStructure";
import GettingPreviousState from "./GettingPreviousState/GettingPreviousState";

const UseStateTopic = () => {
  //This will hilight the first sidebar menu of every page
  useEffect(() => {
    const firstMenu: HTMLAnchorElement | any =
      document.querySelector("#subMenu a");
    firstMenu.className = "nav-sub-menu active";
    console.log(firstMenu);
    return () => {
      firstMenu.className = "nav-sub-menu";
    };
  }, []);
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
