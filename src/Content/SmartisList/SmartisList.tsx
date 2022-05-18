const SmartisList: React.FC<{
  users: { partitionKey: string; rowKey: string; message: string }[];
}> = (props) => {
  let userList: { name: string; id: string; message: string }[] = [];
  const placeholder = props.users.map((user) => {
    userList.push({
      name: user.partitionKey,
      id: user.rowKey,
      message: user.message,
    });
  });

  return <div>A</div>;
};

export default SmartisList;
