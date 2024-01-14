import { useRef } from "react";
const ManipulatingDOMWithRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }
  return (
    <div className="pb-5">
      <h1 className="sub-title">Manipulating the DOM with a ref</h1>
      <p className="description">
        It’s particularly common to use a ref to manipulate the DOM. React has
        built-in support for this.
      </p>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </div>
  );
};

export default ManipulatingDOMWithRef;
