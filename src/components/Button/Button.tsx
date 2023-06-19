import { IButton } from "../../types";
import "./Button.css";

const Button = ({ content, isActive, typeSubmit, callback }: IButton) => {
  return (
    <button
      onClick={callback ? () => callback() : () => {}}
      type={typeSubmit ? "submit" : "button"}
      className={"button"}
      disabled={!isActive}
      style={{
        backgroundColor: isActive ? "#9747FF" : "inherit",
        border: isActive ? "none" : "3px solid #9747FF",
        opacity: isActive ? 1 : 0.5,
      }}
    >
      {content}
    </button>
  );
};
export default Button;
