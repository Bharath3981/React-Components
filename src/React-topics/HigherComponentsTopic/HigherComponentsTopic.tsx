import InfoBlock from "../../util/InfoBlock";
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
      <InfoBlock infoType="error">
        <p className="description">
          Higher order components won't possible to implement with functionl
          components. <br />
          Because Higher order component should return wrapped component instead
          of showing HTML content.
        </p>
      </InfoBlock>
      <UsersList />
      <TodoList />
    </div>
  );
};

export default HigherComponentsTopic;
