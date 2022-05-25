import SmartisItem from "../SmartisItem/SmartisItem";

const SmartisInfos: React.FC<{
  smartis: {
    name: string;
    id: string;
    message: string;
    from: string;
    date: string;
  }[];
}> = (props) => {
  return (
    <div>
      {props.smartis.map((smartis) => (
        <SmartisItem
          from={smartis.from}
          date={smartis.date}
          message={smartis.message}
          key={smartis.id}
        />
      ))}
    </div>
  );
};

export default SmartisInfos;
