import InfoBlock from "../../../util/InfoBlock";
import CodeSnippet from "../../../util/CodeSnippet";

const PureComponentsExample = () => {
  return (
    <div>
      <h1 className="main-title">Pure Componensts</h1>
      <p className="description">
        <code>PureComponent</code> is similar to Component but it skips
        re-renders for same props and state. Class components are still
        supported by React, but we don’t recommend using them in new code.
      </p>
      <h1 className="sub-title">Class component example:</h1>
      <CodeSnippet>{`class Greeting extends PureComponent {
render() {
  return <h1>Hello, {this.props.name}!</h1>;
}
}`}</CodeSnippet>
      <InfoBlock>
        <p className="description">
          To skip re-rendering a class component for same props and state,
          extend PureComponent instead of Component
        </p>
      </InfoBlock>
    </div>
  );
};

export default PureComponentsExample;
