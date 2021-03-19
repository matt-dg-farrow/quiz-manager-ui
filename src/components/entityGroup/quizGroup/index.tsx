import React from "react";
import { Quiz } from "../../../globals/types";
import QuizItem from "../../entityItem/quizItem";

type QuizGroupProps = { quizData: Quiz[] };

export default function QuizGroup(props: QuizGroupProps): JSX.Element {
  return (
    <div>
      {props.quizData.map((quiz: Quiz) => (
        <div key={quiz.id}>
          <QuizItem quiz={quiz} view="list"></QuizItem>
        </div>
      ))}
    </div>
  );
}
