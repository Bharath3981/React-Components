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
      <table>
        <thead>
          <tr>
            <td>S.No</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Gender</td>
            <td>Married</td>
            <td>Mobile No</td>
            <td>City</td>
            <td>Pincode</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.last_name}</td>
                <td>{user.first_name}</td>
                <td>{user.gender}</td>
                <td>{user.married}</td>
                <td>{user.mobile_no}</td>
                <td>{user.city}</td>
                <td>{user.pincode}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
