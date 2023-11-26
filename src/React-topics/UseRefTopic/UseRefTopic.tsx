import { PiInfoFill } from "react-icons/pi";
import CodeSnippet from "../../util/CodeSnippet";
import InfoBlock from "../../util/InfoBlock";

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
          a
        </p>
      </InfoBlock>
    </div>
  );
};

export default UseRefTopic;
