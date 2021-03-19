import React from "react";
import { Link } from "react-router-dom";
import { Question } from "../../../globals/types";
import AnswerGroup from "../../entityGroup/answerGroup";

const viewTypes = { list: "list", single: "single" };

type QuestionItemProps = {
  question: Question;
};

export default function QuestionItem({
  question,
}: QuestionItemProps): JSX.Element {
  return (
    <div>
      <div className="quiz-page-item">
        <h2 className="quiz-manager-entity-title">{question.title}</h2>
        <Link to="#" className="quiz-manager-button-link-edit">
          Edit
        </Link>
        <Link to="#" className="quiz-manager-button-link-delete">
          Delete
        </Link>
      </div>
      <div className="quiz-page-item">
        <AnswerGroup answerData={question.answers} />
      </div>
    </div>
  );
}
