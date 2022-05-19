import { useEffect, useState } from "react";
import SmartisList from "../SmartisList/SmartisList";

const Smartis: React.FC<{
  selectedUser: string;
}> = (props) => {
  const [smartisList, setSmartisList]: any = useState([]);
  //const API_HOST = "https://smartiscounterbackend.azurewebsites.net/";
  const API_HOST = "http://localhost:3000/";

  async function componentDidMount() {
    console.log(props.selectedUser);
    fetch(API_HOST + "smartis/smartis/" + props.selectedUser)
      .then((response) => response.json())
      .then((res) => {
        if (res && res.data) {
          setSmartisList(res.data);
        }
      });
  }
  useEffect(() => {
    componentDidMount();
  }, []);
  return <SmartisList users={smartisList} />;
};

export default Smartis;
