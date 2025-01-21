import { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

type user = {
  id: number;
  first_name: string;
  last_name: string;
  gender: string;
  married: boolean;
  mobile_no: string;
  city: string;
  pincode: string;
};

const User = () => {
  const url =
    "https://script.google.com/macros/s/AKfycbyIK3KXV43puN-vjl-a7Xcl01DoIgB7wWtds_PG45DxI-NK47hBuIy21NqrrNiWyu3F/exec";
  const [users, setUsers] = useState([]);
  const [editableId, setEditableId] = useState(0);
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
      <table className="custom-table">
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
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user: user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.last_name}</td>
                <td>
                  {user.id === editableId && (
                    <div>
                      <input
                        type="text"
                        className="w-20"
                        value={user.first_name}
                      />
                    </div>
                  )}
                  {user.id !== editableId && user.first_name}
                </td>
                <td>{user.gender}</td>
                <td>{user.married}</td>
                <td>{user.mobile_no}</td>
                <td>{user.city}</td>
                <td>{user.pincode}</td>
                <td>
                  <div className="flex justify-center">
                    <button
                      className="border-none"
                      onClick={() => setEditableId(user.id)}
                    >
                      <CiEdit />
                    </button>
                    {user.id === editableId && (
                      <button
                        className="border-none"
                        onClick={() => setEditableId(0)}
                      >
                        <MdOutlineCancel />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
