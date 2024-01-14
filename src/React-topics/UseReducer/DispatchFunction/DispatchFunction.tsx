import CodeSnippet from "../../../util/CodeSnippet";
import InfoBlock from "../../../util/InfoBlock";

const DispatchFunction = () => {
  return (
    <div>
      <h1 className="sub-title">Dispatch function:</h1>
      <p className="description">
        The dispatch function returned by useReducer lets you update the state
        to a different value and trigger a re-render. You need to pass the
        action as the only argument to the dispatch function:
      </p>
      <CodeSnippet>{`const [state, dispatch] = useReducer(reducer, { age: 42 });

function handleClick() {
  dispatch({ type: 'incremented_age' });`}</CodeSnippet>
      <p className="description">
        React will set the next state to the result of calling the reducer
        function you’ve provided with the current state and the action you’ve
        passed to dispatch.
      </p>
      <InfoBlock>
        <p className="description">
          The dispatch function only updates the state variable for the next
          render. If you read the state variable after calling the dispatch
          function, you will still get the old value that was on the screen
          before your call.
        </p>
      </InfoBlock>
    </div>
  );
};

export default DispatchFunction;
