import { useReducer } from "react";
import CodeSnippet from "../../util/CodeSnippet";

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
      console.log(state, action);
      return {
        age: state.age,
        name: action.name,
      };
      break;
  }
}

const UseReducerTopic = () => {
  const [state, dispatch] = useReducer(reducer, {
    age: 5,
    name: "Bharath Baisetty",
  });
  return (
    <div className="pb-5">
      <h1 className="main-title">UseReducer</h1>
      <p className="description">
        <code>useReducer</code> is a React Hook that lets you add a reducer to
        your component.
      </p>
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
      </div>
    </div>
  );
};

export default UseReducerTopic;
