import { useRef, useState } from "react";
import CodeSnippet from "../../../util/CodeSnippet";

const UserRefExample = () => {
  const useRefValue = useRef(5);
  const [value, setValue] = useState<any>(0);
  return (
    <div className="pb-5">
      <h1 className="sub-title">useRef example:</h1>
      UserRefExample
      <div>UseRef value: {useRefValue.current}</div>
      <div>
        UsetState Value:{" "}
        <input type="text" onChange={(e) => setValue(e.target.value)} /> {value}
      </div>
      <CodeSnippet>
        {`const useRefValue = useRef(5);
  const [value, setValue] = useState<any>(0);
  return (
    <div>
      UserRefExample
      <div>UseRef value: {useRefValue.current}</div>
      <div>
        UsetState Value:{" "}
        <input type="text" onChange={(e) => setValue(e.target.value)} /> {value}
      </div>
    </div>
  );`}
      </CodeSnippet>
    </div>
  );
};

export default UserRefExample;
