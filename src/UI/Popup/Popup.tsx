import SmartisForm from "../SmartisForm/SmartisForm";
import Smartis from "../../Content/Smartis/Smartis";
import React, { Fragment } from "react";
import "./Popup.css";
import { Stack } from "react-bootstrap";

function Backdrop(props: any) {
  return <div onClick={props.closePopup} />;
}

function Popup(props: any) {
  return (
    <Fragment>
      <Backdrop closePopup={props.closePopup} />
      <div className="popup">
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
      </div>
    </Fragment>
  );
}

export default Popup;
