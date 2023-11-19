import CodeSnippet from "../../../util/CodeSnippet";
import InfoBlock from "../../../util/InfoBlock";

const RemoveUnnecessaryObject = () => {
  return (
    <div>
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
  useEffect(() => {
    const connection = createConnection(options); // It's used inside the Effect
    connection.connect();
    return () => connection.disconnect();
  }, [options]); // 🚩 As a result, these dependencies are always different on a re-render`}</CodeSnippet>
    </div>
  );
};

export default RemoveUnnecessaryObject;
