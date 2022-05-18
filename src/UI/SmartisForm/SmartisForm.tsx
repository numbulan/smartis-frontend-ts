import Button from "../Button/Button";
import "./SmartisForm.css";
import { useState, useContext } from "react";
import PopupContext from "../../store/popup-context";

function SmartisForm() {
  const [smartisTo, setSmartisTo] = useState<string>("");
  const [smartisFrom, setSmartisFrom] = useState<string>("");
  const [smartisMessage, setSmartisMessage] = useState<string>("");
  const ctx = useContext(PopupContext);
  const API_HOST = "https://smartiscounterbackend.azurewebsites.net/";

  const toChangeHandler = (event: any) => {
    setSmartisTo(event.target.value);
  };
  const fromChangeHandler = (event: any) => {
    setSmartisFrom(event.target.value);
  };
  const messageChangeHandler = (event: any) => {
    setSmartisMessage(event.target.value);
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
    if (
      smartisFrom.trim() !== "" &&
      smartisTo.trim() !== "" &&
      smartisMessage.trim() !== ""
    ) {
      addSmartisFetch(smartisData);
      ctx.closePopup();
    } else {
      alert("No empty fields!");
    }
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
        <Button type="button" className="negativ" onClick={ctx.closePopup}>
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
