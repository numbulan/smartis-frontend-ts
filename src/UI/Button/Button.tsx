import "./Button.css";

const Button = (props: any) => {
  return (
    <button
      type={props.type || "button"}
      className={`button ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
