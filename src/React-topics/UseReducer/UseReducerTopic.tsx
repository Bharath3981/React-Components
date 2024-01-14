import GettingPreviousState from "../useStateTopic/GettingPreviousState/GettingPreviousState";
import DispatchFunction from "./DispatchFunction/DispatchFunction";
import PassingInitialState from "./PassingInitialState/PassingInitialState";
import PassingInitializerFunction from "./PassingInitializerFunction/PassingInitializerFunction";
import UseReducerExample from "./UseReducerExample/UseReducerExample";

const UseReducerTopic = () => {
  return (
    <div className="pb-5">
      <h1 className="main-title">UseReducer</h1>
      <p className="description">
        <code>useReducer</code> is a React Hook that lets you add a reducer to
        your component.
      </p>
      <UseReducerExample />
      <DispatchFunction />
      <GettingPreviousState />
      <PassingInitialState />
      <PassingInitializerFunction />
    </div>
  );
};

export default UseReducerTopic;
