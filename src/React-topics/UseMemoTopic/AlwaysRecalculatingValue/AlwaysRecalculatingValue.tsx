import { useState } from "react";

const generateTodos = (todoStatus: string) => {
  const startTime: number = performance.now();
  while (performance.now() - startTime < 500) {
    // Do nothing for 500 ms to emulate extremely slow code
  }
  const todos = [];
  for (let i = 0; i < 50; i++) {
    todos.push({
      id: i,
      text: "Todo " + (i + 1),
      status: todoStatus,
    });
  }
  return todos;
};

export default function AlwaysRecalculatingValue() {
  const [todoStatus, setTodoStatus] = useState("active");
  const [darkMode, setDarkMode] = useState(false);
  const visibleTodos = generateTodos(todoStatus);

  return (
    <div className="pt-3">
      <h1 className="sub-title">Always recalculating a value</h1>
      <div className="pb-2">
        <button onClick={() => setTodoStatus("active")}>Active</button>{" "}
        <button onClick={() => setTodoStatus("completed")}>Completed</button>
      </div>
      <div>
        <input type="checkbox" onChange={() => setDarkMode((val) => !val)} />{" "}
        Dark mode
      </div>
      <div className={darkMode ? "bg-slate-800 text-white" : ""}>
        <div className="p-2">
          {visibleTodos.map((todo: any) => (
            <li key={todo.id}>
              {todo.status === "active" ? (
                <span>{todo.text}</span>
              ) : (
                <span className="line-through">{todo.text}</span>
              )}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
