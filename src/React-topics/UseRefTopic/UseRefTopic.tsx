import CodeSnippet from "../../util/CodeSnippet";
import InfoBlock from "../../util/InfoBlock";
import AvoidRecreatingRefContent from "./AvoidRecreatingRefContent/AvoidRecreatingRefContent";
import ManipulatingDOMWithRef from "./ManipulatingDOMWithRef/ManipulatingDOMWithRef";
import RefToCustomComponents from "./RefToCustomComponents/RefToCustomComponents";
import UserRefExample from "./UserRefExample/UserRefExample";
import RefCurrentUpdate from "./RefCurrentUpdate/RefCurrentUpdate";

const UseRefTopic = () => {
  return (
    <div className="pb-5">
      <h1 className="main-title">useRef</h1>
      <p className="description">
        <code>useRef</code> is a React Hook that lets you reference a value
        that’s not needed for rendering.
      </p>
      <CodeSnippet>{`const ref = useRef(initialValue)`}</CodeSnippet>
      <InfoBlock>
        <p className="description">
          Call <code>useRef</code> at the top level of your component to declare
          a ref.
        </p>
      </InfoBlock>
      <InfoBlock>
        <p className="description">
          When you change the ref.current property, React does not re-render
          your component. React is not aware of when you change it because a ref
          is a plain JavaScript object.
        </p>
      </InfoBlock>
      <UserRefExample />
      <RefCurrentUpdate />
      <ManipulatingDOMWithRef />
      <AvoidRecreatingRefContent />
      <RefToCustomComponents />
    </div>
  );
};

export default UseRefTopic;
