import CodeSnippet from "../../util/CodeSnippet";

const UseStateTopic = () => {
  const code = `const ExampleComponent = () => {
  // Declare a state variable named "count" with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>
    </div>
  );
};

export default ExampleComponent;
  `;
  return (
    <div>
      useStateTopic
      <CodeSnippet code={code}></CodeSnippet>
    </div>
  );
};

export default UseStateTopic;
