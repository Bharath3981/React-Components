import TodoList from "./TodoList";
import UsersList from "./UsersList";

const HigherComponentsTopic = () => {
  return (
    <div>
      <div className="main-title">Higer order components</div>
      <p className="description">
        Higher order components allow you to reuse component logic across
        multiple components. <br /> In React, a higher-order component is a
        function that takes a component as an argument and returns a new
        component that wraps the original component.
      </p>
      <UsersList />
      <TodoList />
    </div>
  );
};

export default HigherComponentsTopic;
