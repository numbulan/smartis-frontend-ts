import { stringify } from "querystring";
import React, { useState, useEffect } from "react";
import { isPropertySignature } from "typescript";
import "./App.css";
import Smartis from "./Content/Smartis/Smartis";
import BasicTable from "./Content/Table/Table";
import UserList from "./Content/UserList/UserList";
import PopupContext from "./store/popup-context";
import Button from "./UI/Button/Button";
import Popup from "./UI/Popup/Popup";
import SmartisForm from "./UI/SmartisForm/SmartisForm";

function App() {
  const [userList, setUserList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(<SmartisForm />);
  const API_HOST = "http://localhost:3000/";
  const list = [{ name: "hi", id: "asdljag", counter: 12 }];

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

  const showPopupHandler = (content: JSX.Element) => {
    setPopupContent(content);
    setShowPopup(!showPopup);
  };

  return (
    <PopupContext.Provider
      value={{
        closePopup: () => showPopupHandler(<Smartis />),
      }}
    >
      <div className="App">
        <h1>Smartis Counter</h1>
        <main>
          <UserList users={userList} />
          <Button
            type="button"
            className="positiv"
            onClick={() => showPopupHandler(<SmartisForm />)}
          >
            Add
          </Button>
          {showPopup ? (
            <Popup
              text="Smartis vergeben"
              comp={popupContent}
              closePopup={showPopupHandler}
            />
          ) : null}
        </main>
      </div>
    </PopupContext.Provider>
  );
}

export default App;
