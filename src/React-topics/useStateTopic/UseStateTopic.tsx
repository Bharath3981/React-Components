import { useState } from "react";
import CodeSnippet from "../../util/CodeSnippet";
import InfoBlock from "../../util/InfoBlock";

const UseStateTopic = () => {
  const [name, setName] = useState("");
  const [previousName, setPreviousName] = useState("");

  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const [obj, setObj] = useState({
    name: "Bharath",
    place: "Anakapalli",
  });
  return (
    <div>
      <h1 className="main-title">useState</h1>
      <p className="description">
        In React, useState is a function that allows you to add state to
        functional components. <b>useState</b> returns an array with two
        elements.
      </p>
      <CodeSnippet>{`const [state, setState] = useState(initialState);`}</CodeSnippet>
      <p className="description">
        Here's a breakdown of the parameters and the return values:
        <ul>
          <li>
            <b>initialState</b>: This is the initial value of the state.
          </li>
          <li>
            <b>state</b>: This is the current state value.
          </li>
          <li>
            <b>setState</b>: This is the function used to update the state. It
            can be called with a new value, and when it's called, the component
            re-renders with the new state.
          </li>
        </ul>
      </p>
      <InfoBlock infoType="info">
        <p>ome info</p>
      </InfoBlock>
      <h1 className="sub-title">Example previous value:</h1>
      <div className="flex">
        <label>Name: </label>
        <input
          type="text"
          onChange={(event: any) => {
            setName((name) => {
              setPreviousName((val) => name);
              return event.target.value;
            });
          }}
        />
      </div>
      <div>Current Value: {name}</div>
      <div>Previous Value: {previousName}</div>
      <h1 className="sub-title">Example array update:</h1>
      <CodeSnippet>{`<button
          onClick={() => {
            setArray((array) => [...array, array.length + 1]);
          }}>Update Array</button>`}</CodeSnippet>
      <div className="flex">
        <span>Current Array: </span>
        <span className="px-2">{JSON.stringify(array)}</span>
        <button
          onClick={() => {
            setArray((array) => [...array, array.length + 1]);
          }}
        >
          Update Array
        </button>
      </div>
      <h1 className="sub-title">Example object update:</h1>
      <div className="flex">
        <span>Current Array: </span>
        <span className="px-2">{JSON.stringify(obj)}</span>
        <button
          onClick={() => {
            setObj((obj) => {
              return { ...obj, place: "Visakhaptnam" };
            });
          }}
        >
          Update Object
        </button>
      </div>
    </div>
  );
};

export default UseStateTopic;
