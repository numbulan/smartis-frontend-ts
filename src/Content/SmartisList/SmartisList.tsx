import { Button } from "@mui/material";
import SmartisInfos from "../../UI/SmartisInfos/SmartisInfos";
import { useContext } from "react";
import PopupContext from "../../store/popup-context";

const SmartisList: React.FC<{
  users: {
    partitionKey: string;
    rowKey: string;
    message: string;
    from: string;
    timestamp: string;
  }[];
}> = (props) => {
  let smartisList: {
    name: string;
    id: string;
    message: string;
    from: string;
    date: string;
  }[] = [];
  const ctx = useContext(PopupContext);
  props.users.map((user) => {
    smartisList.push({
      name: user.partitionKey,
      id: user.rowKey,
      message: user.message,
      from: user.from,
      date: user.timestamp,
    });
    return null;
  });

  return (
    <div>
      <SmartisInfos smartis={smartisList} />
      <Button type="button" className="negativ" onClick={ctx.closePopup}>
        Abbrechen
      </Button>
    </div>
  );
};

export default SmartisList;
