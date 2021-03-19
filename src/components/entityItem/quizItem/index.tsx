import React from "react";
import { Link } from "react-router-dom";
import { Question, Quiz } from "../../../globals/types";
import QuestionGroup from "../../entityGroup/questionGroup";

const viewTypes = { list: "list", single: "single" };

type QuizItemProps = {
  quiz: Quiz;
  view: string;
};

export default function QuizItem({ quiz, view }: QuizItemProps): JSX.Element {
  return (
    <div>
      {view === viewTypes.list ? (
        <div className="quiz-page-item">
          <Link to={`/quiz/${quiz.id}`} className="quiz-manager-button-link">
            View
          </Link>
          <h2 className="quiz-manager-entity-title">{quiz.title}</h2>
          <Link to="#" className="quiz-manager-button-link-edit">
            Edit
          </Link>
          <Link to="#" className="quiz-manager-button-link-delete">
            Delete
          </Link>
        </div>
      ) : (
        <>
          <QuestionGroup questionData={quiz.questions} />
        </>
      )}
    </div>
  );
}
