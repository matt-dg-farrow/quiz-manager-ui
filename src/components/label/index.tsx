import React from "react";

type LabelProps = {
  name: string;
  text?: string;
  cssClass?: string;
};

const parseLabel = (labelName: string): string =>
  labelName.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

export const Label = ({
  name,
  text,
  cssClass = "quiz-manager-label",
}: LabelProps): JSX.Element => (
  <label
    aria-label={`${name} label`}
    className={cssClass}
    htmlFor={name}
    id={`${name}Label`}
  >
    {text || parseLabel(name)}
  </label>
);

export default Label;
