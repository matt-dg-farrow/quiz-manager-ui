import React from "react";
import startCase from "lodash";

type ButtonProps = {
  cssClass?: string;
  name: string;
  onClick?: any;
  type: "submit" | "button" | "reset";
};

export const Button = ({
  cssClass = "quiz-manager-button",
  name,
  onClick = "",
  type,
}: ButtonProps): JSX.Element => (
  <button
    aria-label={`${name} form button`}
    className={cssClass}
    id={name}
    name={name}
    type={type}
    onClick={onClick}
  >
    {startCase(name)}
    {name.charAt(0).toUpperCase() + name.substring(1)}
  </button>
);

export default Button;
