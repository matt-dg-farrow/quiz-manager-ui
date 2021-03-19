import React from "react";
import Button from "../../components/button";
import Label from "../../components/label";
import PageTitle from "../../components/pageTitle";
import TextInput from "../../components/textInput";
import { Link } from "react-router-dom";

export default function LoginPage(): JSX.Element {
  return (
    <div className="page-content-container">
      <PageTitle
        cssClass={"quiz-manager-page-title-login"}
        text={`Welcome to the WebbiSkools Quiz Manager!`}
      />
      <div className="login-page-item">
        <Label cssClass="login-page-label" name="username" />
        <TextInput name="username" />
      </div>
      <div className="login-page-item">
        <Label cssClass="login-page-label" name="password" />
        <TextInput name="password" />
      </div>
      <Link to="/quiz" className="quiz-manager-button-link">
        Login
      </Link>
    </div>
  );
}
