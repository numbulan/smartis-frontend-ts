import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./Content/UserList/UserList";
import Button from "./UI/Button/Button";
import Popup from "./UI/Popup/Popup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userList, setUserList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState("userp");
  const showPopupHandler = (content: string) => {
    setPopupContent(content);
    setShowPopup(!showPopup);
  };
  const [popupContent, setPopupContent] = useState("smartisform");
  const API_HOST = "https://smartiscounterbackend.azurewebsites.net/";
  //const API_HOST = "http://localhost:3000/";

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
  }, [showPopup]);

  return (
    <div className="App">
      <h1>Smartis Counter</h1>
      <main>
        <UserList
          users={userList}
          closePopup={showPopupHandler}
          setSelectedUser={setSelectedUser}
        />
        <Button
          type="Button"
          className="success"
          onClick={() => showPopupHandler("smartisform")}
        >
          Add
        </Button>
        {showPopup ? (
          <Popup
            content={popupContent}
            closePopup={showPopupHandler}
            selectedUser={selectedUser}
          />
        ) : null}
      </main>
    </div>
  );
}

export default App;
