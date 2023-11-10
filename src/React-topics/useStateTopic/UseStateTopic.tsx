import CodeSnippet from "../../util/CodeSnippet";
import InfoBlock from "../../util/InfoBlock";

const UseStateTopic = () => {
  return (
    <div>
      <h1 className="main-title">useState</h1>
      <p className="description">
        In React, useState is a function that allows you to add state to
        functional components. <b>useState</b> returns an array with two
        elements.
      </p>
      <CodeSnippet>{`const [state, setState] = useState(initialState);`}</CodeSnippet>
      <p className="description">
        Here's a breakdown of the parameters and the return values:
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
        <p>ome info</p>
      </InfoBlock>
    </div>
  );
};

export default UseStateTopic;
