import ErrorAtOffline from "./ErrorAtOffline/ErrorAtOffline";

const ErrorBoundaryTopic = () => {
  return (
    <div>
      <div className="main-title">Error Boundary</div>
      <p className="description">
        Error boundaries are React components that catch JavaScript errors
        anywhere in their child component tree, log those errors, and display a
        fallback UI instead of the component tree that crashed. Error boundaries
        catch errors during rendering, in lifecycle methods, and in constructors
        of the whole tree
      </p>
      <ErrorAtOffline />
    </div>
  );
};

export default ErrorBoundaryTopic;
