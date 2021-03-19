import React from "react";
import { Answer } from "../../../globals/types";
import AnswerItem from "../../entityItem/answerItem";

type AnswerGroupProps = { answerData: Answer[] };

export default function AnswerGroup(props: AnswerGroupProps): JSX.Element {
  const indexToLetter = (index: number): string => {
    switch (index) {
      case 0:
        return "A. ";
      case 1:
        return "B. ";
      case 2:
        return "C. ";
      case 3:
        return "D. ";
      case 4:
        return "E. ";
      default:
        return "A. ";
    }
  };
  return (
    <div>
      {props.answerData.map((answer: Answer, index: number) => (
        <div key={answer.id} className="quiz-page-item">
          <pre className="quiz-manager-entity-text">{indexToLetter(index)}</pre>
          <AnswerItem answer={answer}></AnswerItem>
        </div>
      ))}
    </div>
  );
}
