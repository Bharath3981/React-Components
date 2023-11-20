import { useState } from "react";

function createInitialTodos() {
  console.log("Initial function called");
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: "Item " + (i + 1),
    });
  }
  return initialTodos;
}
const AvoidingRecreatingTheInitialState = () => {
  const [todos, setTodos] = useState(createInitialTodos);
  const [text, setText] = useState("");
  return (
    <div className="pb-5">
      <h1 className="sub-title">Avoiding recreating the initial state:</h1>
      <h1 className="text-xl font-bold">Passing the initializer function</h1>
      <p className="description">
        This example passes the initializer function, so the createInitialTodos
        function only runs during initialization. It does not run when component
        re-renders, such as when you type into the input.
      </p>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button
        onClick={() => {
          setText("");
          setTodos([
            {
              id: todos.length,
              text: text,
            },
            ...todos,
          ]);
        }}
      >
        Add
      </button>
      <ul className="h-60 overflow-auto">
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <h1 className="text-xl font-bold">Passing the initial state directly</h1>
      <p className="description">
        This example does not pass the initializer function, so the
        createInitialTodos function runs on every render, such as when you type
        into the input. There is no observable difference in behavior, but this
        code is less efficient.
      </p>
    </div>
  );
};

export default AvoidingRecreatingTheInitialState;
