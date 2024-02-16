import React, { useEffect, useState } from "react";

const User = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbyIK3KXV43puN-vjl-a7Xcl01DoIgB7wWtds_PG45DxI-NK47hBuIy21NqrrNiWyu3F/exec";
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    const req = await fetch(url, {
      method: "GET",
      mode: "cors",
    });
    const response = await req.json();
    setUsers(response.data);
    console.log(response);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      <div className="sub-title">users info</div>
      <div className="flex"></div>
    </div>
  );
};

export default User;
