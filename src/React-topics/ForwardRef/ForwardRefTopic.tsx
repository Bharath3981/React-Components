import ForwardRefAcceptsRender from "./ForwardRefAcceptsRender/ForwardRefAcceptsRender";

const ForwardRefTopic = () => {
  return (
    <div className="pb-5">
      <h1 className="main-title">ForwardRef</h1>
      <p className="description">
        <code>forwardRef</code> lets your component expose a DOM node to parent
        component with a ref.
      </p>
      <ForwardRefAcceptsRender />
    </div>
  );
};

export default ForwardRefTopic;
