import { useReducer } from "react";

function reducer(state: any, action: any) {
  switch (action) {
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
        name: state.name,
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
    </div>
  );
};

export default UseReducerTopic;
