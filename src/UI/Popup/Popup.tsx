import "./Popup.css";

function Popup(props: any) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{props.text}</h1>
        {props.comp}
      </div>
    </div>
  );
}

export default Popup;
