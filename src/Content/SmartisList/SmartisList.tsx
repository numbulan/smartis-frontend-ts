import { Button } from "@mui/material";
import SmartisInfos from "../../UI/SmartisInfos/SmartisInfos";

const SmartisList: React.FC<{
  users: {
    partitionKey: string;
    rowKey: string;
    message: string;
    from: string;
    timestamp: string;
  }[];
  closePopup: Function;
}> = (props) => {
  let smartisList: {
    name: string;
    id: string;
    message: string;
    from: string;
    date: string;
  }[] = [];

  function closePopupHandler() {
    props.closePopup(null);
  }
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
      <Button type="button" className="negativ" onClick={closePopupHandler}>
        Abbrechen
      </Button>
    </div>
  );
};

export default SmartisList;
