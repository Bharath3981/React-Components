import React, { memo } from "react";

const PrintTodos = memo(({ todos }: any) => {
  return (
    <div>
      <button onClick={todos}>Print todos</button>
      {todos().map((todo: any) => (
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
});

export default PrintTodos;
