import HOC from "./HOC";

const UsersList = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      {data.map((user: any) => {
        return (
          <div key={user.id}>
            <span>{user.name}</span>
          </div>
        );
      })}
    </div>
  );
};

export default HOC(UsersList, "users");
