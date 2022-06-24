import Button from "../Button/Button";
import { useState } from "react";
import { Stack, Form, Row } from "react-bootstrap";
import React from "react";

function SmartisForm(props: any) {
  const [smartisTo, setSmartisTo] = useState<string>("");
  const [smartisFrom, setSmartisFrom] = useState<string>(props.activeUser);
  const [smartisMessage, setSmartisMessage] = useState<string>("");
  const API_HOST = "https://smartiscounterbackend.azurewebsites.net/";
  //const API_HOST = "http://localhost:3000/";

  const toChangeHandler = (event: any) => {
    if (event.target.value.toLowerCase() !== smartisFrom.toLowerCase()) {
      setSmartisTo(event.target.value);
    }
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
      props.closePopup();
    } else {
      alert("No empty fields!");
    }
  };

  return (
    <Form>
      <Stack gap={2} className="col-md-5 mx-auto">
        <Form.Group as={Row} className="mb-3 row-cols-1" controlId="form">
          <Stack direction="horizontal" gap={3}>
            <Form.Label className="col text-left">
              <label htmlFor="from" className="input">
                From:
              </label>
            </Form.Label>
            <Form.Label className="col">
              <label>{smartisFrom}</label>
              {/*               <input
                className="w-100"
                type="text"
                id="from"
                value={smartisFrom}
                onChange={fromChangeHandler}
              ></input> */}
            </Form.Label>
          </Stack>

          <Stack direction="horizontal" gap={3}>
            <Form.Label className="col">
              <label className="input" htmlFor="to">
                To:
              </label>
            </Form.Label>
            <Form.Label className="col">
              <input
                className="w-100"
                type="text"
                id="to"
                value={smartisTo}
                onChange={toChangeHandler}
              ></input>
            </Form.Label>
          </Stack>

          <Stack direction="horizontal" gap={3}>
            <Form.Label className="col">
              <label className="input" htmlFor="message">
                Message:
              </label>
            </Form.Label>
            <Form.Label className="col">
              <textarea
                id="message"
                className="w-100"
                value={smartisMessage}
                onChange={messageChangeHandler}
              ></textarea>
            </Form.Label>
          </Stack>

          <Stack direction="horizontal" gap={3}>
            <Button
              type="button"
              className="danger col"
              onClick={props.closePopup}
            >
              Abbrechen
            </Button>
            <Button
              type="button"
              className="success col"
              onClick={sendFormHandler}
            >
              Senden
            </Button>
          </Stack>
        </Form.Group>
      </Stack>
    </Form>
  );
}

export default SmartisForm;
