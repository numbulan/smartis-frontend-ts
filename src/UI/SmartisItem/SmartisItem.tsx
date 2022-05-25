import Card from "../Card/Card";

const SmartisItem: React.FC<{
  from: string;
  date: string;
  message: string;
}> = (props) => {
  const userName = props.from.charAt(0).toUpperCase() + props.from.slice(1);
  const date = new Date(Date.parse(props.date));
  return (
    <Card>
      <div>
        <label htmlFor="from">From: </label>
        {userName}
        <label htmlFor="on"> On: </label>
        {date.toDateString()}
      </div>
      <div>{props.message}</div>
    </Card>
  );
};

export default SmartisItem;
