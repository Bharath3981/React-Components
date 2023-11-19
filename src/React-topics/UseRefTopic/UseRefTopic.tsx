import CodeSnippet from "../../util/CodeSnippet";

const UseRefTopic = () => {
  return (
    <div className="pb-5">
      <h1 className="main-title">useRef</h1>
      <p className="description">
        <code>useRef</code> is a React Hook that lets you reference a value
        that’s not needed for rendering.
      </p>
      <CodeSnippet>{`const ref = useRef(initialValue)`}</CodeSnippet>
    </div>
  );
};

export default UseRefTopic;
