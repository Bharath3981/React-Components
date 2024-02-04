import { useEffect, useState } from "react";

const HigherComponentsTopic = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return await res.json();
  };
  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
  }, []);
  return (
    <div>
      <div className="main-title">Higer order components</div>
      <p className="description">
        Higher order components allow you to reuse component logic across
        multiple components. <br /> In React, a higher-order component is a
        function that takes a component as an argument and returns a new
        component that wraps the original component.
      </p>
      <div className="side-title">Users</div>
      {users.map((user: any) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default HigherComponentsTopic;
