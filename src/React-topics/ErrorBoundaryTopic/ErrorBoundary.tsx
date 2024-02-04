import { useState, useEffect } from "react";

function ErrorBoundary({ fallback, children }: any) {
  const [hasError] = useState(true);
  console.log(fallback, children);
  useEffect(() => {
    if (hasError) {
      // Log the error or send it to an error tracking service
      //console.error("Error occurred within the ErrorBoundary");
    }
  }, [hasError]);

  if (hasError) {
    return fallback;
  }

  return children;
}

export default ErrorBoundary;
