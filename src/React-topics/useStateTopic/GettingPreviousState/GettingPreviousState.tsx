import { useState } from "react";
import CodeSnippet from "../../../util/CodeSnippet";

const GettingPreviousState = () => {
  const [value, setValue] = useState(5);
  const updateValue = () => {
    setValue((v) => v + 1);
  };

  return (
    <div className="pb-5">
      <h1 className="sub-title">Getting Previous state example:</h1>
      <span>Value: {value}</span>{" "}
      <button onClick={() => updateValue()}>Update</button>
      <div>
        <p className="description">
          Calling the dispatch function does not change state in the running
          code:
        </p>
        <CodeSnippet>{`function handleClick() {
  console.log(state.age);  // 42

  dispatch({ type: 'incremented_age' }); // Request a re-render with 43
  console.log(state.age);  // Still 42!

  setTimeout(() => {
    console.log(state.age); // Also 42!
  }, 5000);
}`}</CodeSnippet>
        <p className="description">
          This is because{" "}
          <a
            className="link"
            href="https://react.dev/learn/state-as-a-snapshot"
            target="_blank"
          >
            states behaves like a snapshot.
          </a>
          Updating state requests another render with the new state value, but
          does not affect the state JavaScript variable in your already-running
          event handler.
        </p>
        <p className="description">
          If you need to guess the next state value, you can calculate it
          manually by calling the reducer yourself:
        </p>
        <CodeSnippet>{`const action = { type: 'incremented_age' };
dispatch(action);

const nextState = reducer(state, action);
console.log(state);     // { age: 42 }
console.log(nextState); // { age: 43 }`}</CodeSnippet>
      </div>
    </div>
  );
};

export default GettingPreviousState;
