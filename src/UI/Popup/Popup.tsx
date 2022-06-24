import SmartisForm from "../SmartisForm/SmartisForm";
import Smartis from "../../Content/Smartis/Smartis";
import React from "react";
import "./Popup.css";
import { Stack, Modal } from "react-bootstrap";

function Backdrop(props: any) {
  return <div onClick={props.closePopup} />;
}

function Popup(props: any) {
  return (
    <Modal onHide={props.closePopup}>
      <Modal.Header closeButton>
        {props.content === "smartisform" ? (
          <Modal.Title>Smarties vergeben</Modal.Title>
        ) : (
          <Modal.Title className="">
            Smarties von {props.selectedUser}
          </Modal.Title>
        )}
      </Modal.Header>
      <Modal.Body>
        {props.content === "smartisform" ? (
          <SmartisForm
            closePopup={props.closePopup}
            activeUser={props.activeUser}
          />
        ) : (
          <Smartis
            closePopup={props.closePopup}
            selectedUser={props.selectedUser}
          />
        )}
      </Modal.Body>
    </Modal>

    /*     <div className="popup">
      <div className="popup_inner">
        {props.content === "smartisform" ? (
          <Stack gap={3}>
            <h1>Smarties vergeben</h1>
            <SmartisForm
              closePopup={props.closePopup}
              activeUser={props.activeUser}
            />
          </Stack>
        ) : (
          <Stack gap={3}>
            <h1 className="">Smarties von {props.selectedUser}</h1>
            <Smartis
              closePopup={props.closePopup}
              selectedUser={props.selectedUser}
            />
          </Stack>
        )}
      </div>
    </div> */
  );
}

export default Popup;
