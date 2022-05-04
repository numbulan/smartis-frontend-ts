import React, { useState } from "react";
import { isPropertySignature } from "typescript";
import "./App.css";
import BasicTable from "./Content/Table";
import Button from "./UI/Button/Button";
import Popup from "./UI/Popup/Popup";

function App() {
  const [userList, setUserList]: any = useState([]);
  const [showPopup, setShowPopup]: any = useState(false);
  const API_HOST = "http://localhost:3000/";
  /*const List = [
    { name: "Martin", id: 1, counter: 0 },
    { name: "Jonas", id: 2, counter: 0 },
    { name: "Thomas", id: 3, counter: 0 },
    { name: "Tamara", id: 4, counter: 0 },
    { name: "Marlon", id: 5, counter: 0 },
    { name: "Johanna", id: 6, counter: 0 },
    { name: "Noah", id: 7, counter: 0 },
    { name: "Kevin", id: 8, counter: 2 },
    { name: "Christian", id: 9, counter: 5 },
  ];*/
  async function componentDidMount() {
    fetch(API_HOST + "users")
      .then((response) => response.json())
      .then((res) => {
        if (res && res.data) {
          setUserList([...res.data]);
        }
        console.log(setShowPopup);
      });
  }
  componentDidMount();

  const showPopupHandler = () => {
    setShowPopup(!showPopup);
    console.log(showPopup);
  };

  const data = {
    to: "user2",
    from: "user1",
    message: "show me",
  };

  async function addSmartisFetch() {
    fetch(API_HOST + "smartis/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  return (
    <div className="App">
      <h1>Smartis Counter</h1>
      <main>
        <BasicTable users={userList} />
        <Button type="button" className="positiv" onClick={showPopupHandler}>
          Add
        </Button>
        {showPopup ? (
          <Popup
            text="Smartis vergeben"
            closePopup={showPopupHandler}
            addSmartis={addSmartisFetch}
          />
        ) : null}
      </main>
    </div>
  );
}

export default App;
