import Button from "../Button/Button";
import "./SmartisForm.css";
import { useState } from "react";

function SmartisForm(props: any) {
  const [smartisTo, setSmartisTo]: any = useState([]);
  const [smartisFrom, setSmartisFrom]: any = useState([]);
  const [smartisMessage, setSmartisMessage]: any = useState([]);
  const API_HOST = "http://localhost:3000/";
  /*   const [smartisData, setSmartisData]: any = useState({
    to: smartisTo,
    from: smartisFrom,
    message: smartisMessage,
  }); */

  const toChangeHandler = (event: any) => {
    setSmartisTo(event.target.value);
    /*     setSmartisData({
      to: smartisTo,
      from: smartisFrom,
      message: smartisMessage,
    }); */
  };
  const fromChangeHandler = (event: any) => {
    setSmartisFrom(event.target.value);
    /*     setSmartisData({
      to: smartisTo,
      from: smartisFrom,
      message: smartisMessage,
    }); */
  };
  const messageChangeHandler = (event: any) => {
    setSmartisMessage(event.target.value);
    /*     setSmartisData({
      to: smartisTo,
      from: smartisFrom,
      message: smartisMessage,
    }); */
  };
  async function addSmartisFetch(smartisData: {
    from: string;
    to: string;
    message: string;
  }) {
    fetch(API_HOST + "smartis/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(smartisData),
    });
  }
  const sendFormHandler = (event: any) => {
    event.preventDefault();
    const smartisData = {
      from: smartisFrom,
      to: smartisTo,
      message: smartisMessage,
    };
    addSmartisFetch(smartisData);
    props.closePopup();
  };

  return (
    <form>
      <div className="form">
        <div>
          <label className="input" htmlFor="from">
            From:
          </label>
          <input
            className="input"
            type="text"
            id="from"
            value={smartisFrom}
            onChange={fromChangeHandler}
          ></input>
          <label className="input" htmlFor="to">
            To:
          </label>
          <input
            className="input"
            type="text"
            id="to"
            value={smartisTo}
            onChange={toChangeHandler}
          ></input>
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            value={smartisMessage}
            onChange={messageChangeHandler}
          ></textarea>
        </div>
      </div>
      <div>
        <Button type="button" className="negativ" onClick={props.closePopup}>
          Abbrechen
        </Button>
        <Button type="button" className="positiv" onClick={sendFormHandler}>
          Senden
        </Button>
      </div>
    </form>
  );
}

export default SmartisForm;
