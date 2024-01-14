import { useReducer } from "react";
import CodeSnippet from "../../../util/CodeSnippet";
import InfoBlock from "../../../util/InfoBlock";

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increaseAge":
      return {
        age: state.age + 1,
        name: state.name,
      };
      break;
    case "decreaseAge":
      return {
        age: state.age - 1,
        name: state.name,
      };
      break;
    case "updateName":
      return {
        age: state.age,
        name: action.name,
      };
      break;
  }
}

const UseReducerExample = () => {
  const [state, dispatch]: any = useReducer(reducer, {
    age: 5,
    name: "Bharath Baisetty",
  });
  return (
    <div>
      <h1 className="sub-title">useReducer example:</h1>
      <div>
        Age: {state.age}{" "}
        <button onClick={() => dispatch({ type: "increaseAge" })}>++</button>{" "}
        <button onClick={() => dispatch({ type: "decreaseAge" })}>--</button>{" "}
      </div>
      <div>
        Name: {state.name}{" "}
        <input
          type="text"
          onChange={(e) =>
            dispatch({ type: "updateName", name: e.target.value })
          }
        />
      </div>
      <CodeSnippet>{`import { useReducer } from 'react';

      function reducer(state, action) {
        // ...
      }
      
      function MyComponent() {
        const [state, dispatch] = useReducer(reducer, { age: 42 });
        // ...`}</CodeSnippet>
      <div className="pt-2">
        <p className="description">
          <code>
            <b>reducer:</b>
          </code>{" "}
          The reducer function that specifies how the state gets updated. It
          must be pure, should take the state and action as arguments, and
          should return the next state. State and action can be of any types.
        </p>
        <p className="description">
          <code>
            <b>initialArg:</b>
          </code>{" "}
          The value from which the initial state is calculated. It can be a
          value of any type. How the initial state is calculated from it depends
          on the next init argument.
        </p>
        <p className="description">
          <code>
            <b>init?:</b>
          </code>{" "}
          The initializer function that should return the initial state. If it’s
          not specified, the initial state is set to initialArg. Otherwise, the
          initial state is set to the result of calling init(initialArg).
        </p>
      </div>
      <div>
        <InfoBlock>
          <p className="description">
            useReducer is a Hook, so you can only call it at the top level of
            your component or your own Hooks. You can’t call it inside loops or
            conditions. If you need that, extract a new component and move the
            state into it.
          </p>
        </InfoBlock>
      </div>
    </div>
  );
};

export default UseReducerExample;
