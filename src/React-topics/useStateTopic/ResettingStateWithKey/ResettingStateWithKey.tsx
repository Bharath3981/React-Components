import { useState } from "react";
import InfoBlock from "../../../util/InfoBlock";

const ResettingStateWithKey = () => {
  const [version, setVersion] = useState(0);

  function handleReset() {
    setVersion(version + 1);
  }
  return (
    <div className="pb-5">
      <h1 className="sub-title">Resetting state with a key:</h1>
      <p className="description">
        You’ll often encounter the key attribute when rendering lists. However,
        it also serves another purpose.
      </p>
      <p className="description">
        You can reset component's state by passing different key.
      </p>
      <InfoBlock>
        <p className="description">
          React uses keys to reconcile the components efficiently when the data
          changes. Without keys, React might re-render the entire list instead
          of updating only the changed items.
        </p>
      </InfoBlock>
      <button onClick={handleReset}>Reset</button> <br />
      <Child key={version} />
    </div>
  );
};

type Props = {
  test?: number;
  key?: number;
};

function Child({}: Props) {
  const [name, setName] = useState("Bharath");

  return (
    <>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>Hello, {name}.</p>
    </>
  );
}

export default ResettingStateWithKey;
