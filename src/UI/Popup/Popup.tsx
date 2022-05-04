import "./Popup.css";
import Button from "../Button/Button";

function Popup(props: any) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <h1>{props.text}</h1>
        <Button type="button" className="negativ" onClick={props.closePopup}>
          Abbrechen
        </Button>
        <Button type="button" className="positiv" onClick={props.addSmartis()}>
          Senden
        </Button>
      </div>
    </div>
  );
}

export default Popup;
/*
class Popup extends React.Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <h1>{this.props.text}</h1>
          <button onClick={this.props.closePopup}>close me</button>
          </div>
        </div>
      );
    }
  }
*/
