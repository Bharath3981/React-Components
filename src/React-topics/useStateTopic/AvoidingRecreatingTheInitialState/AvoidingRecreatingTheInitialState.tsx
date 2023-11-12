const AvoidingRecreatingTheInitialState = () => {
  return (
    <div className="pb-5">
      <h1 className="sub-title">Avoiding recreating the initial state:</h1>
      <h1 className="text-xl font-bold">Passing the initializer function</h1>
      <p>
        This example passes the initializer function, so the createInitialTodos
        function only runs during initialization. It does not run when component
        re-renders, such as when you type into the input.
      </p>
      <h1 className="text-xl font-bold">Passing the initial state directly</h1>
      <p>
        This example does not pass the initializer function, so the
        createInitialTodos function runs on every render, such as when you type
        into the input. There is no observable difference in behavior, but this
        code is less efficient.
      </p>
    </div>
  );
};

export default AvoidingRecreatingTheInitialState;
