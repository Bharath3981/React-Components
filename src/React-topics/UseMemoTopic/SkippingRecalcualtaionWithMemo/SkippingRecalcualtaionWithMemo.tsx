import { useState } from "react";
import VisibleTodos from "./VisibleTodos";

export default function SkippingRecalcualtaionWithMemo() {
  const [todoStatus, setTodoStatus] = useState("active");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="pt-3">
      <h1 className="sub-title">
        Skipping recalculation with <code>Memo</code>
      </h1>
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
          <VisibleTodos todoStatus={todoStatus} />
        </div>
      </div>
    </div>
  );
}
