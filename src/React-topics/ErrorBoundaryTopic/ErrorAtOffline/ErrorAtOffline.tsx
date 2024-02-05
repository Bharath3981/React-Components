import useOnlineStatus from "../../../hooks/useOnlineStatus";
import ErrorBoundary from "../ErrorBoundary";
//import FallBackScreen from "./FallBackScreen";

const ErrorAtOffline = () => {
  const isOnline = useOnlineStatus();
  console.log(isOnline);
  if (!isOnline) {
    throw new Error("You are offline.");
  }
  return (
    <div>
      <div className="sub-title">Throw error when offline</div>
      <ErrorBoundary>
        <div>Online: {isOnline ? <span>✅</span> : <span>❌</span>}</div>
      </ErrorBoundary>
    </div>
  );
};

export default ErrorAtOffline;
