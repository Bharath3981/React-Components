import { useReducer } from "react";

function createInitialState(username: string) {
  const initialTodos = [];
  for (let i = 0; i < 50; i++) {
    initialTodos.push({
      id: i,
      text: username + "'s task #" + (i + 1),
    });
  }
  return {
    draft: "",
    todos: initialTodos,
  };
}

function reducer(state: any, action: any) {
  switch (action.type) {
    case "changed_draft": {
      return {
        draft: action.nextDraft,
        todos: state.todos,
      };
    }
    case "added_todo": {
      return {
        draft: "",
        todos: [
          {
            id: state.todos.length,
            text: state.draft,
          },
          ...state.todos,
        ],
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const PassingInitializerFunction = () => {
  const [state, dispatch] = useReducer(reducer, "Bharath", createInitialState);
  return (
    <div className="pb-5">
      <h1 className="sub-title">Passing the initializer function</h1>
      <input
        value={state.draft}
        onChange={(e) => {
          dispatch({
            type: "changed_draft",
            nextDraft: e.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          dispatch({ type: "added_todo" });
        }}
      >
        Add
      </button>
      <ul>
        {state.todos.map((item: any) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PassingInitializerFunction;
