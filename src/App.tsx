import React, { useState, useEffect } from "react";
import "./App.css";
import Smartis from "./Content/Smartis/Smartis";
import UserList from "./Content/UserList/UserList";
import PopupContext from "./store/popup-context";
import Button from "./UI/Button/Button";
import Popup from "./UI/Popup/Popup";
import SmartisForm from "./UI/SmartisForm/SmartisForm";

function App() {
  const [userList, setUserList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(<SmartisForm />);
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
