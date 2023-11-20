import CodeSnippet from "../../../util/CodeSnippet";
import InfoBlock from "../../../util/InfoBlock";

const RemoveUnnecessaryObject = () => {
  return (
    <div>
      <h1 className="sub-title">
        Removing unnecessary objects and function dependencies
      </h1>
      <InfoBlock>
        <p className="description">
          If some of your dependencies are objects or functions defined inside
          the component, there is a risk that they will{" "}
          <b>cause the Effect to re-run more often than needed.</b>
        </p>
      </InfoBlock>
      <CodeSnippet>{`const serverUrl = 'https://localhost:1234';
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');
  const options = { // 🚩 This object is created from scratch on every re-render
    serverUrl: serverUrl,
    roomId: roomId
  };
  function createOptions() { // 🚩 This function is created from scratch on every re-render
    return {
      serverUrl: serverUrl,
      roomId: roomId
    };
  }
  useEffect(() => {
    const connection = createConnection(options); // It's used inside the Effect
    connection.connect();
    return () => connection.disconnect();
  }, [options, createOptions]); // 🚩 As a result, these dependencies are always different on a re-render`}</CodeSnippet>
      <p className="description">
        Avoid using an object created during rendering as a dependency. Instead,
        create the object inside the Effect like below code.
      </p>
      <CodeSnippet>
        {`useEffect(() => {
          function createOptions() {
            return {
              serverUrl: serverUrl,
              roomId: roomId
            };
          }
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, createOptions]);`}
      </CodeSnippet>
    </div>
  );
};

export default RemoveUnnecessaryObject;
