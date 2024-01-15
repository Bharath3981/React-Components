import { memo, useState } from "react";

const Greeting = memo(function Greeting({ name }: any) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return (
    <h3>
      Hello{name && ", "}
      {name}!
    </h3>
  );
});

const SkippingUnnecessaryReRenders = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  return (
    <div>
      <h1 className="sub-title">
        Skipping unnecessary re-renders for components
      </h1>
      <p className="description">
        React normally re-renders a component whenever its parent re-renders. As
        an optimization, you can create a component that React will not
        re-render when its parent re-renders so long as its new props and state
        are the same as the old props and state.
      </p>
      <label>
        Name{": "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Address{": "}
        <input value={address} onChange={(e) => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </div>
  );
};

export default SkippingUnnecessaryReRenders;
