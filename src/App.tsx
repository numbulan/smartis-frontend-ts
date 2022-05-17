import { stringify } from "querystring";
import React, { useState, useEffect } from "react";
import { isPropertySignature } from "typescript";
import "./App.css";
import BasicTable from "./Content/Table/Table";
import UserList from "./Content/UserList/UserList";
import Button from "./UI/Button/Button";
import Popup from "./UI/Popup/Popup";

function App() {
  const [userList, setUserList]: any = useState([]);
  const [showPopup, setShowPopup]: any = useState(false);
  const API_HOST = "http://localhost:3000/";

  async function componentDidMount() {
    fetch(API_HOST + "users")
      .then((response) => response.json())
      .then((res) => {
        if (res && res.data) {
          setUserList(res.data);
        }
      });
  }
  useEffect(() => {
    componentDidMount();
  }, []);

  const showPopupHandler = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="App">
      <h1>Smartis Counter</h1>
      <main>
        <UserList users={userList} />
        <Button type="button" className="positiv" onClick={showPopupHandler}>
          Add
        </Button>
        {showPopup ? (
          <Popup text="Smartis vergeben" closePopup={showPopupHandler} />
        ) : null}
      </main>
    </div>
  );
}

export default App;
