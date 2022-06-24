import React, { useState, useEffect } from "react";
import "./App.css";
import UserList from "./Content/UserList/UserList";
import Button from "./UI/Button/Button";
import Popup from "./UI/Popup/Popup";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [userList, setUserList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [activeUser, setActiveUser] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const showPopupHandler = (content: string) => {
    setPopupContent(content);
    setShowPopup(!showPopup);
  };
  const [popupContent, setPopupContent] = useState("smartisform");
  const API_HOST = "https://smartiscounterbackend.azurewebsites.net/";
  //const API_HOST = "http://localhost:3000/";

  async function checkLogin() {
    fetch("https://gray-ocean-0a735c403.1.azurestaticapps.net/.auth/me")
      .then((response) => response.json())
      .then((res) => {
        if (res && res.clientPrincipal) {
          setIsLogedIn(true);
          let name = res.clientPrincipal.userDetails.split(".")[0];
          setActiveUser(name);
          console.log(activeUser);
        }
      });
  }

  function forwardToLogin() {
    window.location.replace(
      "/.auth/login/aad?post_login_redirect_uri=https://gray-ocean-0a735c403.1.azurestaticapps.net"
    );
    checkLogin();
  }

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
    checkLogin();
  }, []);
  useEffect(() => {
    componentDidMount();
  }, [showPopup]);

  const inTeams = (): boolean => {
    try {
      return window.self !== window.top;
    } catch (e) {
      return true;
    }
  };

  return (
    <div>
      {inTeams() ? (
        <div className="App">
          <h1>Smarties Counter</h1>
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
                activeUser={activeUser}
              />
            ) : null}
          </main>
        </div>
      ) : (
        <div>
          {isLogedIn ? (
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
                    activeUser={activeUser}
                  />
                ) : null}
              </main>
            </div>
          ) : (
            <div className="justify-content-center text-center vertical-center">
              <Button
                type="Button"
                className="success"
                onClick={forwardToLogin}
              >
                Login
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
