import { useState } from "react";
import InfoBlock from "../../../util/InfoBlock";

const ObjectUpdateExample = () => {
  const [obj, setObj] = useState({
    name: "Bharath",
    place: "Anakapalli",
  });
  return (
    <div className="pb-5">
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
      <InfoBlock infoType="info">
        <p className="description">
          {`Here, (array) => [...array, array.length + 1] is your updater function. It takes the pending state and calculates the next state from it.`}
        </p>
      </InfoBlock>
    </div>
  );
};

export default ObjectUpdateExample;
