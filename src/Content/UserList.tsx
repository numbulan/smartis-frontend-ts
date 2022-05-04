import * as React from "react";

const UserList: React.FC<{
  users: { name: string; id: number; counter: number }[];
}> = (props) => {
  return (
    <div>
      <ul>
        {props.users.map((user) => (
          <ul key={user.id}>
            <div>
              {user.name} | {user.counter}
            </div>
          </ul>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
