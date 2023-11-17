import CodeSnippet from "../../util/CodeSnippet";
import InfoBlock from "../../util/InfoBlock";

const UseEffectTopic = () => {
  return (
    <div className="pb-5">
      <h1 className="main-title">useEffect</h1>
      <p className="description">
        In React, useEffect is a function that allows you to side effects in
        function components. Side effects can include data fetching,
        subscriptions, manually changing the DOM, or other operations.
      </p>
      <CodeSnippet>{`useEffect(() => {
    // Your code for side effects goes here
    // It will run after every render
    // You can also return a cleanup function
    return () => {
      // Cleanup code here
    };
  }, []); // Dependency array (optional)`}</CodeSnippet>
      <InfoBlock>
        <p className="description">
          <code>useEffect</code> is a Hook,{" "}
          <b>so you can only call it at the top level of your component</b>
        </p>
      </InfoBlock>
      <InfoBlock>
        <p className="description">
          If you’re not trying to synchronize with some external system,{" "}
          <b>you probably don’t need an Effect.</b>
        </p>
      </InfoBlock>
      <InfoBlock>
        <p className="description">
          If some of your dependencies are objects or functions defined inside
          the component, there is a risk that they will{" "}
          <b>cause the Effect to re-run more often than needed.</b>
        </p>
      </InfoBlock>
      <InfoBlock>
        <p className="description">
          If your Effect is doing something visual (for example, positioning a
          tooltip), and the delay is noticeable (for example, it flickers),
          replace useEffect with <b>useLayoutEffect</b>.
        </p>
      </InfoBlock>
    </div>
  );
};

export default UseEffectTopic;
