import { useState, useEffect } from "react";

const PrintTodos = ({ todos1 }: any) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setTodos(todos1());
  }, [todos1]);
  return (
    <div>
      <button
        onClick={() => {
          console.log(todos1());
        }}
      >
        Print todos
      </button>
      {todos.map((todo: any) => (
        <li key={todo.id}>
          {todo.status === "active" ? (
            <span>{todo.text}</span>
          ) : (
            <span className="line-through">{todo.text}</span>
          )}
        </li>
      ))}
    </div>
  );
};

export default PrintTodos;
