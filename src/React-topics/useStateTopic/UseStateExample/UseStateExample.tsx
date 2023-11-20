import CodeSnippet from "../../../util/CodeSnippet";
import InfoBlock from "../../../util/InfoBlock";

const UseStateExample = () => {
  return (
    <div className="pb-5">
      <h1 className="main-title">useState</h1>
      <p className="description">
        In React, useState is a function that allows you to add state to
        functional components. <b>useState</b> returns an array with two
        elements.
      </p>
      <CodeSnippet>{`const [state, setState] = useState(initialState);`}</CodeSnippet>
      <p className="description">
        Here's a breakdown of the parameters and the return values:
      </p>
      <p className="description">
        <ul>
          <li>
            <b>initialState</b>: This is the initial value of the state.
          </li>
          <li>
            <b>state</b>: This is the current state value.
          </li>
          <li>
            <b>setState</b>: This is the function used to update the state. It
            can be called with a new value, and when it's called, the component
            re-renders with the new state.
          </li>
        </ul>
      </p>

      <InfoBlock infoType="info">
        <p className="description">
          Keep in mind that the <b>setState</b> function in React is
          asynchronous.
        </p>
      </InfoBlock>
      <InfoBlock>
        <p className="description">
          When we remove any component from the DOM and it will reset all state
          variable of the compoent like below coe
        </p>
      </InfoBlock>
      <CodeSnippet>
        {`<div>
    {showB && <Counter />}
</div>`}
      </CodeSnippet>
    </div>
  );
};

export default UseStateExample;
