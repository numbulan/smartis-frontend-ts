import React from "react";
import BasicTable from "../Table/Table";

const UserList: React.FC<{
  users: { partitionKey: string; rowKey: string; message: string }[];
  setSelectedUser: React.Dispatch<React.SetStateAction<string>>;
  closePopup: Function;
}> = (props) => {
  let userList: { name: string; id: string; counter: number }[] = [];
  props.users.map((user) => {
    if (
      userList.some(
        (e) => e.name.toLowerCase() === user.partitionKey.toLowerCase()
      )
    ) {
      const index = userList.findIndex((obj) => {
        return obj.name.toLowerCase() === user.partitionKey.toLowerCase();
      });
      if (index !== -1) {
        userList[index].counter += 1;
      }
    } else {
      const userName =
        user.partitionKey.charAt(0).toUpperCase() + user.partitionKey.slice(1);
      userList.push({ name: userName, id: user.rowKey, counter: 1 });
    }
    return null;
  });
  userList.sort((a, b) => b.counter - a.counter);

  return (
    <BasicTable
      users={userList}
      closePopup={props.closePopup}
      setSelectedUser={props.setSelectedUser}
    />
  );
};

export default UserList;
