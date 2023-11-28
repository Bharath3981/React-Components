import InfoBlock from "../../../util/InfoBlock";
import { useRef, useState } from "react";
import CodeSnippet from "../../../util/CodeSnippet";

const RefCurrentUpdate = () => {
  const refValue = useRef(0);
  const [stateValue, setStateValue] = useState(0);
  return (
    <div className="pb-5">
      <h1 className="sub-title">Updating useRef.current:</h1>
      <InfoBlock infoType="warning">
        <p className="description">
          Do not write or read ref.current during rendering. If you have to read
          or write something during rendering, use state instead.
        </p>
      </InfoBlock>
      <div>
        Ref value:{" "}
        <input
          type="text"
          onChange={(e) => {
            refValue.current = e.target.value;
          }}
        />{" "}
        {refValue.current}
      </div>
      <div>
        State value:{" "}
        <input type="text" onChange={(e) => setStateValue(e.target.value)} />{" "}
        {stateValue}
      </div>
      <InfoBlock infoType="warning">
        <p className="description">
          React expects that the body of your component behaves like a pure
          function: If the inputs (props, state, and context) are the same, it
          should return exactly the same JSX.
        </p>
      </InfoBlock>
      <CodeSnippet>
        {`function MyComponent() {
  // ...
  useEffect(() => {
    // ✅ You can read or write refs in effects
    myRef.current = 123;
  });
  // ...
  function handleClick() {
    // ✅ You can read or write refs in event handlers
    doSomething(myOtherRef.current);
  }
  // ...
}`}
      </CodeSnippet>
    </div>
  );
};

export default RefCurrentUpdate;
