import HOC from "./HOC";

const TodoList = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      {data.map((todo: any) => {
        return (
          <div key={todo.id}>
            <span>{todo.title}</span>
          </div>
        );
      })}
    </div>
  );
};

export default HOC(TodoList, "todos");
