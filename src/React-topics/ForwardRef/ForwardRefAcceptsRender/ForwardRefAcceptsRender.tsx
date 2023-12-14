import { forwardRef } from "react";
import CodeSnippet from "../../../util/CodeSnippet";

const ForwardRefAcceptsRender = () => {
  return (
    <div>
      <h1 className="sub-title">
        <code>forwardRef(render)</code>
        <MyInput />
      </h1>
      <CodeSnippet>{`const MyInput = forwardRef(function MyInput(props, ref) {
  console.log(props, ref);
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
});`}</CodeSnippet>
      <p className="description">
        <code>props:</code> The props passed by the parent component.
      </p>
      <p className="description">
        <code>ref:</code> The <code>ref</code> attribute passed by the parent
        component. The ref can be an object or a function. If the parent
        component has not passed a <code>ref</code>, it will be null. You should
        either pass the <code>ref</code> you receive to another component, or
        pass it to <code>useImperativeHandle</code>.
      </p>
    </div>
  );
};

const MyInput = forwardRef(function MyInput(props, ref) {
  console.log(props, ref);
  return (
    <label>
      {props.label}
      <input ref={ref} />
    </label>
  );
});

export default ForwardRefAcceptsRender;
