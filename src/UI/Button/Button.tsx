import { Button as BootstrapButton } from "react-bootstrap";
import React from "react";

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
