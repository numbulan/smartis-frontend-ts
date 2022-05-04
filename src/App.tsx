import React, { useState } from "react";
import "./App.css";
import BasicTable from "./Content/Table";
import UserList from "./Content/UserList";

function App() {
  const [userList, setUserList]: any = useState([]);
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
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((res) => {
        if (res && res.data) {
          setUserList([...res.data]);
        }
      });
  }
  componentDidMount();

  return (
    <div className="App">
      <BasicTable users={userList} />
    </div>
  );
}

export default App;
