import { ErrorBoundary } from "react-error-boundary";
import fallbackScreen from "./fallbackScreen";
import useOnlineStatus from "../../../hooks/useOnlineStatus";

const ErrorAtOffline = () => {
  const isOnline = useOnlineStatus();
  return (
    <div>
      <div className="sub-title">Throw error when offline</div>
      <ErrorBoundary fallback={<p>⚠️Something went wrong</p>}>
        <div>Online: {isOnline}</div>
      </ErrorBoundary>
    </div>
  );
};

export default ErrorAtOffline;
