const SmartisItem: React.FC<{
  from: string;
  date: string;
  message: string;
}> = (props) => {
  return (
    <div>
      <div>{props.from}</div>
      <div>{props.date}</div>
      <div>{props.message}</div>
    </div>
  );
};

export default SmartisItem;
