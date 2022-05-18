import { useEffect, useState } from "react";
import BasicTable from "../Table/Table";
import UserList from "../UserList/UserList";

function Smartis() {
  const [smartisList, setSmartisList] = useState([]);
  const API_HOST = "https://smartiscounterbackend.azurewebsites.net/";
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
  return <UserList users={smartisList} />;
}

export default Smartis;
