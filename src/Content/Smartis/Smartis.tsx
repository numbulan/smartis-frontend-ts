import { useEffect, useState } from "react";
import SmartisList from "../SmartisList/SmartisList";
import React from "react";

const Smartis: React.FC<{
  selectedUser: string;
  closePopup: Function;
}> = (props) => {
  const [smartisList, setSmartisList]: any = useState([]);
  const API_HOST = "https://smartiscounterbackend.azurewebsites.net/";
  //const API_HOST = "http://localhost:3000/";

  async function componentDidMount() {
    fetch(API_HOST + "smartis/smartis/" + props.selectedUser.toLowerCase())
      .then((response) => response.json())
      .then((res) => {
        if (res && res.data) {
          setSmartisList(res.data);
        }
      });
  }
  useEffect(() => {
    componentDidMount();
  });
  return <SmartisList closePopup={props.closePopup} users={smartisList} />;
};

export default Smartis;
