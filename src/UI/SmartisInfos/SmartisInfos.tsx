import SmartisItem from "../SmartisItem/SmartisItem";
import React from "react";

const SmartisInfos: React.FC<{
  smartis: {
    name: string;
    id: string;
    message: string;
    from: string;
    date: string;
  }[];
}> = (props) => {
  let smartis = props.smartis;
  smartis.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
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
