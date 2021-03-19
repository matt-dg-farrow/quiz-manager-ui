import React from "react";
import { Link } from "react-router-dom";
import { Answer } from "../../../globals/types";

type AnswerItemProps = {
  answer: Answer;
};

export default function AnswerItem({ answer }: AnswerItemProps): JSX.Element {
  return (
    <div>
      <div className="quiz-page-item">
        <p className="quiz-manager-entity-text">{answer.text}</p>
      </div>
    </div>
  );
}
