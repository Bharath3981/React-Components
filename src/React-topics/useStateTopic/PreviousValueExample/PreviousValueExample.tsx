import { useState } from "react";

const PreviousValueExample = () => {
  const [name, setName] = useState("");
  const [previousName, setPreviousName] = useState("");
  return (
    <div className="pb-5">
      <h1 className="sub-title">Example previous value:</h1>
      <div className="flex">
        <label>Name: </label>
        <input
          type="text"
          onChange={(event) => {
            setName((name) => {
              setPreviousName(name);
              return event.target.value;
            });
          }}
        />
      </div>
      <div>Current Value: {name}</div>
      <div>Previous Value: {previousName}</div>
    </div>
  );
};

export default PreviousValueExample;
