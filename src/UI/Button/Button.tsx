import { Button as BootstrapButton } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = (props: any) => {
  return (
    <BootstrapButton
      variant={props.className}
      type={props.type}
      className={`button ${props.className} m-3`}
      onClick={props.onClick}
    >
      {props.children}
    </BootstrapButton>
  );
};

export default Button;
