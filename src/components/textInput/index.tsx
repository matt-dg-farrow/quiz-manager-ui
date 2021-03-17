import React from "react";

type TextInputProps = {
  className?: string;
  name: string;
  //   reference: any;
  type?: string;
  defaultValue?: string;
};

export const TextInput = ({
  className,
  name,
  //   reference,
  type = "text",
  defaultValue = "",
}: TextInputProps): JSX.Element => (
  <input
    aria-label={`text input for ${name}`}
    className={
      className ? `quiz-manager-input ${className}` : "quiz-manager-input"
    }
    id={name}
    name={name}
    type={type}
    // ref={reference}
    defaultValue={defaultValue}
  />
);

export default TextInput;
