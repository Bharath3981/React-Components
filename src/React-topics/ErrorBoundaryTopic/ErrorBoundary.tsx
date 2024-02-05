import { useState, useEffect } from "react";
import InfoBlock from "../../util/InfoBlock";

function ErrorBoundary({ children }: any) {
  const [hasError] = useState(true);
  console.log(children);
  useEffect(() => {
    if (hasError) {
      // Log the error or send it to an error tracking service
      //console.error("Error occurred within the ErrorBoundary");
    }
  }, [hasError]);

  if (hasError) {
    return (
      <div>
        <InfoBlock infoType="error">
          <p>Your Cable disconnecte 😩</p>
        </InfoBlock>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
