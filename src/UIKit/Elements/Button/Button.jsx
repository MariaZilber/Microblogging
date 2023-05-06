import "./Button.css";
import { Center } from "UIKit";

export const Button = (props) => {
  return (
    <button
      className="Button"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <Center>{props.children}</Center>
    </button>
  );
};
