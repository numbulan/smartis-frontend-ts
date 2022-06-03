import SmartisForm from "../SmartisForm/SmartisForm";
import Smartis from "../../Content/Smartis/Smartis";
import "./Popup.css";

function Popup(props: any) {
  return (
    <div className="popup">
      <div className="popup_inner">
        {props.content === "smartisform" ? (
          <div>
            <h1>Smarties vergeben</h1>
            <SmartisForm closePopup={props.closePopup} />
          </div>
        ) : (
          <div>
            <h1>Smarties von {props.selectedUser}</h1>
            <Smartis
              closePopup={props.closePopup}
              selectedUser={props.selectedUser}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Popup;
