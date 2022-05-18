import { useEffect, useState } from "react";
import SmartisList from "../SmartisList/SmartisList";

function Smartis() {
  const [smartisList, setSmartisList] = useState([]);
  const API_HOST = "https://smartiscounterbackend.azurewebsites.net/";
  // const API_HOST = "http://localhost:3000/";

  async function componentDidMount(user: string) {
    fetch(API_HOST + "smartis/smartis/" + user)
      .then((response) => response.json())
      .then((res) => {
        if (res && res.data) {
          setSmartisList(res.data);
        }
      });
  }
  useEffect(() => {
    componentDidMount("martin");
  }, []);
  return <SmartisList users={smartisList} />;
}

export default Smartis;
