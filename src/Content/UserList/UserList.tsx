import BasicTable from "../Table/Table";

const UserList: React.FC<{
  users: { partitionKey: string; rowKey: string; message: string }[];
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
      userList.push({ name: user.partitionKey, id: user.rowKey, counter: 1 });
    }
  });
  userList.sort((a, b) => b.counter - a.counter);

  return <BasicTable users={userList} />;
};

export default UserList;
