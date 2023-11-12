import { useState } from "react";
import CodeSnippet from "../../../util/CodeSnippet";

const ArrayUpdateExample = () => {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  return (
    <div className="pb-5">
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
    </div>
  );
};

export default ArrayUpdateExample;
