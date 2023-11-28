import { useRef, useState } from "react";

const RefToCustomComponents = () => {
  const [value, setValue] = useState(0);
  function onChangeEvent(e: any) {}
  return (
    <div className="pb-5">
      <h1 className="sub-title">I can’t get a ref to a custom component </h1>
      <MyInput value={value} onChange={onChangeEvent} />
    </div>
  );
};

type MyInputType = {
  value: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

function MyInput({ value, onChange }: MyInputType) {
  return <input value={value} onChange={onChange} />;
}

export default RefToCustomComponents;
