import React, { useState, useRef, forwardRef } from "react";

const RefToCustomComponents = () => {
  const [value, setValue] = useState<string>("Test");
  const inputRef = useRef(null);
  function onChangeEvent(e: React.ChangeEvent<HTMLElement>) {
    setValue((e.target as HTMLInputElement).value);
  }
  return (
    <div className="pb-5">
      <h1 className="sub-title">I can’t get a ref to a custom component</h1>
      <MyInput value={value} ref={inputRef} onChange={onChangeEvent} />
    </div>
  );
};

type MyInputType = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const MyInput = forwardRef(({ value, onChange }: MyInputType, ref) => {
  return <input value={value} onChange={onChange} ref={ref} />;
});

export default RefToCustomComponents;
