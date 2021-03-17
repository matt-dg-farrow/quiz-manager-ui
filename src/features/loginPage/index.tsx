import React from "react";
import Button from "../../components/button";
import TextInput from "../../components/textInput";

export default function LoginPage() {
  return (
    <div>
      <TextInput name="Input" />
      <Button name="Button" type="submit" />
    </div>
  );
}
