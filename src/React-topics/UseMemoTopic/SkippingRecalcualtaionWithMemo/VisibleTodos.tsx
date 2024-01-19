import { memo } from "react";

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

const arePropsEqual = function (old: any, newProp: any) {
  console.log(old, newProp);
  return false;
};

const VisibleTodos = memo(({ todoStatus }: any) => {
  const visibleTodos = generateTodos(todoStatus);
  return (
    <div>
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
  );
}, arePropsEqual);

export default VisibleTodos;
