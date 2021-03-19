import React from "react";
import { Question } from "../../../globals/types";
import QuestionItem from "../../entityItem/questionItem";

type QuestionGroupProps = { questionData: Question[] };

export default function QuestionGroup(props: QuestionGroupProps): JSX.Element {
  return (
    <div>
      {props.questionData.map((question: Question) => (
        <div key={question.id}>
          <QuestionItem question={question}></QuestionItem>
        </div>
      ))}
    </div>
  );
}
